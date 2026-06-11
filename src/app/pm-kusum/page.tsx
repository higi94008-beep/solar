import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, CheckCircle2, Sun, Users, Zap, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PM KUSUM Yojana — Solar for Farmers',
  description: 'Ornate Solar is an official implementation partner for India\'s PM KUSUM scheme. Solar pumps, solarisation of feeders, and small solar power plants for farmers.',
}

const components = [
  {
    name: 'Component A',
    subtitle: 'Decentralised Ground/Stilt Mounted Solar Plants',
    capacity: '500kW to 2MW per unit',
    desc: 'Small solar power plants of 500kW to 2MW capacity on barren/fallow land. Farmers can lease their land and earn fixed income by selling solar power to DISCOMs.',
    benefits: ['Fixed annual income from solar power sale', 'Barren land can generate revenue', 'Government subsidy available', 'No upfront cost for farmer'],
    icon: Building2,
  },
  {
    name: 'Component B',
    subtitle: 'Standalone Solar Powered Agriculture Pumps',
    capacity: '7.5HP solar pumps',
    desc: 'Replacement of diesel-powered irrigation pumps with solar pumps. 60% subsidy from Centre + State, with farmers contributing only 10% of the project cost.',
    benefits: ['Zero diesel cost for irrigation', '60% central + state subsidy', 'Farmer pays only 10%', 'Clean energy for agriculture'],
    icon: Sun,
  },
  {
    name: 'Component C',
    subtitle: 'Solarisation of Grid-Connected Pumps',
    capacity: 'Up to 7.5HP per pump',
    desc: 'Add solar panels to existing grid-connected pumps. Farmers can use solar power for irrigation and sell surplus electricity to the grid — double income.',
    benefits: ['Use solar during day, save grid charges', 'Sell surplus power to DISCOM', 'Farmer can earn additional income', 'Reduces electricity bills to zero'],
    icon: Zap,
  },
]

export default function PMKusumPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[500px] h-[500px] bg-green-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <Leaf size={12} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Government of India</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              PM KUSUM Yojana —<br />
              <span className="text-gradient">Solar Power for Every Farmer</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM KUSUM) is India&apos;s flagship solar scheme 
              for agriculture. Ornate Solar is an authorised implementation partner — helping farmers across India access 
              solar energy with minimal upfront investment.
            </p>
            <Link href="/contact#quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all text-base">
              Apply for PM KUSUM <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-midnight-800/30">
        <div className="container-wide">
          <div className="grid sm:grid-cols-4 gap-5">
            {[
              { value: '30.8 GW', label: 'Total Target Capacity' },
              { value: '20 Lakh+', label: 'Farmers to Benefit' },
              { value: '₹34,422 Cr', label: 'Central Financial Support' },
              { value: '29,000+', label: 'Pumps in Rajasthan alone' },
            ].map(({ value, label }) => (
              <div key={label} className="card-dark rounded-2xl p-5 text-center">
                <div className="font-display text-2xl font-bold text-green-400 mb-1">{value}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Three Components, One Mission</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">PM KUSUM covers every aspect of solar power in agriculture — from micro power plants to individual solar pumps.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {components.map((comp) => {
              const Icon = comp.icon
              return (
                <div key={comp.name} className="card-dark rounded-3xl p-7 flex flex-col">
                  <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-green-400" />
                  </div>
                  <div className="text-xs text-green-400 font-bold uppercase tracking-wide mb-1">{comp.name}</div>
                  <h3 className="font-display text-base font-bold text-white mb-1">{comp.subtitle}</h3>
                  <div className="text-xs text-solar-400 font-semibold mb-3">{comp.capacity}</div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{comp.desc}</p>
                  <div className="space-y-2">
                    {comp.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* How to apply */}
          <div className="bg-gradient-to-r from-green-950/60 to-midnight-700 border border-green-500/20 rounded-3xl p-8 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-white mb-2">How to Apply with Ornate Solar</h2>
            <p className="text-slate-400 text-sm mb-8 max-w-xl">As an authorised implementation partner, we handle the entire process from application to commissioning.</p>
            <div className="grid sm:grid-cols-4 gap-6 mb-8">
              {[
                { step: '01', label: 'Contact Us', desc: 'Share your location and land/pump details' },
                { step: '02', label: 'Site Survey', desc: 'Our team conducts a free site assessment' },
                { step: '03', label: 'Application', desc: 'We file the KUSUM application on your behalf' },
                { step: '04', label: 'Installation', desc: 'End-to-end installation and commissioning' },
              ].map(({ step, label, desc }) => (
                <div key={step} className="text-center">
                  <div className="text-3xl font-display font-bold text-green-500/40 mb-2">{step}</div>
                  <div className="text-sm font-semibold text-white mb-1">{label}</div>
                  <div className="text-xs text-slate-400">{desc}</div>
                </div>
              ))}
            </div>
            <Link href="/contact#quote" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all">
              Start Your KUSUM Application <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
