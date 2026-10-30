import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { pains, projectGroups, projects } from '../config/projects';
import ProjectBlueprint from './ProjectBlueprint';

/**
 * Portfolio explorer, problem first. The visitor starts from what slows their business down (or browses
 * everything); a numbered case index lists the projects that started there; the chosen project opens as a
 * case file whose blueprint shows the business before and with M2P Nexus. Picking a project plays
 * before → after once; the switch above the blueprint lets the visitor flip between the two at will.
 * On large screens the case file sits in a sticky panel beside the index; on phones it opens under the
 * chosen row. The first project renders complete on the server.
 */

const number = (p) => String(projects.indexOf(p) + 1).padStart(2, '0');
const groupLabel = (id) => projectGroups.find((g) => g.id === id).label;

function ModeSwitch({ mode, onMode }) {
  const opts = [
    { id: 'then', label: 'Before' },
    { id: 'now', label: 'With M2P Nexus' },
  ];
  return (
    <div role="group" aria-label="Show the business" className="inline-flex rounded-xl bg-white p-1 ring-1 ring-rule">
      {opts.map((o) => {
        const on = o.id === mode;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onMode(o.id)}
            className={`min-h-11 rounded-lg px-4 font-heading text-sm font-semibold transition-colors duration-200 ${
              on ? (o.id === 'now' ? 'bg-ink text-white' : 'bg-slate-600 text-white') : 'text-body hover:text-ink'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function CaseFile({ project, mode, onMode, draw, live, where }) {
  const hid = `case-${project.id}-${where}`;
  return (
    <article className="space-y-6" aria-labelledby={hid}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-heading text-sm font-semibold text-body">
          Case <span className="text-ink tabular-nums">{number(project)}</span> of {projects.length}
        </p>
        <ModeSwitch mode={mode} onMode={onMode} />
      </div>

      <ProjectBlueprint core={project.core} coreThen={project.was} modules={project.modules} mode={mode} draw={draw} live={live} />

      <div className="space-y-4">
        <p className="font-heading text-sm font-semibold text-leaf">
          {project.sector} <span className="text-body">· {groupLabel(project.group)}</span>
        </p>
        <h2 id={hid} className="font-display text-2xl font-bold leading-tight text-ink">
          {project.title}
        </h2>
        <p className="leading-relaxed text-body">
          <span className="font-semibold text-ink">The problem: </span>
          {project.problem}
        </p>
        <p className="leading-relaxed text-body">
          <span className="font-semibold text-ink">What we built: </span>
          {project.built}
        </p>
        <p className="sr-only">Parts of the system: {project.modules.join(', ')}.</p>
      </div>

      {/* The ledger: how it ran before, and what changed */}
      <div className="grid overflow-hidden rounded-2xl bg-white ring-1 ring-rule sm:grid-cols-2">
        <div className="space-y-3 p-5">
          <h3 className="font-heading text-sm font-semibold text-body">Before</h3>
          <ul className="space-y-2.5">
            {project.before.map((b) => (
              <li key={b} className="flex gap-2.5 leading-snug text-body">
                <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 border-t border-rule bg-[#F4F8F5] p-5 sm:border-l sm:border-t-0">
          <h3 className="font-heading text-sm font-semibold text-leaf">What changed</h3>
          <ul className="space-y-2.5">
            {project.outcomes.map((o) => (
              <li key={o} className="flex gap-2.5 leading-snug text-ink">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={2.5} />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.stack && (
        <p className="text-sm text-body">
          <span className="font-semibold text-ink">Built with: </span>
          {project.stack.join(', ')}
        </p>
      )}
    </article>
  );
}

export default function ProjectExplorer() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [pain, setPain] = useState(null);
  const [activeId, setActiveId] = useState(projects[0].id);
  const [mode, setMode] = useState('now');
  const [picked, setPicked] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const painObj = pains.find((p) => p.id === pain);
  const visible = painObj ? projects.filter((p) => painObj.ids.includes(p.id)) : projects;
  const active = projects.find((p) => p.id === activeId);
  const draw = picked && !reduce;

  // Picking a project tells its story once: before, then the connected system.
  const open = (id) => {
    clearTimeout(timer.current);
    setPicked(true);
    setActiveId(id);
    if (reduce) {
      setMode('now');
      return;
    }
    setMode('then');
    timer.current = setTimeout(() => setMode('now'), 1100);
  };

  const pickPain = (id) => {
    const next = id === pain ? null : id;
    setPain(next);
    const list = next ? projects.filter((p) => pains.find((x) => x.id === next).ids.includes(p.id)) : projects;
    if (!list.some((p) => p.id === activeId) || next) open(list[0].id);
  };

  const flip = (m) => {
    clearTimeout(timer.current);
    setMode(m);
  };

  const chip = (on) =>
    `min-h-11 shrink-0 rounded-full px-4 font-heading text-sm font-semibold transition-colors duration-200 ${
      on ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
    }`;

  return (
    <div ref={ref} className="space-y-10">
      {/* Start from the problem */}
      <div className="space-y-4">
        <h2 id="finder-title" className="font-heading text-lg font-semibold text-ink">
          Start from what slows you down
        </h2>
        <div
          role="group"
          aria-labelledby="finder-title"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          <button type="button" aria-pressed={!pain} onClick={() => pickPain(null)} className={chip(!pain)}>
            Show all {projects.length}
          </button>
          {pains.map((p) => (
            <button key={p.id} type="button" aria-pressed={p.id === pain} onClick={() => pickPain(p.id)} className={chip(p.id === pain)}>
              {p.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-sm text-body">
          {painObj
            ? `${visible.length} ${visible.length === 1 ? 'project' : 'projects'} started with “${painObj.label.toLowerCase()}”.`
            : 'Software, AI, growth and hiring: every project we can describe without naming the client.'}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Case index */}
        <ol aria-label="Projects" className="divide-y divide-rule self-start overflow-hidden rounded-2xl bg-white ring-1 ring-rule lg:col-span-5">
          {visible.map((p) => {
            const selected = p.id === activeId;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  aria-expanded={selected}
                  onClick={() => open(p.id)}
                  className={`group flex w-full items-start gap-4 px-5 py-4 text-left transition-colors duration-200 ${
                    selected ? 'bg-ink text-white' : 'hover:bg-[#F4F6FA]'
                  }`}
                >
                  <span className={`font-display text-sm font-bold tabular-nums leading-7 ${selected ? 'text-marigold' : 'text-body'}`}>{number(p)}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block font-display text-base font-bold leading-snug sm:text-lg ${selected ? 'text-white' : 'text-ink'}`}>{p.title}</span>
                    <span className={`mt-0.5 block text-sm ${selected ? 'text-slate-300' : 'text-body'}`}>
                      {p.sector} · {groupLabel(p.group)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition-transform duration-200 ${selected ? 'scale-150 bg-marigold' : 'bg-rule group-hover:bg-ink'}`}
                  />
                </button>
                {selected && (
                  <div className="border-t border-rule bg-[#F4F6FA] p-4 sm:p-5 lg:hidden">
                    <CaseFile project={p} mode={mode} onMode={flip} draw={draw} live={inView} where="m" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-28">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <CaseFile project={active} mode={mode} onMode={flip} draw={draw} live={inView} where="d" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
