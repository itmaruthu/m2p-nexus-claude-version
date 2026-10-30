import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { maxParts, partGroups, partPresets, parts, projects, readParts } from '../config/projects';
import { waLink } from '../config/site';
import { WhatsAppIcon } from './icons';
import ProjectBlueprint from './ProjectBlueprint';

/**
 * "Build from proven parts": every part is something we have already built for a real business (each one
 * names where it runs). The visitor picks parts and their own system draws itself around "Your business".
 * The picks live in the URL (?parts=a,b), so a blueprint can be shared with a partner, and "Send my
 * blueprint" opens the booking page with those parts filled in. Read after hydration, so the pre-rendered
 * HTML (empty blueprint) and the first client render match.
 */

const sectorOf = (id) => projects.find((p) => p.id === id).sector.toLowerCase();

export default function BlueprintBuilder() {
  const [picked, setPicked] = useState([]); // part ids, in the order picked
  const [group, setGroup] = useState(partGroups[0].id);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      const fromUrl = readParts(new URLSearchParams(window.location.search).get('parts'));
      if (fromUrl.length) {
        setPicked(fromUrl.map((p) => p.id));
        setGroup(fromUrl[0].group);
      }
      setReady(true);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // Keep the URL in step so the blueprint can be shared (no navigation, no scroll).
  useEffect(() => {
    if (!ready) return;
    const { pathname, hash } = window.location;
    const query = picked.length ? `?parts=${picked.join(',')}` : '';
    window.history.replaceState(window.history.state, '', `${pathname}${query}${hash}`);
  }, [picked, ready]);

  const chosen = picked.map((id) => parts.find((p) => p.id === id));
  const full = picked.length >= maxParts;

  const toggle = (id) =>
    setPicked((list) => (list.includes(id) ? list.filter((x) => x !== id) : list.length >= maxParts ? list : [...list, id]));

  const preset = (ids) => {
    setPicked(ids);
    setGroup(parts.find((p) => p.id === ids[0]).group);
  };

  const names = chosen.map((p) => p.name);
  const message = `Hello M2P Nexus, I built this on your website and would like to talk about it: ${names.join(', ')}.`;

  return (
    <section id="build" aria-labelledby="build-title" className="relative scroll-mt-24 overflow-hidden border-b border-rule bg-ink text-white grain">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Intro + parts */}
        <div className="space-y-8 lg:col-span-6">
          <div className="space-y-4">
            <p className="font-heading text-sm font-semibold text-marigold">Build from proven parts</p>
            <h2 id="build-title" className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.015em] sm:text-4xl">
              Pick the parts you need. Watch your system draw itself.
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Every part below is already running at a real business. Pick up to {maxParts}, then send us your blueprint. We reply
              within one working day with questions and a sensible first step.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-slate-300">
            <span className="mr-2">Or start from</span>
            {partPresets.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => preset(p.parts)}
                className="min-h-11 rounded-lg px-3 font-semibold text-white underline decoration-marigold decoration-2 underline-offset-4 hover:bg-white/10"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* The blueprint sits here on phones, so it is seen before and after picking */}
          <div className="lg:hidden">
            <Blueprint names={names} />
          </div>

          <div className="space-y-4">
            <div role="group" aria-label="Kind of part" className="flex flex-wrap gap-2">
              {partGroups.map((g) => {
                const on = g.id === group;
                const count = chosen.filter((p) => p.group === g.id).length;
                return (
                  <button
                    key={g.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setGroup(g.id)}
                    className={`min-h-11 rounded-full px-4 font-heading text-sm font-semibold transition-colors duration-200 ${
                      on ? 'bg-white text-ink' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {g.label}
                    {count > 0 && <span className={on ? 'text-leaf' : 'text-marigold'}> · {count}</span>}
                  </button>
                );
              })}
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {parts
                .filter((p) => p.group === group)
                .map((p) => {
                  const on = picked.includes(p.id);
                  const blocked = !on && full;
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        aria-pressed={on}
                        aria-disabled={blocked || undefined}
                        onClick={() => !blocked && toggle(p.id)}
                        className={`flex min-h-14 w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left transition-colors duration-200 ${
                          on ? 'bg-marigold text-ink' : blocked ? 'cursor-not-allowed bg-white/5 text-slate-400' : 'bg-white/10 text-white hover:bg-white/15'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${on ? 'border-ink bg-ink' : 'border-white/40'}`}
                        >
                          {on && (
                            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-marigold" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 10.5l4 4 8-9" />
                            </svg>
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold leading-snug">{p.name}</span>
                          <span className={`block text-xs ${on ? 'text-ink/80' : 'text-slate-300'}`}>Built for {p.from.map(sectorOf).join(', ')}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
            </ul>
            {full && (
              <p className="text-sm text-slate-300">
                That’s {maxParts} parts, plenty for a first conversation. Send it, or remove one to swap it for another.
              </p>
            )}
          </div>
        </div>

        {/* Blueprint + tray */}
        <div className="lg:col-span-6">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="hidden lg:block">
              <Blueprint names={names} />
            </div>

            <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-heading font-semibold">Your blueprint</h3>
                <p aria-live="polite" className="text-sm text-slate-300">
                  {picked.length} of {maxParts} parts
                </p>
              </div>

              {chosen.length ? (
                <ul aria-label="Parts in your blueprint" className="flex flex-wrap gap-2">
                  {chosen.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => toggle(p.id)}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white/10 pl-3.5 pr-2.5 text-sm font-semibold hover:bg-white/20"
                      >
                        {p.name}
                        <X aria-hidden="true" className="h-4 w-4 text-slate-300" />
                        <span className="sr-only">: remove</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p id="build-empty" className="text-slate-300">Nothing picked yet. Choose a part, or start from a shop, a trading business or a growing team.</p>
              )}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                {chosen.length ? (
                  <Link
                    to={`/book/?parts=${picked.join(',')}`}
                    className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-marigold px-5 font-semibold text-ink transition-colors hover:bg-[#FFC233]"
                  >
                    Send my blueprint
                  </Link>
                ) : (
                  <button
                    type="button"
                    aria-disabled="true"
                    aria-describedby="build-empty"
                    className="flex min-h-12 flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-white/10 px-5 font-semibold text-slate-300"
                  >
                    Send my blueprint
                  </button>
                )}
                <a
                  href={chosen.length ? waLink(message) : waLink('Hello M2P Nexus, I would like to talk about a system for my business.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Talk it through on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              {chosen.length > 0 && (
                <button type="button" onClick={() => setPicked([])} className="min-h-11 text-sm font-semibold text-slate-300 underline underline-offset-4 hover:text-white">
                  Start again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blueprint({ names }) {
  return (
    <ProjectBlueprint
      core="Your business"
      modules={names}
      mode="now"
      draw
      emptyText="Your system appears here as you pick parts."
    />
  );
}
