import { links, site } from '../config/site';
import { WhatsAppIcon } from './icons';

/** Dark closing band with the brand promise: the last thing on Home, Services and About. */
export default function ClosingCta({
  title = 'Tell us how your business runs today.',
  text = 'We’ll listen first, then suggest a practical first step, whether that’s billing software, a website, hiring help or AI.',
}) {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8 space-y-5">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">{title}</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">{text}</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F7A45] px-6 py-3.5 font-semibold text-white hover:bg-[#18663A] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat with us on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={links.call}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/70 px-6 py-3 font-semibold text-white hover:bg-white hover:text-ink transition-colors"
            >
              Call {site.phones[0].display}
            </a>
          </div>
        </div>
        <p className="lg:col-span-4 lg:text-right">
          <span lang="ta" className="block font-semibold text-marigold text-xl">வேரிலிருந்து வெற்றிவரை</span>
          <span className="block text-slate-300">From Roots to Success</span>
        </p>
      </div>
    </section>
  );
}
