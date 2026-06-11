import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Inverters — Hopewind, SolarEdge, Enphase, Fronius',
  description: 'India\'s widest range of solar inverters. From Enphase microinverters to Hopewind\'s 385kW — India\'s highest-capacity string inverter.',
}

const inverters = [
  {
    id: 'hopewind-385',
    brand: 'Hopewind',
    model: '385kW String Inverter',
    type: 'Utility / Large Commercial',
    badge: 'Highest Capacity in India',
    badgeColor: 'bg-solar-500 text-midnight',
    highlights: [
      'India\'s highest-capacity single string inverter — 385kW',
      '10 MPPTs for maximum energy harvest across variable shading',
      'IP66 weatherproof rating for outdoor installations',
      'Remote monitoring via Hopewind cloud platform',
      'Ideal for PM KUSUM Yojana projects and utility-scale plants',
    ],
    specs: [{ l: 'Capacity', v: '385kW' }, { l: 'MPPTs', v: '10' }, { l: 'Efficiency', v: '99%' }],
  },
  {
    id: 'hopewind-pcs',
    brand: 'Hopewind',
    model: 'PCS 2.5MW Liquid-Cooled',
    type: 'Utility Scale BESS',
    badge: 'For Battery Storage',
    badgeColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    highlights: [
      'Liquid-cooled design for maximum efficiency at utility scale',
      'Bi-directional power conversion — charge and discharge',
      'Designed for grid-scale Battery Energy Storage Systems (BESS)',
      '2.5MW continuous power output',
      'Integrated grid management and protection features',
    ],
    specs: [{ l: 'Capacity', v: '2.5MW' }, { l: 'Cooling', v: 'Liquid' }, { l: 'Type', v: 'BESS PCS' }],
  },
  {
    id: 'solaredge-res',
    brand: 'SolarEdge',
    model: 'Residential HD-Wave Series',
    type: 'Residential (Single & Three Phase)',
    badge: 'With Power Optimizer',
    badgeColor: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    highlights: [
      'Single Phase: 3kW & 4kW — perfect for Indian homes',
      'Three Phase: 5kW to 10kW — for larger residential loads',
      'Module-level Maximum Power Point Tracking with optimizers',
      'SafeDC technology — automatic panel-level shutdown',
      'Advanced monitoring via SolarEdge portal',
    ],
    specs: [{ l: 'Range', v: '3–10kW' }, { l: 'Efficiency', v: '99.2%' }, { l: 'Monitoring', v: 'Cloud' }],
  },
  {
    id: 'solaredge-com',
    brand: 'SolarEdge',
    model: 'Commercial Three Phase',
    type: 'Commercial (15–66kW)',
    badge: 'Commercial Grade',
    badgeColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    highlights: [
      'Three Phase: 15kW to 66kW for commercial rooftops',
      'SynergyTech 100kW — high efficiency for large commercial',
      'S1200 Power Optimizer for module-level optimisation',
      'Advanced grid services and reactive power control',
      'Designed for challenging Indian grid conditions',
    ],
    specs: [{ l: 'Range', v: '15–66kW' }, { l: 'Phases', v: '3-Phase' }, { l: 'Grade', v: 'Commercial' }],
  },
  {
    id: 'enphase',
    brand: 'Enphase',
    model: 'IQ8 Microinverter Series',
    type: 'Residential / Commercial',
    badge: 'Per-Panel Monitoring',
    badgeColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
    highlights: [
      'IQ8HC & IQ8P — module-level inverter for each solar panel',
      'Maximum energy harvest even with partial shading',
      'No single point of failure — panels operate independently',
      'IQ Battery 5P — modular home storage system',
      'Envoy monitoring for granular panel-level data',
    ],
    specs: [{ l: 'Type', v: 'Micro' }, { l: 'Design', v: 'Per Panel' }, { l: 'Storage', v: 'IQ Battery' }],
  },
  {
    id: 'fronius',
    brand: 'Fronius',
    model: 'Symo / Tauro / Primo Series',
    type: 'Residential to Industrial',
    badge: 'Austrian Engineering',
    badgeColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
    highlights: [
      'Primo: 3–8.2kW single-phase residential inverters',
      'Symo: 3–20kW three-phase for commercial applications',
      'Eco: 25–27kW industrial-grade efficiency',
      'Tauro: 50–100kW — flagship commercial/industrial inverter',
      'Gen24 Plus Hybrid: 6–10kW with battery storage capability',
    ],
    specs: [{ l: 'Range', v: '3–100kW' }, { l: 'Origin', v: 'Austria' }, { l: 'Hybrid', v: 'Available' }],
  },
]

export default function InvertersPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[400px] h-[400px] bg-blue-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Zap size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Solar Inverters</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              Precision Power Conversion —<br />
              <span className="text-gradient">From 3kW to 2.5MW</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Ornate Solar carries the widest inverter portfolio in India — from Enphase microinverters for homes 
              to Hopewind&apos;s 385kW string inverter (India&apos;s highest capacity) and 2.5MW BESS PCS systems.
            </p>
            <Link href="/contact#quote" className="solar-btn-primary">
              Get Inverter Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-8">
          {inverters.map((inv) => (
            <div key={inv.id} id={inv.id} className="card-dark rounded-3xl p-7 product-card-shine flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{inv.brand}</div>
                  <h2 className="font-display text-xl font-bold text-white leading-tight">{inv.model}</h2>
                  <div className="text-blue-400 text-sm font-medium mt-0.5">{inv.type}</div>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ml-3 ${inv.badgeColor}`}>
                  {inv.badge}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {inv.specs.map(({ l, v }) => (
                  <div key={l} className="bg-white/4 rounded-xl p-3 text-center">
                    <div className="text-xs text-slate-500 mb-1">{l}</div>
                    <div className="text-xs font-semibold text-solar-400">{v}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 flex-1">
                {inv.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-solar-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact#quote" className="solar-btn-primary justify-center text-sm py-2.5">
                Request Quote <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
