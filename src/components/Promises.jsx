import { Clock3, GraduationCap, Handshake, KeyRound, LifeBuoy } from 'lucide-react';
import { promises } from '../config/promises';

/**
 * "Our promise to you": the founders' commitments as a signed pledge card on paper, with a slowly turning
 * M2P Nexus seal (static for reduced motion via the global rule). `lang` is 'en' or 'ta'.
 */

const icons = { free: Handshake, own: KeyRound, train: GraduationCap, support: LifeBuoy, reply: Clock3 };

function Seal() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="h-20 w-20 sm:h-24 sm:w-24">
      <defs>
        <path id="seal-ring" d="M60 60 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#F2A900" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="#172554" strokeWidth="1.5" strokeDasharray="2 3" />
      <g className="seal-spin" style={{ transformOrigin: '60px 60px' }}>
        <text fill="#172554" fontSize="10.5" fontWeight="700" letterSpacing="2.2" fontFamily="Archivo Variable, sans-serif">
          <textPath href="#seal-ring">M2P NEXUS • FROM ROOTS TO SUCCESS •</textPath>
        </text>
      </g>
      <circle cx="60" cy="60" r="27" fill="#172554" />
      <path d="M48 61l8 8 16-17" fill="none" stroke="#F2A900" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Promises({ lang = 'en', headingId = 'promise-title' }) {
  const p = promises[lang];
  const ta = lang === 'ta';
  return (
    <section aria-labelledby={headingId} className="border-b border-rule bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4 space-y-4">
          <h2
            id={headingId}
            className={`text-ink text-3xl sm:text-4xl leading-[1.12] ${ta ? 'font-sans font-bold' : 'font-display font-extrabold tracking-[-0.015em]'}`}
          >
            {p.title}
          </h2>
          <p className="text-lg text-body leading-relaxed">{p.intro}</p>
        </div>

        <div className="lg:col-span-8">
          <div className="relative rounded-3xl bg-[#FBF6EA] p-6 ring-1 ring-[#E3D9C2] shadow-[0_40px_80px_-44px_rgba(23,37,84,0.55)] sm:p-10">
            <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {p.items.map((it) => {
                const Icon = icons[it.icon];
                return (
                  <li key={it.icon} className="flex gap-4">
                    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-marigold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className={`text-ink leading-snug ${ta ? 'font-sans font-bold text-lg' : 'font-heading font-semibold text-lg'}`}>{it.title}</h3>
                      <p className="mt-1 leading-relaxed text-body">{it.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Signed and sealed */}
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-dashed border-[#D9CCAE] pt-6">
              <div className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-hand)] text-3xl text-[#2B3A8C] -rotate-2">{p.sign}</span>
                <span className="text-sm text-body">{p.role}</span>
              </div>
              <div className="shrink-0 rotate-6">
                <Seal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
