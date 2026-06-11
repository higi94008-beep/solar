import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, CheckCircle2, Leaf, Car, Sprout, Zap, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: "InRoof & Ornate Products — India's First Solar Roof, Carport, AgriPV | Ornate Solar",
  description: "India's first integrated solar roofing (InRoof, patented), OJAS mounting structures, Solar Carports, Solar Trackers, AgriPV, and Vyasa DGPV from Ornate Solar.",
}

export default function InRoofPage() {
  return (
    <>
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full top-[-100px] right-[-100px] opacity-[0.07] blur-[80px] pointer-events-none" style={{ background: '#10b981' }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Home size={12} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Ornate Products</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Solar Beyond the Panel —<br />
              <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                India's Own Innovations
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Ornate Solar's proprietary product portfolio — from India's first and only integrated solar roof to 
              dual-use AgriPV systems that let farmers grow crops and generate electricity from the same piece of land.
            </p>
          </div>
        </div>
      </section>

      {/* InRoof — Hero Product */}
      <section id="inroof" className="pb-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="rounded-3xl p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, rgba(5,46,22,0.6) 0%, rgba(17,24,39,0.8) 100%)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-5">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">🏆 India's First & Only — Patented Technology</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">InRoof — Integrated Solar Roofing</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  The world's most advanced integrated solar roofing system. Your roof IS the solar installation.
                  Unlike conventional systems where panels are mounted above the roof, InRoof solar cells are built
                  directly into the roofing material itself — fully weatherproof, structurally sound, and aesthetically seamless.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    'Replaces conventional roofing — your roof and solar in a single installation',
                    'No visible panel frames, rails, or external wiring',
                    'Fully weatherproof with superior sealing against Indian monsoons',
                    'Suitable for residential, commercial, and heritage buildings',
                    'Structural integrity tested — load-bearing, wind-resistant',
                    'Patented design — exclusively available through Ornate Solar',
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all text-sm">
                  Request InRoof Quote <ArrowRight size={14} />
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="p-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <h3 className="font-display text-base font-bold text-white">InRoof vs. Conventional Solar</h3>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-xs text-slate-500 font-semibold">Feature</div>
                    <div className="text-xs text-emerald-400 font-bold">InRoof</div>
                    <div className="text-xs text-slate-500 font-semibold">Conventional</div>
                  </div>
                  {[
                    { feature: 'Aesthetics', inroof: '✅ Seamless roof look', conv: '❌ Visible panel frames' },
                    { feature: 'Waterproofing', inroof: '✅ Fully integrated', conv: '⚠️ Potential leak points' },
                    { feature: 'Structural Load', inroof: '✅ Load-bearing roof', conv: '⚠️ Additional weight' },
                    { feature: 'Heritage Sites', inroof: '✅ Often compliant', conv: '❌ Usually not permitted' },
                    { feature: 'Installation', inroof: '✅ Single process', conv: '⚠️ Two separate jobs' },
                    { feature: 'Maintenance', inroof: '✅ Minimal — no joints', conv: '⚠️ Mounting checks needed' },
                  ].map(({ feature, inroof, conv }) => (
                    <div key={feature} className="grid grid-cols-3 gap-2 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="text-xs text-slate-400 font-medium">{feature}</div>
                      <div className="text-xs text-emerald-400">{inroof}</div>
                      <div className="text-xs text-slate-500">{conv}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white mb-6">More Ornate Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: 'ojas',
                icon: Sun,
                iconColor: 'text-solar-400',
                accentColor: '#FFC107',
                name: 'OJAS Solar Structure',
                desc: 'Premium hot-dip galvanised mounting structures engineered for Indian wind and seismic conditions. Compatible with all major panel brands. Available for rooftop and ground-mount installations.',
                tags: ['Ground Mount', 'Rooftop', 'All Panel Brands'],
              },
              {
                id: 'carport',
                icon: Car,
                iconColor: 'text-blue-400',
                accentColor: '#3b82f6',
                name: 'Solar Carport',
                desc: 'Generate solar energy while providing shade for parked vehicles. Designed with integrated EV charging point readiness. Perfect for corporate campuses, malls, and residential complexes.',
                tags: ['EV-Ready', 'Commercial', 'Residential'],
              },
              {
                id: 'tracker',
                icon: Zap,
                iconColor: 'text-yellow-400',
                accentColor: '#eab308',
                name: 'Solar Tracker',
                desc: 'Single and dual-axis solar trackers that follow the sun throughout the day — increasing annual energy yield by 25–35% compared to fixed-tilt installations. Proven for Indian conditions.',
                tags: ['25–35% More Energy', 'Single & Dual Axis', 'Utility Grade'],
              },
              {
                id: 'agripv',
                icon: Sprout,
                iconColor: 'text-green-400',
                accentColor: '#22c55e',
                name: 'AgriPV',
                desc: 'Agrivoltaic systems enabling farmers to grow crops and generate solar power from the same land. Elevated panel structures allow crop cultivation underneath. Up to 2× return per acre.',
                tags: ['Dual Land Use', 'PM KUSUM Compatible', 'Farmer Income'],
              },
              {
                id: 'vyasa',
                icon: Leaf,
                iconColor: 'text-emerald-400',
                accentColor: '#10b981',
                name: 'Vyasa DGPV',
                desc: 'Decentralised Grid-connected Photovoltaic systems for rural and semi-urban areas. Designed specifically for government solar subsidy programmes and energy access initiatives.',
                tags: ['Govt. Subsidy Ready', 'Rural Electrification', 'Grid-Connected'],
              },
            ].map(({ id, icon: Icon, iconColor, accentColor, name, desc, tags }) => (
              <div
                key={id}
                id={id}
                className="rounded-2xl p-6 flex flex-col scroll-mt-24 transition-all duration-300 group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${accentColor}40`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}>
                  <Icon size={18} className={iconColor} />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ background: `${accentColor}12`, color: accentColor, border: `1px solid ${accentColor}25` }}>{t}</span>
                  ))}
                </div>
                <Link href="/contact" className={`text-xs font-bold ${iconColor} flex items-center gap-1.5 hover:gap-3 transition-all`}>
                  Get Quote <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
