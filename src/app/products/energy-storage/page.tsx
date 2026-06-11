import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Battery, CheckCircle2, Zap, Home, Building2, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UnityESS — Battery Energy Storage Systems | Ornate Solar',
  description: "UnityESS — India's indigenous BESS lineup. Model A for residential, Model C for C&I, Unity Infinity for utility scale. Engineered and manufactured in Ghiloth, NCR.",
}

const models = [
  {
    id: 'model-a',
    name: 'UnityESS Model A',
    tagline: 'Residential Energy Independence',
    target: 'Homes & Small Businesses',
    IconEl: Home,
    iconColor: 'text-solar-400',
    accentColor: '#FFC107',
    desc: 'Designed for Indian homes and small businesses. Pairs with rooftop solar to store daytime surplus energy for evening use — slashing electricity bills and providing backup during power cuts.',
    highlights: [
      'Compact wall-mountable design for home and small commercial spaces',
      'Works with all major grid-tied solar inverter brands',
      'Intelligent BMS (Battery Management System) with cell-level protection',
      'Automatic grid-battery switchover during power outages',
      'Mobile app monitoring — battery level, charge/discharge, savings',
      'Manufactured and supported locally in India',
    ],
    specs: [
      { l: 'Scale', v: 'Residential' },
      { l: 'Chemistry', v: 'LFP (Safe)' },
      { l: 'Design', v: 'Wall-Mount' },
      { l: 'BMS', v: 'Cell-Level' },
      { l: 'Warranty', v: '10 Years' },
      { l: 'Origin', v: '🇮🇳 India' },
    ],
  },
  {
    id: 'model-c',
    name: 'UnityESS Model C',
    tagline: 'Commercial Power Security & Peak Shaving',
    target: 'Commercial & Industrial',
    IconEl: Building2,
    iconColor: 'text-blue-400',
    accentColor: '#3b82f6',
    desc: 'Built for commercial and industrial energy users. Provides peak shaving to cut demand charges, demand response capabilities, and reliable backup power to ensure business continuity.',
    highlights: [
      'Parallel-scalable capacity — stack multiple units for any load requirement',
      'Peak demand shaving: store cheap off-peak energy, discharge at peak tariff',
      'Demand response programme ready — monetise your battery with utilities',
      'Industrial-grade thermal management for high-cycle commercial use',
      'SCADA and Building Management System (BMS) integration ready',
      'Remote diagnostics and OTA firmware updates via cloud',
    ],
    specs: [
      { l: 'Scale', v: 'C&I' },
      { l: 'Chemistry', v: 'LFP' },
      { l: 'Scalability', v: 'Modular' },
      { l: 'Features', v: 'Peak Shaving' },
      { l: 'Integration', v: 'SCADA / BMS' },
      { l: 'Origin', v: '🇮🇳 India' },
    ],
  },
  {
    id: 'infinity',
    name: 'Unity Infinity',
    tagline: 'Grid-Scale Battery Energy Storage',
    target: 'Utility Developers & Grid Operators',
    IconEl: Globe,
    iconColor: 'text-purple-400',
    accentColor: '#a855f7',
    desc: "India's most capable indigenous utility-scale BESS platform. Designed for power developers, DISCOMs, and industrial campuses requiring MWh-scale storage for grid services, renewable integration, and peak capacity management.",
    highlights: [
      'MWh-scale capacity for utility, grid, and large industrial applications',
      'Pairs with Hopewind 2.5MW Liquid-Cooled PCS for complete in-house solution',
      'Grid-forming and grid-following operating modes',
      'Frequency regulation, voltage support, and spinning reserve services',
      'Containerised design for rapid site deployment',
      'Full integration with SCADA, EMS, and power grid control systems',
    ],
    specs: [
      { l: 'Scale', v: 'Utility / MWh' },
      { l: 'Chemistry', v: 'LFP' },
      { l: 'Deployment', v: 'Containerised' },
      { l: 'Grid Mode', v: 'Forming & Following' },
      { l: 'PCS Partner', v: 'Hopewind 2.5MW' },
      { l: 'Origin', v: '🇮🇳 India' },
    ],
  },
]

export default function EnergyStoragePage() {
  return (
    <>
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full top-[-100px] right-[-100px] opacity-[0.07] blur-[80px] pointer-events-none" style={{ background: '#a855f7' }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Battery size={12} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold tracking-wide uppercase">Energy Storage — UnityESS</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              UnityESS — India's Own<br />
              <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                BESS Platform
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Designed, engineered, and manufactured in India at our Ghiloth, NCR facility.
              The UnityESS lineup covers residential to utility-scale storage — purpose-built for India's grid, climate, and tariff conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all text-base">
                Get BESS Quote <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-solar-500/30 text-slate-300 hover:text-solar-400 font-semibold rounded-xl transition-all text-sm">
                About Our R&D
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why BESS callout */}
      <section className="py-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap, color: 'text-solar-400', bg: 'bg-solar-500/10', title: 'Energy Independence', desc: 'Store solar during the day. Use it at night. No grid dependency, no diesel generator backup needed.' },
              { icon: Battery, color: 'text-blue-400', bg: 'bg-blue-500/10', title: 'Slash Electricity Bills', desc: 'For C&I users: peak shaving alone can cut 20–40% off monthly electricity bills through demand charge reduction.' },
              { icon: Globe, color: 'text-purple-400', bg: 'bg-purple-500/10', title: 'Grid Stability', desc: 'BESS provides frequency regulation and voltage support — essential services India\'s grid needs to absorb renewable energy.' },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1.5">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
          {models.map((model) => {
            const Icon = model.IconEl
            return (
              <div
                key={model.id}
                id={model.id}
                className="rounded-3xl p-7 lg:p-8 scroll-mt-24 transition-all"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${model.accentColor}18`, border: `1px solid ${model.accentColor}30` }}>
                    <Icon size={20} className={model.iconColor} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">{model.target}</div>
                    <h2 className="font-display text-2xl font-bold text-white">{model.name}</h2>
                    <p className={`text-sm font-semibold mt-0.5 ${model.iconColor}`}>{model.tagline}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full self-start flex-shrink-0" style={{ background: `${model.accentColor}18`, color: model.accentColor, border: `1px solid ${model.accentColor}30` }}>
                    🇮🇳 Made in India
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">{model.desc}</p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {model.specs.map(({ l, v }) => (
                        <div key={l} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="text-[11px] text-slate-500 mb-1">{l}</div>
                          <div className={`text-sm font-semibold ${model.iconColor}`}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl text-sm transition-all">
                      Request Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="space-y-2.5">
                    {model.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-solar-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300 leading-relaxed">{h}</span>
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
