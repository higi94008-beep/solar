import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Inverters — Hopewind, SolarEdge, Enphase, Fronius | Ornate Solar',
  description: "India's widest inverter portfolio — Hopewind 385kW (India's highest string inverter) to 2.5MW BESS PCS, SolarEdge, Enphase microinverters, and Fronius.",
}

const inverters = [
  {
    id: 'hopewind-385',
    brand: 'Hopewind',
    origin: '🇨🇳 China Technology',
    model: '385kW String Inverter',
    subtitle: "India's Highest-Capacity String Inverter",
    type: 'Utility / Large Commercial',
    badgeText: "India's #1 Capacity",
    badgeStyle: 'background:#FFC107;color:#0A0E1A',
    highlights: [
      "India's highest-capacity single string inverter at 385kW",
      '10 MPPTs for maximum energy harvest across variable shading conditions',
      'IP66 weatherproof rating — designed for harsh outdoor environments',
      'Remote monitoring and diagnostics via Hopewind cloud platform',
      'Ideal for PM KUSUM Yojana solar power plant projects',
      'Fast commissioning — reduces BOS costs significantly',
    ],
    specs: [
      { l: 'Capacity', v: '385kW' },
      { l: 'MPPTs', v: '10' },
      { l: 'Efficiency', v: '99%' },
      { l: 'Protection', v: 'IP66' },
      { l: 'Grid', v: 'Three Phase' },
      { l: 'Application', v: 'Utility / PM KUSUM' },
    ],
  },
  {
    id: 'hopewind-pcs',
    brand: 'Hopewind',
    origin: '🇨🇳 China Technology',
    model: 'PCS 2.5MW Liquid-Cooled',
    subtitle: 'Power Conversion System for Utility BESS',
    type: 'Utility Scale Battery Storage',
    badgeText: 'BESS Power Conversion',
    badgeStyle: 'background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3)',
    highlights: [
      'Liquid-cooled design for maximum thermal efficiency at utility scale',
      'Bi-directional power conversion — both charge and discharge modes',
      'Designed for grid-scale Battery Energy Storage Systems (BESS)',
      '2.5MW continuous AC power output',
      'Integrated grid management, protection, and fault ride-through',
      'Pairs with UnityESS for complete in-house BESS solution',
    ],
    specs: [
      { l: 'Capacity', v: '2.5MW' },
      { l: 'Cooling', v: 'Liquid' },
      { l: 'Type', v: 'Bi-directional' },
      { l: 'Application', v: 'BESS / Grid' },
      { l: 'Grid Services', v: 'Yes' },
      { l: 'Origin', v: 'China' },
    ],
  },
  {
    id: 'solaredge-res',
    brand: 'SolarEdge',
    origin: '🇮🇱 Israel Technology',
    model: 'Residential HD-Wave Series',
    subtitle: 'Single Phase 3–4kW · Three Phase 5–10kW',
    type: 'Residential Solar',
    badgeText: 'With Power Optimizer',
    badgeStyle: 'background:rgba(249,115,22,0.15);color:#fb923c;border:1px solid rgba(249,115,22,0.3)',
    highlights: [
      'Single Phase 3kW & 4kW — ideal for Indian homes and apartments',
      'Three Phase 5kW to 10kW — for larger residential and villa setups',
      'Module-level Maximum Power Point Tracking with S1200 Power Optimizer',
      'SafeDC technology — panels automatically de-energise when inverter is off',
      'Advanced real-time monitoring via SolarEdge cloud portal',
      'Works with Enphase IQ Battery 5P for home storage',
    ],
    specs: [
      { l: 'Single Phase', v: '3kW & 4kW' },
      { l: 'Three Phase', v: '5–10kW' },
      { l: 'Efficiency', v: '99.2%' },
      { l: 'Monitoring', v: 'Cloud-Based' },
      { l: 'Optimizer', v: 'S1200 MLPE' },
      { l: 'Application', v: 'Residential' },
    ],
  },
  {
    id: 'solaredge-com',
    brand: 'SolarEdge',
    origin: '🇮🇱 Israel Technology',
    model: 'Commercial Three Phase & SynergyTech',
    subtitle: '15kW to 66kW · SynergyTech 100kW',
    type: 'Commercial Solar',
    badgeText: 'Commercial Grade',
    badgeStyle: 'background:rgba(168,85,247,0.15);color:#c084fc;border:1px solid rgba(168,85,247,0.3)',
    highlights: [
      'Commercial Three Phase: 15kW to 33.3kW for commercial rooftops',
      'SynergyTech 120kW — high-density commercial and industrial inverter',
      'Module-level optimization for shade-prone commercial rooftops',
      'Advanced reactive power control for grid compliance',
      'Designed for Indian commercial grid conditions and feed-in requirements',
      'Revenue-grade monitoring for energy accounting and billing',
    ],
    specs: [
      { l: 'Commercial', v: '15–66kW' },
      { l: 'SynergyTech', v: '100–120kW' },
      { l: 'Phase', v: 'Three Phase' },
      { l: 'Monitoring', v: 'Revenue Grade' },
      { l: 'Grid Control', v: 'Reactive Power' },
      { l: 'Application', v: 'C&I' },
    ],
  },
  {
    id: 'enphase',
    brand: 'Enphase',
    origin: '🇺🇸 USA Technology',
    model: 'IQ8 Microinverter Series',
    subtitle: 'IQ8HC · IQ8P · IQ Battery 5P',
    type: 'Residential / Small Commercial',
    badgeText: 'Per-Panel Intelligence',
    badgeStyle: 'background:rgba(34,197,94,0.12);color:#4ade80;border:1px solid rgba(34,197,94,0.3)',
    highlights: [
      'IQ8HC & IQ8P — one microinverter per solar panel for maximum yield',
      'No single point of failure — each panel operates independently',
      'Maximum harvest even under partial shading from trees, chimneys, or soiling',
      'IQ Battery 5P — modular home storage with 5kWh per module',
      'Envoy monitoring: granular panel-level production data in real time',
      'Proven in India\'s climate — thousands of installations nationwide',
    ],
    specs: [
      { l: 'Type', v: 'Microinverter' },
      { l: 'Models', v: 'IQ8HC & IQ8P' },
      { l: 'Design', v: 'Per Panel' },
      { l: 'Storage', v: 'IQ Battery 5P' },
      { l: 'Monitoring', v: 'Envoy Platform' },
      { l: 'Application', v: 'Residential / SMC' },
    ],
  },
  {
    id: 'fronius',
    brand: 'Fronius',
    origin: '🇦🇹 Austria Technology',
    model: 'Symo / Tauro / Primo / Gen24 Series',
    subtitle: '3kW Residential to 100kW Industrial',
    type: 'Residential to Industrial',
    badgeText: 'Austrian Engineering',
    badgeStyle: 'background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.3)',
    highlights: [
      'Primo: 3kW to 8.2kW single-phase — premium residential inverter',
      'Symo: 3kW to 20kW three-phase — commercial quality for rooftop C&I',
      'Eco: 25kW & 27kW — energy-dense industrial-grade efficiency',
      'Tauro: 50kW to 100kW — flagship commercial and industrial inverter',
      'Gen24 Plus Hybrid: 6kW to 10kW with built-in battery storage readiness',
      'Fronius Solar.web cloud platform for real-time remote monitoring',
    ],
    specs: [
      { l: 'Primo', v: '3–8.2kW' },
      { l: 'Symo', v: '3–20kW' },
      { l: 'Tauro', v: '50–100kW' },
      { l: 'Gen24 Hybrid', v: '6–10kW' },
      { l: 'Origin', v: 'Austria' },
      { l: 'Application', v: 'All Segments' },
    ],
  },
]

export default function InvertersPage() {
  return (
    <>
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full top-[-150px] right-[-100px] opacity-[0.07] blur-[80px] pointer-events-none" style={{ background: '#3b82f6' }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Zap size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Solar Inverters</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Precision Power Conversion —<br />
              <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                From 3kW to 2.5MW
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              India's widest inverter portfolio — Enphase microinverters for homes, SolarEdge for commercial rooftops, 
              Hopewind 385kW (India's highest-capacity string inverter), and 2.5MW BESS power conversion systems.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all text-base">
              Get Inverter Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {inverters.map((inv) => (
              <div
                key={inv.id}
                id={inv.id}
                className="border rounded-3xl p-7 lg:p-8 transition-all duration-300 scroll-mt-24"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{inv.brand}</span>
                      <span className="text-xs text-slate-600">·</span>
                      <span className="text-xs text-slate-500">{inv.origin}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white mb-1">{inv.model}</h2>
                    <p className="text-blue-400 font-semibold text-sm">{inv.subtitle}</p>
                    <p className="text-slate-500 text-xs mt-1">{inv.type}</p>
                  </div>
                  <span className="text-xs font-bold px-4 py-2 rounded-full self-start flex-shrink-0" style={Object.fromEntries(inv.badgeStyle.split(';').filter(Boolean).map(s => { const [k,...v] = s.split(':'); return [k.trim().replace(/-([a-z])/g,(_,c)=>c.toUpperCase()), v.join(':').trim()] }))}>
                    {inv.badgeText}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {inv.specs.map(({ l, v }) => (
                        <div key={l} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div className="text-[11px] text-slate-500 mb-1">{l}</div>
                          <div className="text-sm font-semibold text-solar-400">{v}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl text-sm transition-all">
                      Request Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key Features</h3>
                    <ul className="space-y-2.5">
                      {inv.highlights.map((h) => (
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
    </>
  )
}
