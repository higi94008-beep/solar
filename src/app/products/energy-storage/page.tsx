import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Battery, CheckCircle2, Zap, Home, Building2, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UnityESS — Battery Energy Storage Systems',
  description: 'UnityESS — India\'s indigenous BESS lineup. Model A for residential, Model C for commercial, Unity Infinity for utility scale. Manufactured in Ghiloth, NCR.',
}

const models = [
  {
    id: 'model-a',
    name: 'UnityESS Model A',
    target: 'Residential',
    icon: Home,
    tagline: 'Home Energy Independence',
    desc: 'Designed for Indian homes and small businesses. Seamlessly pairs with rooftop solar to store daytime energy for evening and night use — reducing grid dependence and electricity bills.',
    highlights: [
      'Compact, wall-mountable design for residential spaces',
      'Compatible with all major solar inverters',
      'Intelligent BMS with cell-level monitoring',
      'Automatic switchover during grid outages',
      'Remote monitoring via mobile app',
      'Manufactured and serviced in India',
    ],
    specs: [
      { l: 'Scale', v: 'Residential' },
      { l: 'Design', v: 'Modular' },
      { l: 'Integration', v: 'Grid-Hybrid' },
      { l: 'Origin', v: 'Made in India' },
    ],
    color: 'border-solar-500/20 hover:border-solar-500/40',
    tag: 'text-solar-400',
    bg: 'from-solar-900/20 to-solar-800/5',
    badge: 'For Homes',
  },
  {
    id: 'model-c',
    name: 'UnityESS Model C',
    target: 'Commercial & Industrial',
    icon: Building2,
    tagline: 'Commercial Power Security',
    desc: 'Engineered for commercial and industrial applications. Provides peak shaving, demand response, and backup power — reducing demand charges and ensuring business continuity.',
    highlights: [
      'Scalable capacity — connect multiple units in parallel',
      'Peak shaving to reduce expensive demand charges',
      'Demand response for commercial tariff optimisation',
      'Industrial-grade thermal management system',
      'SCADA and BMS integration ready',
      'Remote diagnostics and OTA firmware updates',
    ],
    specs: [
      { l: 'Scale', v: 'C&I' },
      { l: 'Design', v: 'Scalable' },
      { l: 'Features', v: 'Peak Shaving' },
      { l: 'Origin', v: 'Made in India' },
    ],
    color: 'border-blue-500/20 hover:border-blue-500/40',
    tag: 'text-blue-400',
    bg: 'from-blue-900/20 to-blue-800/5',
    badge: 'For Business',
  },
  {
    id: 'infinity',
    name: 'Unity Infinity',
    target: 'Utility Scale',
    icon: Globe,
    tagline: 'Grid-Scale Storage',
    desc: 'India\'s most capable indigenous BESS platform. Designed for utility developers, grid operators, and large industrial campuses requiring MWh-scale energy storage.',
    highlights: [
      'MWh-scale capacity for utility and grid applications',
      'Pairs with Hopewind 2.5MW Liquid-Cooled PCS',
      'Advanced grid-forming and grid-following modes',
      'Frequency regulation and voltage support',
      'Containerised design for rapid deployment',
      'Full integration with SCADA and EMS systems',
    ],
    specs: [
      { l: 'Scale', v: 'Utility / MWh' },
      { l: 'Design', v: 'Containerised' },
      { l: 'Grid', v: 'Grid-Forming' },
      { l: 'Origin', v: 'Made in India' },
    ],
    color: 'border-purple-500/20 hover:border-purple-500/40',
    tag: 'text-purple-400',
    bg: 'from-purple-900/20 to-purple-800/5',
    badge: 'Utility Scale',
  },
]

export default function EnergyStoragePage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[500px] h-[500px] bg-purple-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Battery size={12} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wide uppercase">Energy Storage</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              UnityESS — India&apos;s<br />
              <span className="text-gradient">Indigenous BESS Platform</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Designed, engineered, and manufactured in India. The UnityESS lineup covers residential, commercial, and 
              utility-scale energy storage — purpose-built for India&apos;s grid conditions and climate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#quote" className="solar-btn-primary">
                Get BESS Quote <ArrowRight size={16} />
              </Link>
              <Link href="/about#rd" className="solar-btn-outline">
                Our R&D Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why BESS */}
      <section className="py-14 bg-midnight-800/30">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: 'Energy Independence', desc: 'Store solar energy during the day. Use it at night. End reliance on expensive grid power and diesel generators.' },
              { icon: Battery, title: 'Grid Stability', desc: 'Frequency regulation, voltage support, and peak shaving — BESS is essential for India\'s grid modernisation.' },
              { icon: Building2, title: 'Commercial Savings', desc: 'Slash demand charges by storing energy when it\'s cheap. Discharge during peak tariff hours for maximum savings.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark rounded-2xl p-6">
                <Icon size={24} className="text-solar-400 mb-4" />
                <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-wide space-y-8">
          {models.map((model) => {
            const Icon = model.icon
            return (
              <div key={model.id} id={model.id} className={`bg-gradient-to-r ${model.bg} border ${model.color} rounded-3xl p-8 transition-all`}>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                        <Icon size={20} className={model.tag} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{model.target}</div>
                        <h2 className="font-display text-2xl font-bold text-white">{model.name}</h2>
                      </div>
                      <span className={`ml-auto text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full ${model.tag}`}>
                        {model.badge}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{model.desc}</p>

                    <div className="grid grid-cols-4 gap-3 mb-5">
                      {model.specs.map(({ l, v }) => (
                        <div key={l} className="bg-white/4 rounded-xl p-3 text-center">
                          <div className="text-xs text-slate-500 mb-1">{l}</div>
                          <div className={`text-xs font-semibold ${model.tag}`}>{v}</div>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact#quote" className="solar-btn-primary text-sm">
                      Get Quote <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {model.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-solar-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
