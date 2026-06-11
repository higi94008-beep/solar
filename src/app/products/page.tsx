import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sun, Zap, Battery, Home, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products — Solar Panels, Inverters, BESS, InRoof',
  description: 'Ornate Solar's complete product portfolio — RenewSys & First Solar panels, Hopewind & SolarEdge inverters, UnityESS battery storage, InRoof integrated solar roofing.',
}

const categories = [
  {
    icon: Sun,
    title: 'Solar Panels',
    href: '/products/solar-panels',
    color: 'text-solar-400',
    border: 'border-solar-500/20 hover:border-solar-500/50',
    bg: 'from-solar-900/20 to-transparent',
    brands: ['RenewSys N-Type TOPCon Bifacial – 640 Wp', 'RenewSys N-Type TOPCon Bifacial – 600 Wp', 'First Solar Thin-Film – 532 Wp', 'Canadian Solar TOPBiHiKu6 – 620 Wp'],
    tag: 'Tier-1 Bankable Manufacturers',
  },
  {
    icon: Zap,
    title: 'Inverters',
    href: '/products/inverters',
    color: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    bg: 'from-blue-900/20 to-transparent',
    brands: ['Hopewind 385kW – India\'s Highest String Inverter', 'Hopewind PCS 2.5MW – Liquid Cooled BESS', 'SolarEdge Residential 3kW–10kW', 'Enphase IQ8HC & IQ8P Microinverters', 'Fronius Symo / Tauro / Primo Series'],
    tag: 'From 3kW to 2.5MW',
  },
  {
    icon: Battery,
    title: 'Energy Storage (UnityESS)',
    href: '/products/energy-storage',
    color: 'text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    bg: 'from-purple-900/20 to-transparent',
    brands: ['UnityESS Model A – Residential BESS', 'UnityESS Model C – Commercial & Industrial', 'Unity Infinity – Utility Scale MWh Storage'],
    tag: 'Made in India · Ghiloth, NCR',
  },
  {
    icon: Home,
    title: 'Ornate Products',
    href: '/products/inroof',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    bg: 'from-emerald-900/20 to-transparent',
    brands: ['InRoof – India\'s First Solar Integrated Roof', 'OJAS Solar Mounting Structure', 'Solar Carport – EV Ready', 'AgriPV – Dual Land Use', 'Vyasa DGPV System'],
    tag: 'Patented Innovations',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0E1A]" style={{ backgroundImage: 'linear-gradient(rgba(255,193,7,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,193,7,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-solar-500 top-[-150px] right-[-100px] opacity-[0.07] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Complete Portfolio</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
              Every Solar Solution<br />
              <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Under One Roof
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
              Ornate Solar carries India's widest range of solar products — from generation to storage to integration. 
              Every product is Tier-1 bankable, in-stock at 26 Indian warehouses, and backed by our Ornate Guarantee.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-solar-500/25 text-base">
              Get Expert Recommendation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-3xl p-7 flex flex-col transition-all duration-300 group`}
                  style={{ background: undefined, backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                        <Icon size={20} className={cat.color} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider ${cat.color} mb-0.5`}>{cat.tag}</div>
                        <h2 className="font-display text-xl font-bold text-white">{cat.title}</h2>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {cat.brands.map((brand) => (
                      <li key={brand} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className={`${cat.color} flex-shrink-0 mt-0.5 opacity-80`} />
                        <span className="text-sm text-slate-300">{brand}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={cat.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${cat.color} group-hover:gap-3 transition-all`}
                  >
                    Explore {cat.title} <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '26+', label: 'Warehouses Pan India', sub: 'Fastest Delivery' },
              { value: '7,124+', label: 'Satisfied Customers', sub: 'Since 1998' },
              { value: '1 GW+', label: 'Solar Delivered', sub: 'Across India' },
              { value: 'AEO T3', label: 'Govt. Certified', sub: 'Authorised Economic Operator' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="font-display text-2xl font-bold text-solar-400 mb-1">{value}</div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
