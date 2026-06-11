import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, CheckCircle2, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panels — RenewSys, First Solar, Canadian Solar',
  description: 'Premium solar panels in India — RenewSys N-Type TOPCon Bifacial, First Solar Thin-Film Series 7, Canadian Solar TOPBiHiKu6. All Tier-1, all in stock.',
}

const panelRanges = [
  {
    id: 'renewsys-640',
    brand: 'RenewSys',
    model: 'N-Type TOPCon Bifacial',
    spec: '635 to 640 Wp | 156 Cell',
    efficiency: 'Up to 22.4%',
    warranty: '30 Year Linear',
    tech: 'N-Type TOPCon',
    highlights: [
      'Higher energy yield with bifacial gain of up to 30%',
      'N-Type cell technology — zero LID (Light-Induced Degradation)',
      '156 half-cut cells for superior shade tolerance',
      'IEC 61215, IEC 61730 certified',
      'Ideal for large utility and commercial installations',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-solar-500 text-midnight',
  },
  {
    id: 'renewsys-600',
    brand: 'RenewSys',
    model: 'N-Type TOPCon Bifacial',
    spec: '585 to 600 Wp | 144 Cell',
    efficiency: 'Up to 21.9%',
    warranty: '30 Year Linear',
    tech: 'N-Type TOPCon',
    highlights: [
      'Optimal for commercial rooftop and ground-mount projects',
      '144 half-cut cell design reduces resistive losses',
      'Bifacial — harness reflected light from the rear side',
      'Wind load up to 2400 Pa, snow load up to 5400 Pa',
      'Salt mist and ammonia corrosion resistant',
    ],
    badge: 'Commercial Grade',
    badgeColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  },
  {
    id: 'first-solar',
    brand: 'First Solar',
    model: 'Series 7 Thin-Film Module',
    spec: '532 Wp | CdTe Technology',
    efficiency: 'Up to 19.1%',
    warranty: '30 Year Linear',
    tech: 'CdTe Thin-Film',
    highlights: [
      'Best temperature coefficient in the industry (-0.26%/°C)',
      'Outperforms c-Si in high temperature and humid climates',
      'No LID, no PID — consistent performance for 30 years',
      'Thin film — excellent performance in diffuse light conditions',
      'Carbon footprint 3× lower than conventional silicon panels',
    ],
    badge: 'Best for Hot Climates',
    badgeColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  },
  {
    id: 'canadian',
    brand: 'Canadian Solar',
    model: 'TOPBiHiKu6 N-Type Bifacial TOPCon',
    spec: '615 to 620 Wp | N-Type',
    efficiency: 'Up to 22.0%',
    warranty: '25 Year Linear',
    tech: 'N-Type TOPCon',
    highlights: [
      'Top-tier bankability — Tier 1 for 40+ consecutive quarters',
      'Bifacial design with up to 25% additional energy yield',
      'Anti-reflective coating for enhanced light absorption',
      'Hail resistance up to 35mm at 97 km/h',
      'Compatible with all major string inverters and microinverters',
    ],
    badge: 'Tier-1 Bankable',
    badgeColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
  },
]

export default function SolarPanelsPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[400px] h-[400px] bg-solar-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <Sun size={12} className="text-solar-400" />
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Solar Panels</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              World-Class Solar Panels,<br />
              <span className="text-gradient">Available Across India</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Ornate Solar is an authorised distributor for the world&apos;s leading solar panel manufacturers. 
              Every panel is Tier-1 bankable, in-stock at 26 Indian warehouses, and backed by our 
              industry-leading Ornate Guarantee.
            </p>
            <Link href="/contact#quote" className="solar-btn-primary">
              Get Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Panel grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            {panelRanges.map((panel) => (
              <div key={panel.id} id={panel.id} className="card-dark rounded-3xl p-7 product-card-shine flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{panel.brand}</div>
                    <h2 className="font-display text-xl font-bold text-white leading-tight">{panel.model}</h2>
                    <div className="text-solar-400 font-semibold text-sm mt-1">{panel.spec}</div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ml-3 ${panel.badgeColor}`}>
                    {panel.badge}
                  </span>
                </div>

                {/* Quick specs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Efficiency', value: panel.efficiency },
                    { label: 'Technology', value: panel.tech },
                    { label: 'Warranty', value: panel.warranty },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/4 rounded-xl p-3 text-center">
                      <div className="text-xs text-slate-500 mb-1">{label}</div>
                      <div className="text-xs font-semibold text-solar-400">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 flex-1">
                  {panel.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-solar-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href="/contact#quote" className="solar-btn-primary flex-1 justify-center text-sm py-2.5">
                    Request Quote
                  </Link>
                  <Link href="/contact" className="solar-btn-outline text-sm py-2.5 px-4">
                    <BarChart3 size={14} /> Datasheet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-midnight-800/30">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <Zap size={32} className="text-solar-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Sure Which Panel to Choose?</h2>
          <p className="text-slate-400 mb-8">Our certified solar engineers will analyse your site conditions and recommend the optimal panel for maximum ROI.</p>
          <Link href="/contact#quote" className="solar-btn-primary">
            Get Expert Recommendation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
