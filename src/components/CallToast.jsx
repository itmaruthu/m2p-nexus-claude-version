import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Phone, X } from 'lucide-react';
import { site } from '../config/site';

/**
 * When a visitor taps any Call button, show them the number they are calling. On a phone the dialer opens
 * as usual; on a computer (where tel: links often do nothing) the number is right there to read or copy.
 * One listener for every call link on the site; the card sits above the phone contact bar and closes on
 * its own after a few seconds.
 */
export default function CallToast() {
  const [phone, setPhone] = useState(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target instanceof Element && e.target.closest('a[href^="tel:"]');
      if (!a) return;
      const tel = a.getAttribute('href').slice(4);
      const match = site.phones.find((p) => p.tel === tel) || { tel, display: tel, label: 'Call' };
      setPhone(match);
      setCopied(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setPhone(null), 12000);
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(phone.tel);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex justify-center px-4 md:bottom-6">
      {phone && (
        <div role="status" className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-2xl bg-ink p-4 text-white shadow-lift ring-1 ring-white/10">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Phone aria-hidden="true" className="h-5 w-5 text-marigold" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-slate-300">Calling M2P Nexus · {phone.label}</p>
            <a href={`tel:${phone.tel}`} className="whitespace-nowrap font-display text-base font-bold tracking-wide text-white sm:text-lg">
              {phone.display}
            </a>
          </div>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/10"
          >
            {copied ? <Check aria-hidden="true" className="h-4 w-4 text-[#3FA866]" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button type="button" onClick={() => setPhone(null)} aria-label="Close" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
