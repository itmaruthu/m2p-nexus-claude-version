import { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { consultEndpoint, contactOptions, formText, industryOptions, needOptions, optionLabelsTa } from '../../config/consultation';
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

function validate(f, t) {
  const e = {};
  if (!f.name.trim()) e.name = t.errName;
  if (!f.phone.trim()) e.phone = t.errPhoneMissing;
  else if (!phoneOk(f.phone)) e.phone = t.errPhoneBad;
  if (f.email.trim() && !emailOk(f.email)) e.email = t.errEmail;
  if (!f.needs.length && !f.message.trim()) e.needs = t.errNeeds;
  if (!f.consent) e.consent = t.errConsent;
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

/**
 * `lang` ('en' | 'ta') switches every label and message; option values sent to the sheet stay English.
 * `preset` ({ needs, message }) pre-fills the form, e.g. when a starter pack's button opened it.
 * `done` ({ label, to }) adds an onward link to the thank-you state.
 */
export default function ConsultationForm({ onDone, lang = 'en', preset, done }) {
  const t = formText[lang] || formText.en;
  const label = (v) => (lang === 'ta' ? optionLabelsTa[v] || v : v);
  const uid = useId();
  const id = (k) => `${uid}-${k}`;
  const [form, setForm] = useState(() => ({ ...empty, needs: preset?.needs || [], message: preset?.message || '' }));
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | whatsapp | error
  const started = useRef(0);

  const errors = validate(form, t);
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
    if (status === 'sending') return;
    const errs = validate(form, t);
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
        <h3 className="font-display text-2xl font-bold text-ink">{t.thanks.replace('{name}', form.name.split(' ')[0])}</h3>
        <p className="mx-auto max-w-sm text-body leading-relaxed">
          {status === 'sent' ? t.sent.replace('{via}', t.via[form.contact]) : t.waSent}
        </p>
        {onDone && (
          <button type="button" onClick={onDone} className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
            {t.close}
          </button>
        )}
        {done && (
          <Link to={done.to} className="inline-block py-2.5 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
            {done.label}
          </Link>
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
            {t.name}
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
            {t.phone}
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t.phonePh}
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
            {t.email} <span className="font-normal text-body">{t.optional}</span>
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
            {t.business} <span className="font-normal text-body">{t.optional}</span>
          </label>
          <input id={id('business')} name="business" autoComplete="organization" value={form.business} onChange={set('business')} className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id('industry')} className={labelCls}>
            {t.industry} <span className="font-normal text-body">{t.optional}</span>
          </label>
          <select id={id('industry')} name="industry" value={form.industry} onChange={set('industry')} className={input}>
            <option value="">{t.industryPh}</option>
            {industryOptions.map((o) => (
              <option key={o} value={o}>
                {label(o)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset aria-describedby={show('needs') ? id('needs-err') : undefined}>
        <legend id={id('needs')} tabIndex={-1} className={`${labelCls} outline-none`}>
          {t.needs}
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {needOptions.map((n) => {
            const on = form.needs.includes(n);
            return (
              <label
                key={n}
                className={`inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-marigold ${
                  on ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
                }`}
              >
                <input type="checkbox" name="needs" value={n} checked={on} onChange={() => toggleNeed(n)} className="sr-only" />
                {label(n)}
              </label>
            );
          })}
        </div>
        <FieldError id={id('needs-err')} msg={show('needs')} />
      </fieldset>

      <div>
        <label htmlFor={id('message')} className={labelCls}>
          {t.message} <span className="font-normal text-body">{t.optional}</span>
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={3}
          maxLength={1500}
          placeholder={t.messagePh}
          value={form.message}
          onChange={set('message')}
          className={input}
        />
      </div>

      <fieldset>
        <legend className={labelCls}>{t.contact}</legend>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {contactOptions.map((c) => (
            <label key={c} className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-ink">
              <input type="radio" name="contact" value={c} checked={form.contact === c} onChange={set('contact')} className="h-4 w-4 accent-[#172554]" />
              {label(c)}
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
          {t.consent}
        </label>
        <FieldError id={id('consent-err')} msg={show('consent')} />
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-xl bg-[#FEF3F2] p-4 text-sm text-[#7A271A]">
          {t.error}
          <button type="button" onClick={toWhatsApp} className="mt-3 flex items-center gap-2 font-semibold text-leaf underline underline-offset-4">
            <WhatsAppIcon className="h-4 w-4" />
            {t.errorWa}
          </button>
        </div>
      )}

      <button
        type="submit"
        aria-disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#0E173A] aria-disabled:cursor-wait aria-disabled:opacity-80"
      >
        {status === 'sending' ? t.sending : consultEndpoint ? t.submit : t.submitWa}
      </button>
    </form>
  );
}
