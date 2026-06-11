import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, CheckCircle2, Leaf, Car, Sprout, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'InRoof & Ornate Products — Solar Carport, AgriPV, OJAS',
  description: 'India\'s first integrated solar roofing (InRoof), OJAS mounting structures, Solar Carports, AgriPV, Vyasa DGPV, and Solar Trackers from Ornate Solar.',
}

export default function InRoofPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[500px] h-[500px] bg-emerald-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Home size={12} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Ornate Products</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              Solar Beyond the Panel —<br />
              <span className="text-gradient">Integrated Solutions</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Ornate Solar&apos;s proprietary product portfolio — from India&apos;s first integrated solar roof to AgriPV systems 
              that let farmers grow crops and generate power from the same land.
            </p>
          </div>
        </div>
      </section>

      {/* InRoof Hero Product */}
      <section id="inroof" className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-950/60 via-midnight-700 to-midnight-700 border border-emerald-500/20 overflow-hidden p-8 lg:p-12 mb-10">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-2 gap-10 items-start relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">🏆 India&apos;s First — Patented</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-3">InRoof — Solar Integrated Roofing</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  The world&apos;s most advanced integrated solar roofing system. Your roof IS the solar installation. 
                  No conventional panels mounted above — the solar cells are built directly into a premium roofing 
                  material. Weatherproof. Structurally sound. Aesthetically superior.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Replaces conventional roofing — no additional mounting required',
                    'Fully weatherproof with superior sealing technology',
                    'Aesthetic appeal — no visible panel frames or cabling',
                    'Suitable for residential, commercial, and heritage buildings',
                    'Patented design — exclusive to Ornate Solar in India',
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300">{h}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact#quote" className="solar-btn-primary">
                  Request InRoof Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-white/4 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-white">InRoof vs. Conventional Solar</h3>
                {[
                  { feature: 'Aesthetics', inroof: '✅ Premium roofing look', conv: '❌ Visible panel frames' },
                  { feature: 'Waterproofing', inroof: '✅ Integrated seal', conv: '⚠️ Potential leak points' },
                  { feature: 'Structural Load', inroof: '✅ Part of roof', conv: '⚠️ Extra mounting weight' },
                  { feature: 'Heritage Buildings', inroof: '✅ Compliant', conv: '❌ Often not permitted' },
                  { feature: 'Installation', inroof: '✅ One-time install', conv: '⚠️ Two separate jobs' },
                ].map(({ feature, inroof, conv }) => (
                  <div key={feature} className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-slate-400 font-medium">{feature}</div>
                    <div className="text-emerald-400">{inroof}</div>
                    <div className="text-slate-500">{conv}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'ojas',
                icon: Zap,
                name: 'OJAS Solar Structure',
                desc: 'Premium hot-dip galvanised mounting structures engineered for Indian wind and load conditions. Compatible with all major panel brands.',
                color: 'text-solar-400',
              },
              {
                id: 'carport',
                icon: Car,
                name: 'Solar Carport',
                desc: 'Generate solar energy while providing shade for vehicles. EV-ready designs with integrated charging points for commercial and residential properties.',
                color: 'text-blue-400',
              },
              {
                id: 'tracker',
                icon: Home,
                name: 'Solar Tracker',
                desc: 'Single and dual-axis trackers that follow the sun throughout the day — increasing energy yield by up to 35% compared to fixed-tilt installations.',
                color: 'text-purple-400',
              },
              {
                id: 'agripv',
                icon: Sprout,
                name: 'AgriPV',
                desc: 'Dual-use solar solution enabling farmers to grow crops under elevated solar panels. Same land generates both food and electricity — up to 2× return per acre.',
                color: 'text-green-400',
              },
              {
                id: 'vyasa',
                icon: Leaf,
                name: 'Vyasa DGPV',
                desc: 'Decentralised Grid-connected Photovoltaic systems designed for rural and semi-urban installations under government subsidy programmes.',
                color: 'text-orange-400',
              },
            ].map(({ id, icon: Icon, name, desc, color }) => (
              <div key={id} id={id} className="card-dark rounded-2xl p-6 product-card-shine">
                <Icon size={24} className={`${color} mb-4`} />
                <h3 className="font-display text-base font-bold text-white mb-2">{name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{desc}</p>
                <Link href="/contact#quote" className={`text-xs font-semibold ${color} flex items-center gap-1.5 hover:gap-2.5 transition-all`}>
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
