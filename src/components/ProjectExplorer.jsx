import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { projectGroups, projects, SHOW_CLIENT_NAMES } from '../config/projects';
import ProjectBlueprint from './ProjectBlueprint';

/**
 * Portfolio explorer: filter by kind of work, pick a project, and its blueprint draws itself. On large
 * screens the detail sits in a sticky panel beside the list; on phones it opens under the chosen project.
 * The first project renders complete on the server.
 */

function Detail({ project, draw, live }) {
  const showClient = SHOW_CLIENT_NAMES || project.public;
  return (
    <div className="space-y-6">
      <ProjectBlueprint project={project} draw={draw} live={live} />
      <div className="space-y-4">
        <p className="font-heading text-sm font-semibold text-leaf">
          {project.sector}
          {showClient && project.client ? `, ${project.client}` : ''}
        </p>
        <h2 className="font-display text-2xl font-bold leading-tight text-ink">{project.title}</h2>
        <p className="text-body leading-relaxed">
          <span className="font-semibold text-ink">The problem: </span>
          {project.problem}
        </p>
        <p className="text-body leading-relaxed">
          <span className="font-semibold text-ink">What we built: </span>
          {project.built}
        </p>
        <p className="sr-only">Parts of the system: {project.modules.join(', ')}.</p>
      </div>
      <div>
        <h3 className="font-heading font-semibold text-ink">What changed</h3>
        <ul className="mt-3 space-y-2">
          {project.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-body leading-relaxed">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              {o}
            </li>
          ))}
        </ul>
      </div>
      {project.stack && (
        <p className="text-sm text-body">
          <span className="font-semibold text-ink">Built with: </span>
          {project.stack.join(', ')}
        </p>
      )}
    </div>
  );
}

export default function ProjectExplorer() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [group, setGroup] = useState('all');
  const [activeId, setActiveId] = useState(projects[0].id);
  const [picked, setPicked] = useState(false);

  const visible = projects.filter((p) => group === 'all' || p.group === group);
  const active = projects.find((p) => p.id === activeId);
  const draw = picked && !reduce;
  const live = inView;

  const pickGroup = (id) => {
    setGroup(id);
    const inGroup = projects.filter((p) => id === 'all' || p.group === id);
    if (!inGroup.some((p) => p.id === activeId)) {
      setPicked(true);
      setActiveId(inGroup[0].id);
    }
  };

  const pick = (id) => {
    setPicked(true);
    setActiveId(id);
  };

  return (
    <div ref={ref} className="space-y-8">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectGroups.map((g) => {
          const count = g.id === 'all' ? projects.length : projects.filter((p) => p.group === g.id).length;
          const on = g.id === group;
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => pickGroup(g.id)}
              className={`rounded-full px-4 py-2 font-heading font-semibold transition-colors ${
                on ? 'bg-ink text-white' : 'bg-white text-body ring-1 ring-rule hover:text-ink hover:ring-ink'
              }`}
            >
              {g.label} <span className={on ? 'text-marigold' : 'text-body'}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <ul className="space-y-3 lg:col-span-5">
          {visible.map((p) => {
            const selected = p.id === activeId;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  aria-expanded={selected}
                  onClick={() => pick(p.id)}
                  className={`group relative w-full overflow-hidden rounded-2xl p-5 text-left transition-all ${
                    selected ? 'bg-ink text-white shadow-xl' : 'bg-white ring-1 ring-rule hover:-translate-y-0.5 hover:shadow-lg'
                  }`}
                >
                  <span className={`block font-heading text-sm font-semibold ${selected ? 'text-marigold' : 'text-leaf'}`}>{p.sector}</span>
                  <span className={`mt-1 block font-display text-lg font-bold leading-snug ${selected ? 'text-white' : 'text-ink'}`}>{p.title}</span>
                  <span className={`mt-2 block text-sm leading-relaxed ${selected ? 'text-slate-300' : 'text-body'}`}>{p.problem}</span>
                </button>
                {selected && (
                  <div className="mt-4 lg:hidden">
                    <Detail project={p} draw={draw} live={live} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

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
                <Detail project={active} draw={draw} live={live} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
