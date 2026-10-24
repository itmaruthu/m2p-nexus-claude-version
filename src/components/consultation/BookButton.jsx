import { useConsultation } from './consultationContext';

/**
 * "Book a consultation" trigger. It is a real link to the form on the Contact page, so it works before
 * JavaScript loads and when opened in a new tab; a plain click opens the dialog instead.
 */
export default function BookButton({ className, children = 'Book a consultation', onOpen }) {
  const { open } = useConsultation();
  return (
    <a
      href={`${import.meta.env.BASE_URL}contact/#book`}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        onOpen?.();
        open();
      }}
      aria-haspopup="dialog"
      className={className}
    >
      {children}
    </a>
  );
}
