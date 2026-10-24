import { useCallback, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { ConsultationContext } from './consultationContext';
import ConsultationForm from './ConsultationForm';

/**
 * Hosts the "Book a consultation" dialog for the whole site. Uses the native <dialog> element: showModal()
 * gives a real modal (focus moves inside, the page behind is inert, Esc closes) and focus returns to the
 * button that opened it. The form remounts on every open so it always starts fresh.
 */
export default function ConsultationProvider({ children }) {
  const ref = useRef(null);
  const [round, setRound] = useState(0);

  const open = useCallback(() => {
    const dialog = ref.current;
    // Browsers without <dialog> support (e.g. iOS 15.3 and older) go to the form on the Contact page.
    if (!dialog || typeof dialog.showModal !== 'function') {
      window.location.assign(`${import.meta.env.BASE_URL}contact/#book`);
      return;
    }
    setRound((r) => r + 1);
    dialog.showModal();
  }, []);
  const close = useCallback(() => ref.current?.close(), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="consult-title"
        onClick={(e) => e.target === ref.current && close()}
        className="consult-dialog m-auto w-[calc(100%-1.5rem)] max-w-2xl overflow-visible rounded-3xl bg-transparent p-0 text-left"
      >
        <div className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl bg-[#F8FAFD] shadow-2xl ring-1 ring-rule">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-rule bg-[#F8FAFD]/95 px-5 py-5 backdrop-blur sm:px-8">
            <div>
              <h2 id="consult-title" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                Book a consultation
              </h2>
              <p className="mt-1 text-body">A few details so our first call is useful. It takes about a minute.</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              title="Close"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink ring-1 ring-rule transition-colors hover:bg-ink hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="px-5 py-6 sm:px-8">
            <ConsultationForm key={round} onDone={close} />
          </div>
        </div>
      </dialog>
    </ConsultationContext.Provider>
  );
}
