import Link from 'next/link'
import { ArrowRight, FlaskConical, Layers, Cpu, Globe2 } from 'lucide-react'

const pillars = [
  {
    icon: FlaskConical,
    title: 'DSIR-Certified R&D Lab',
    desc: 'Our in-house R&D team is accredited by the Department of Science & Industrial Research, Ministry of Science and Technology, Government of India.',
    href: '/about#rd',
    tag: 'Research',
  },
  {
    icon: Layers,
    title: 'InRoof — India\'s First',
    desc: 'The world\'s most advanced integrated solar roofing system. Your roof becomes the solar panel — aesthetically superior, structurally sound, weatherproof.',
    href: '/products/inroof',
    tag: 'Innovation',
  },
  {
    icon: Cpu,
    title: 'IIT Delhi Partnership',
    desc: 'Collaborating with IIT-Delhi\'s industrial interface (FiTT) for cutting-edge solar energy project design and next-generation technology research.',
    href: '/about#rd',
    tag: 'Academic',
  },
  {
    icon: Globe2,
    title: 'Global Technology Access',
    desc: 'Exclusive distribution partnerships with First Solar, Hopewind, SolarEdge, Enphase, RenewSys — bringing world-class technology to India.',
    href: '/products/solar-panels',
    tag: 'Partnerships',
  },
]

export default function InnovationSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="hero-orb w-[500px] h-[500px] bg-solar-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Innovation at Core</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Innovating Energy for a{' '}
              <span className="text-gradient">Brighter Future</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Established in 1998, Ornate Solar has grown from a solar distributor to India&apos;s most innovative clean energy company. 
              Our in-house R&D and manufacturing capabilities enable us to solve problems the rest of the industry hasn&apos;t even identified yet.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'India\'s first solar-integrated roof (patented)',
                'DSIR-recognised in-house R&D lab',
                'State-of-the-art BESS manufacturing in Ghiloth, NCR',
                'IIT-Delhi collaboration for advanced solar research',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-solar-500/20 border border-solar-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-solar-500 rounded-full" />
                  </div>
                  <span className="text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>

            <Link href="/about#rd" className="solar-btn-primary">
              Explore R&D Center <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right - pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="card-dark rounded-2xl p-5 group block"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 bg-solar-500/10 border border-solar-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-solar-500/20 transition-colors">
                      <Icon size={18} className="text-solar-400" />
                    </div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide mt-1.5">{pillar.tag}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-solar-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
