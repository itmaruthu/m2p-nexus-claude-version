import { useId, useRef, useState } from 'react';
import { consultEndpoint, contactOptions, industryOptions, needOptions } from '../../config/consultation';
import { waLink } from '../../config/site';
import { WhatsAppIcon } from '../icons';

/**
 * "Book a consultation" form: the basic requirements we need for a useful first call.
 *
 * - Validates a field when the visitor leaves it, and clears the error as soon as it is fixed.
 * - Sends to the Apps Script endpoint as a simple form-encoded POST (no CORS preflight). Without an
 *   endpoint, or if sending fails, the visitor can pass the same details to WhatsApp instead.
 * - Spam: a hidden honeypot field and the time spent on the form go along; the script drops obvious bots.
 * - Without JavaScript the <form> posts straight to the endpoint (when one is configured).
 */

const empty = { name: '', phone: '', email: '', business: '', industry: '', needs: [], message: '', contact: 'WhatsApp', consent: false };

const phoneOk = (v) => /^\+?[\d\s-]{10,16}$/.test(v.trim()) && v.replace(/\D/g, '').length >= 10;
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Please tell us your name.';
  if (!f.phone.trim()) e.phone = 'Please add a phone or WhatsApp number so we can reach you.';
  else if (!phoneOk(f.phone)) e.phone = 'This number looks incomplete. Use 10 digits, with +91 if you like.';
  if (f.email.trim() && !emailOk(f.email)) e.email = 'This email address looks incomplete.';
  if (!f.needs.length && !f.message.trim()) e.needs = 'Pick at least one area, or tell us about your requirement below.';
  if (!f.consent) e.consent = 'Please confirm we can contact you about this request.';
  return e;
}

function summary(f) {
  return [
    'Hello M2P Nexus, I would like to book a consultation.',
    '',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.email && `Email: ${f.email}`,
    f.business && `Business: ${f.business}`,
    f.industry && `Industry: ${f.industry}`,
    f.needs.length && `Looking for: ${f.needs.join(', ')}`,
    f.message && `Details: ${f.message}`,
    `Best way to reach me: ${f.contact}`,
  ]
    .filter(Boolean)
    .join('\n');
}

const input =
  'mt-1.5 block w-full rounded-xl border-0 bg-white px-4 py-3 text-ink ring-1 ring-rule placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-ink aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#B42318]';
const labelCls = 'block font-heading font-semibold text-ink';

function FieldError({ id, msg }) {
  return msg ? (
    <p id={id} className="mt-1.5 text-sm font-medium text-[#B42318]">
      {msg}
    </p>
  ) : null;
}

export default function ConsultationForm({ onDone }) {
  const uid = useId();
  const id = (k) => `${uid}-${k}`;
  const [form, setForm] = useState(empty);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | whatsapp | error
  const started = useRef(0);

  const errors = validate(form);
  const show = (k) => (touched[k] ? errors[k] : undefined);

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' && k === 'consent' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };
  const toggleNeed = (n) => {
    setForm((f) => ({ ...f, needs: f.needs.includes(n) ? f.needs.filter((x) => x !== n) : [...f.needs, n] }));
    setTouched((t) => ({ ...t, needs: true }));
  };
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const toWhatsApp = () => window.open(waLink(summary(form)), '_blank', 'noopener');

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setTouched({ name: true, phone: true, email: true, needs: true, consent: true });
      const firstBad = ['name', 'phone', 'email', 'needs', 'consent'].find((k) => errs[k]);
      document.getElementById(id(firstBad))?.focus();
      return;
    }
    if (!consultEndpoint) {
      toWhatsApp();
      setStatus('whatsapp');
      return;
    }
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    fd.set('needs', form.needs.join(', '));
    fd.set('elapsed', String(Math.round(e.timeStamp - (started.current || e.timeStamp))));
    fd.set('page', window.location.pathname);
    try {
      const res = await fetch(consultEndpoint, { method: 'POST', body: new URLSearchParams(fd) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) throw new Error(json.error || res.statusText);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent' || status === 'whatsapp') {
    return (
      <div role="status" className="space-y-4 py-6 text-center">
        <span aria-hidden="true" className="ask-orb mx-auto block h-14 w-14 rounded-full" />
        <h3 className="font-display text-2xl font-bold text-ink">Thank you, {form.name.split(' ')[0]}.</h3>
        <p className="mx-auto max-w-sm text-body leading-relaxed">
          {status === 'sent'
            ? `We have your details and will get back to you ${{ WhatsApp: 'on WhatsApp', 'Phone call': 'with a call', Email: 'by email' }[form.contact]} soon.`
            : 'WhatsApp has opened with your details filled in. Press send there and we will take it from here.'}
        </p>
        {onDone && (
          <button type="button" onClick={onDone} className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={submit}
      onFocusCapture={(e) => {
        if (!started.current) started.current = e.timeStamp;
      }}
      action={consultEndpoint || undefined}
      method="post"
      className="space-y-5"
    >
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className={labelCls}>
            Your name
          </label>
          <input
            id={id('name')}
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={set('name')}
            onBlur={blur('name')}
            aria-invalid={Boolean(show('name'))}
            aria-describedby={show('name') ? id('name-err') : undefined}
            className={input}
          />
          <FieldError id={id('name-err')} msg={show('name')} />
        </div>
        <div>
          <label htmlFor={id('phone')} className={labelCls}>
            Phone or WhatsApp
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 98765 43210"
            value={form.phone}
            onChange={set('phone')}
            onBlur={blur('phone')}
            aria-invalid={Boolean(show('phone'))}
            aria-describedby={show('phone') ? id('phone-err') : undefined}
            className={input}
          />
          <FieldError id={id('phone-err')} msg={show('phone')} />
        </div>
        <div>
          <label htmlFor={id('email')} className={labelCls}>
            Email <span className="font-normal text-body">(optional)</span>
          </label>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            onBlur={blur('email')}
            aria-invalid={Boolean(show('email'))}
            aria-describedby={show('email') ? id('email-err') : undefined}
            className={input}
          />
          <FieldError id={id('email-err')} msg={show('email')} />
        </div>
        <div>
          <label htmlFor={id('business')} className={labelCls}>
            Business name <span className="font-normal text-body">(optional)</span>
          </label>
          <input id={id('business')} name="business" autoComplete="organization" value={form.business} onChange={set('business')} className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id('industry')} className={labelCls}>
            Industry <span className="font-normal text-body">(optional)</span>
          </label>
          <select id={id('industry')} name="industry" value={form.industry} onChange={set('industry')} className={input}>
            <option value="">Choose your industry</option>
            {industryOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset aria-describedby={show('needs') ? id('needs-err') : undefined}>
        <legend id={id('needs')} tabIndex={-1} className={`${labelCls} outline-none`}>
          What do you need help with?
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {needOptions.map((n) => {
            const on = form.needs.includes(n);
            return (
              <label
                key={n}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-marigold ${
                  on ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
                }`}
              >
                <input type="checkbox" name="needs" value={n} checked={on} onChange={() => toggleNeed(n)} className="sr-only" />
                {n}
              </label>
            );
          })}
        </div>
        <FieldError id={id('needs-err')} msg={show('needs')} />
      </fieldset>

      <div>
        <label htmlFor={id('message')} className={labelCls}>
          Tell us about your business and what slows you down <span className="font-normal text-body">(optional)</span>
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={3}
          maxLength={1500}
          placeholder="e.g. We bill about 80 customers a day on paper and take orders on WhatsApp."
          value={form.message}
          onChange={set('message')}
          className={input}
        />
      </div>

      <fieldset>
        <legend className={labelCls}>Best way to reach you</legend>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {contactOptions.map((c) => (
            <label key={c} className="inline-flex cursor-pointer items-center gap-2 py-1 text-ink">
              <input type="radio" name="contact" value={c} checked={form.contact === c} onChange={set('contact')} className="h-4 w-4 accent-[#172554]" />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body">
          <input
            id={id('consent')}
            type="checkbox"
            name="consent"
            value="yes"
            checked={form.consent}
            onChange={set('consent')}
            onBlur={blur('consent')}
            aria-invalid={Boolean(show('consent'))}
            aria-describedby={show('consent') ? id('consent-err') : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#172554]"
          />
          M2P Nexus may contact me about this request. My details are used only to reply and follow up, and are never sold or shared.
        </label>
        <FieldError id={id('consent-err')} msg={show('consent')} />
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-xl bg-[#FEF3F2] p-4 text-sm text-[#7A271A]">
          We couldn&rsquo;t send your details just now. Your answers are still here: try again, or send them to us on WhatsApp in one tap.
          <button type="button" onClick={toWhatsApp} className="mt-3 flex items-center gap-2 font-semibold text-leaf underline underline-offset-4">
            <WhatsAppIcon className="h-4 w-4" />
            Send these details on WhatsApp
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#0E173A] disabled:cursor-wait disabled:opacity-80"
      >
        {status === 'sending' ? 'Sending your details…' : consultEndpoint ? 'Book my consultation' : 'Send my details on WhatsApp'}
      </button>
    </form>
  );
}
