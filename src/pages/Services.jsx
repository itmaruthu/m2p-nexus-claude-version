import Seo from '../components/Seo';
import ServiceSwitchboard from '../components/ServiceSwitchboard';
import ClosingCta from '../components/ClosingCta';
import { h2Class, sectionPad, textLink } from '../components/styles';

// Services and their groupings come from the M2P Nexus brand guide. Each one opens with the situation a
// business owner recognises, then lists what is included.
const groups = [
  {
    id: 'run',
    title: 'Run your business',
    intro: 'Replace paper, notebooks and scattered spreadsheets with systems your team can use every day.',
    services: [
      {
        name: 'Software development',
        when: 'For when bills, stock and customer records live in notebooks and spreadsheets.',
        includes: ['Billing software', 'Inventory systems', 'CRM', 'ERP', 'Custom web apps', 'SaaS platforms', 'Enterprise applications', 'Internal business tools'],
      },
      {
        name: 'Website development',
        when: 'For when customers search for you and find nothing, or an out-of-date page.',
        includes: ['Business and corporate websites', 'Startup landing pages', 'Portfolio websites', 'Designs that work on every phone', 'Website maintenance'],
      },
      {
        name: 'Mobile app development',
        when: 'For when your customers or your field team need you in their pocket.',
        includes: ['Android apps', 'iOS apps', 'Cross-platform apps', 'Business apps'],
      },
    ],
  },
  {
    id: 'smarter',
    title: 'Work smarter',
    intro: 'Take repetitive work off your team and make better decisions with the data you already have.',
    services: [
      {
        name: 'AI solutions',
        when: 'For when your team spends hours on the same reports, replies and data entry.',
        includes: ['AI agents', 'Workflow automation', 'Chatbots', 'Document intelligence (reading invoices and forms automatically)', 'AI added to the tools you already use', 'Business AI consulting'],
      },
      {
        name: 'Digital transformation',
        when: 'For when the business has grown but the way it runs has not.',
        includes: ['Business process automation', 'Cloud migration', 'Technology modernisation', 'Digital strategy'],
      },
      {
        name: 'IT consulting',
        when: 'For when you want honest advice before you spend money on technology.',
        includes: ['Technology consulting', 'Software architecture', 'Product strategy', 'Technology guidance for startups'],
      },
    ],
  },
  {
    id: 'grow',
    title: 'Grow',
    intro: 'Bring in more customers and build the team to serve them. Both run the same way as our software work: a clear plan, regular reports and one point of contact.',
    services: [
      {
        name: 'Digital marketing',
        when: 'For when you need more enquiries, not just more posts.',
        includes: ['Social media marketing', 'SEO', 'Content marketing', 'Branding', 'Lead generation', 'Performance marketing'],
        signs: [
          'Customers say they could not find you on Google',
          'You post on social media, but enquiries don’t follow',
          'Most new business still comes only by word of mouth',
        ],
        steps: [
          { title: 'Audit', text: 'Where customers look for you today, and what competitors do.' },
          { title: 'Plan', text: 'Channels, messages and a monthly budget you agree to.' },
          { title: 'Set up', text: 'Google profile, website basics, social pages and tracking.' },
          { title: 'Run', text: 'Posts, campaigns and replies, in Tamil and English.' },
          { title: 'Report', text: 'Every month: how many enquiries, where they came from, what next.' },
        ],
      },
      {
        name: 'HR & talent acquisition',
        when: 'For when hiring the right people takes too long, or goes wrong.',
        includes: ['Recruitment', 'Talent acquisition', 'HR consulting', 'Hiring strategy', 'Employer branding', 'Workforce planning'],
        signs: [
          'Good people leave within months of joining',
          'Hiring depends on referrals and takes weeks',
          'Roles, salaries and HR policies aren’t written down',
        ],
        steps: [
          { title: 'Brief', text: 'The role, skills, salary range and the kind of person who fits.' },
          { title: 'Source', text: 'Job posts, our network and referrals, reached in one go.' },
          { title: 'Screen', text: 'Calls and checks, so you only meet people worth meeting.' },
          { title: 'Interview', text: 'Questions, scheduling and honest feedback on every candidate.' },
          { title: 'Onboard', text: 'Offer, joining and a first-month plan, so they stay.' },
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services: Software, Websites, AI, HR & Digital Marketing"
        description="M2P Nexus services: software and billing systems, websites, mobile apps, AI automation, digital transformation, IT consulting, digital marketing and HR, from one partner in Madurai."
      />

      <ServiceSwitchboard />

      {/* Jump links to the full details below */}
      <nav aria-label="Service groups" className="bg-[#F4F6FA] border-b border-rule">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-x-8 gap-y-3">
          <li className="font-heading font-semibold text-body">Full details:</li>
          {groups.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`} className={textLink}>
                {g.title}
              </a>
            </li>
          ))}
          <li className="sm:ml-auto">
            <a href={`${import.meta.env.BASE_URL}#start-small`} className={textLink}>
              New to us? See the starter packs
            </a>
          </li>
        </ul>
      </nav>

      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-title`}
          className={`scroll-mt-24 border-b border-rule ${gi % 2 ? 'bg-[#F4F6FA]' : 'bg-white'}`}
        >
          <div className={`${sectionPad} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28 self-start">
              <h2 id={`${g.id}-title`} className={h2Class}>
                {g.title}
              </h2>
              <p className="text-lg text-body leading-relaxed">{g.intro}</p>
            </div>
            <div className="lg:col-span-8 divide-y divide-rule border-t-2 border-ink">
              {g.services.map((s) => (
                <article key={s.name} className="py-8 first:pt-6 grid gap-5 md:grid-cols-2 md:gap-10">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-ink text-2xl leading-tight">{s.name}</h3>
                    <p className="text-body leading-relaxed">{s.when}</p>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-ink">What&rsquo;s included</p>
                    <ul className="mt-3 space-y-2">
                      {s.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-body leading-relaxed">
                          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-marigold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.steps && (
                    <div className="md:col-span-2 space-y-7 rounded-2xl bg-white p-5 ring-1 ring-rule sm:p-7">
                      <div>
                        <p className="font-heading font-semibold text-ink">Signs you need this</p>
                        <ul className="mt-3 grid gap-2.5 sm:grid-cols-3 sm:gap-5">
                          {s.signs.map((sign) => (
                            <li key={sign} className="flex gap-3 font-[family-name:var(--font-hand)] text-lg leading-snug text-[#2B3A8C]">
                              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-marigold" />
                              {sign}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-dashed border-rule pt-6">
                        <p className="font-heading font-semibold text-ink">How it works</p>
                        {/* A real sequence, so it is numbered; a line joins the steps on wide screens. */}
                        <ol className="relative mt-4 grid gap-4 sm:grid-cols-5 sm:gap-3">
                          <span aria-hidden="true" className="absolute left-4 right-[18%] top-4 hidden h-0.5 bg-[linear-gradient(90deg,#1F6B3A,#F2A900)] sm:block" />
                          {s.steps.map((step, i) => (
                            <li key={step.title} className="relative flex gap-3 sm:block">
                              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-marigold ring-4 ring-white">
                                {i + 1}
                              </span>
                              <div className="sm:mt-3">
                                <p className="font-heading font-semibold text-ink">{step.title}</p>
                                <p className="mt-0.5 text-sm leading-relaxed text-body">{step.text}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ClosingCta
        title="Not sure where to start?"
        text="Tell us what slows your business down today. We’ll suggest a sensible first step and what it would take."
        questions={[
          'Which service should my business start with?',
          'Can you connect my billing, stock and WhatsApp orders?',
          'Can you help me hire a good billing executive?',
        ]}
      />
    </>
  );
}
