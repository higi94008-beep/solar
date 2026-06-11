import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, CheckCircle2, BarChart3, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panels — RenewSys, First Solar, Canadian Solar | Ornate Solar',
  description: 'Premium Tier-1 solar panels from RenewSys N-Type TOPCon Bifacial (640 Wp), First Solar Series 7 Thin-Film (532 Wp), Canadian Solar TOPBiHiKu6 (620 Wp). All in stock across 26 Indian warehouses.',
}

const panels = [
  {
    id: 'renewsys-640',
    brand: 'RenewSys',
    origin: '🇮🇳 Made in India',
    model: 'N-Type TOPCon Bifacial',
    spec: '635 to 640 Wp · 156 Half-Cut Cells',
    efficiency: '22.4%',
    warranty: '30 Years Linear',
    tech: 'N-Type TOPCon',
    badge: 'Most Popular',
    badgeStyle: 'background:#FFC107;color:#0A0E1A',
    highlights: [
      'N-Type cell — zero LID (Light-Induced Degradation)',
      'Bifacial design: up to 30% additional energy yield from rear side',
      '156 half-cut cells for superior shading tolerance',
      'IEC 61215 & IEC 61730 certified — globally bankable',
      'Best suited for utility-scale and large commercial projects',
      'Available across 26 Ornate warehouses — fast delivery',
    ],
    specs: [
      { l: 'Power Range', v: '635–640 Wp' },
      { l: 'Cell Count', v: '156 Cells' },
      { l: 'Efficiency', v: '22.4%' },
      { l: 'Technology', v: 'N-Type TOPCon' },
      { l: 'Warranty', v: '30 Year Linear' },
      { l: 'Application', v: 'Utility / C&I' },
    ],
  },
  {
    id: 'renewsys-600',
    brand: 'RenewSys',
    origin: '🇮🇳 Made in India',
    model: 'N-Type TOPCon Bifacial',
    spec: '585 to 600 Wp · 144 Half-Cut Cells',
    efficiency: '21.9%',
    warranty: '30 Years Linear',
    tech: 'N-Type TOPCon',
    badge: 'Commercial Grade',
    badgeStyle: 'background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3)',
    highlights: [
      'Optimised for commercial rooftop and ground-mount installations',
      '144 half-cut cell design reduces resistive losses significantly',
      'Bifacial — harness reflected light from ground and surrounding surfaces',
      'Wind load certified up to 2400 Pa; snow load up to 5400 Pa',
      'Salt mist and ammonia corrosion resistant — ideal for coastal/farm areas',
      'PM KUSUM Yojana approved panel',
    ],
    specs: [
      { l: 'Power Range', v: '585–600 Wp' },
      { l: 'Cell Count', v: '144 Cells' },
      { l: 'Efficiency', v: '21.9%' },
      { l: 'Technology', v: 'N-Type TOPCon' },
      { l: 'Warranty', v: '30 Year Linear' },
      { l: 'Application', v: 'Commercial / PM KUSUM' },
    ],
  },
  {
    id: 'first-solar',
    brand: 'First Solar',
    origin: '🇺🇸 USA Technology',
    model: 'Series 7 Thin-Film Module',
    spec: '530 to 532 Wp · CdTe Technology',
    efficiency: '19.1%',
    warranty: '30 Years Linear',
    tech: 'CdTe Thin-Film',
    badge: 'Best for Hot Climates',
    badgeStyle: 'background:rgba(249,115,22,0.15);color:#fb923c;border:1px solid rgba(249,115,22,0.3)',
    highlights: [
      'Best temperature coefficient in the industry: -0.26%/°C',
      'Outperforms crystalline silicon in high temperature and humid climates',
      'Zero LID, zero PID — consistent performance for 30+ years',
      'Excellent performance under diffuse and low-light conditions',
      'Carbon footprint 3× lower than conventional silicon panels',
      'Tier-1 bankable — project financed worldwide',
    ],
    specs: [
      { l: 'Power Range', v: '530–532 Wp' },
      { l: 'Technology', v: 'CdTe Thin-Film' },
      { l: 'Efficiency', v: '19.1%' },
      { l: 'Temp Coeff', v: '-0.26%/°C' },
      { l: 'Warranty', v: '30 Year Linear' },
      { l: 'Application', v: 'Utility / Large C&I' },
    ],
  },
  {
    id: 'canadian',
    brand: 'Canadian Solar',
    origin: '🇨🇦 Canadian Technology',
    model: 'TOPBiHiKu6 N-Type Bifacial TOPCon',
    spec: '615 to 620 Wp · N-Type TOPCon',
    efficiency: '22.0%',
    warranty: '25 Years Linear',
    tech: 'N-Type TOPCon',
    badge: 'Tier-1 — 40+ Quarters',
    badgeStyle: 'background:rgba(34,197,94,0.12);color:#4ade80;border:1px solid rgba(34,197,94,0.3)',
    highlights: [
      'Canadian Solar — Tier 1 for 40+ consecutive quarters of Bloomberg NEF',
      'Bifacial design with up to 25% additional rear-side energy yield',
      'Anti-reflective, self-cleaning coating for maximum light absorption',
      'Hail resistance certified up to 35mm diameter at 97 km/h',
      'Compatible with all major string inverters, microinverters, and optimizers',
      'Available for residential, commercial, and utility applications',
    ],
    specs: [
      { l: 'Power Range', v: '615–620 Wp' },
      { l: 'Technology', v: 'N-Type TOPCon' },
      { l: 'Efficiency', v: '22.0%' },
      { l: 'Bifacial Gain', v: 'Up to 25%' },
      { l: 'Warranty', v: '25 Year Linear' },
      { l: 'Application', v: 'All Segments' },
    ],
  },
]

export default function SolarPanelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]" style={{ backgroundImage: 'linear-gradient(rgba(255,193,7,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,193,7,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full top-[-150px] right-[-100px] opacity-[0.08] blur-[80px] pointer-events-none" style={{ background: '#FFC107' }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <Sun size={12} className="text-solar-400" />
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Solar Panels</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Tier-1 Solar Panels,<br />
              <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Delivered Across India
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
              Ornate Solar is an authorised distributor for the world's leading solar panel manufacturers.
              Every panel is Tier-1 bankable, in-stock at 26 Indian warehouses, and backed by our Ornate Express delivery guarantee.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Tier-1 Bankable', 'In-Stock Pan India', '30-Year Warranty', 'AEO T3 Certified Distributor'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-semibold text-solar-400 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full">
                  <CheckCircle2 size={11} /> {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-solar-500/25 text-base">
              Get Panel Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {panels.map((panel, i) => (
              <div
                key={panel.id}
                id={panel.id}
                className="bg-white/[0.02] border border-white/8 hover:border-solar-500/25 rounded-3xl p-7 lg:p-8 transition-all duration-300 scroll-mt-24"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{panel.brand}</span>
                      <span className="text-xs text-slate-600">·</span>
                      <span className="text-xs text-slate-500">{panel.origin}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white leading-tight mb-1">{panel.model}</h2>
                    <p className="text-solar-400 font-semibold text-sm">{panel.spec}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-4 py-2 rounded-full self-start flex-shrink-0"
                    style={{ ...Object.fromEntries(panel.badgeStyle.split(';').map(s => s.split(':').map(x => x.trim())).map(([k,v]) => [k.replace(/-([a-z])/g, (_,c) => c.toUpperCase()), v])) }}
                  >
                    {panel.badge}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Specs */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Technical Specifications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {panel.specs.map(({ l, v }) => (
                        <div key={l} className="bg-white/[0.04] border border-white/5 rounded-xl p-3">
                          <div className="text-[11px] text-slate-500 mb-1">{l}</div>
                          <div className="text-sm font-semibold text-solar-400">{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-3 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl text-sm transition-all">
                        Request Quote <ArrowRight size={14} />
                      </Link>
                      <Link href="/contact" className="flex items-center gap-2 px-4 py-3 border border-white/10 hover:border-solar-500/30 text-slate-400 hover:text-solar-400 font-semibold rounded-xl text-sm transition-all">
                        <BarChart3 size={14} /> Datasheet
                      </Link>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key Features</h3>
                    <ul className="space-y-2.5">
                      {panel.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="text-solar-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300 leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
          <Star size={28} className="text-solar-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not Sure Which Panel is Right?</h2>
          <p className="text-slate-400 mb-8">Our solar engineers will analyse your site conditions, budget, and long-term goals — then recommend the optimal panel for your project.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all text-base">
            Get Free Expert Advice <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
