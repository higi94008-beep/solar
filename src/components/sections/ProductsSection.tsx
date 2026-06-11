import Link from 'next/link'
import { ArrowRight, Zap, Sun, Battery, Home } from 'lucide-react'

const products = [
  {
    category: 'Solar Panels',
    icon: Sun,
    href: '/products/solar-panels',
    color: 'solar',
    items: [
      { name: 'RenewSys N-Type TOPCon Bifacial', spec: '635–640 Wp | 156 Cell' },
      { name: 'RenewSys N-Type TOPCon Bifacial', spec: '585–600 Wp | 144 Cell' },
      { name: 'First Solar Thin-Film', spec: '532 Wp | Series 7' },
      { name: 'Canadian Solar TOPBiHiKu6', spec: '615–620 Wp | N-Type' },
    ],
    description: 'World-class solar panels from Tier-1 manufacturers — from high-efficiency TOPCon bifacial to reliable thin-film modules.',
    gradient: 'from-solar-900/30 to-solar-800/10',
    border: 'border-solar-500/20 hover:border-solar-500/40',
    tag: 'text-solar-400',
  },
  {
    category: 'Inverters',
    icon: Zap,
    href: '/products/inverters',
    color: 'blue',
    items: [
      { name: 'Hopewind String Inverter', spec: '385kW — Highest in India' },
      { name: 'Hopewind PCS Liquid-Cooled', spec: '2.5MW Utility Scale' },
      { name: 'SolarEdge Residential', spec: '3kW–10kW HD-Wave' },
      { name: 'Enphase IQ8 Microinverter', spec: 'IQ8HC & IQ8P Series' },
    ],
    description: 'From residential microinverters to India\'s highest-capacity 385kW string inverter — precision power conversion.',
    gradient: 'from-blue-900/30 to-blue-800/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    tag: 'text-blue-400',
  },
  {
    category: 'Energy Storage',
    icon: Battery,
    href: '/products/energy-storage',
    color: 'purple',
    items: [
      { name: 'UnityESS Model A', spec: 'Residential BESS' },
      { name: 'UnityESS Model C', spec: 'Commercial BESS' },
      { name: 'Unity Infinity', spec: 'Utility Scale BESS' },
      { name: 'Enphase IQ Battery 5P', spec: 'Modular Home Storage' },
    ],
    description: 'In-house designed battery energy storage systems — made in India, engineered for India\'s grid conditions.',
    gradient: 'from-purple-900/30 to-purple-800/10',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    tag: 'text-purple-400',
  },
  {
    category: 'Ornate Products',
    icon: Home,
    href: '/products/inroof',
    color: 'emerald',
    items: [
      { name: 'InRoof — Integrated Solar Roof', spec: 'India\'s First & Only' },
      { name: 'OJAS Solar Structure', spec: 'Ground & Rooftop' },
      { name: 'Solar Carport', spec: 'EV-Ready Design' },
      { name: 'AgriPV & Vyasa DGPV', spec: 'Agriculture Solar' },
    ],
    description: 'Proprietary innovations — from India\'s first solar-integrated roof to AgriPV systems enabling dual land use.',
    gradient: 'from-emerald-900/30 to-emerald-800/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    tag: 'text-emerald-400',
  },
]

export default function ProductsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-4">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Product Portfolio</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
              Complete Solar Solutions
            </h2>
            <p className="text-slate-400 max-w-lg text-base">
              Every product category covered — from generation to storage to integration.
            </p>
          </div>
          <Link href="/products/solar-panels" className="solar-btn-outline self-start">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.category}
                className={`bg-gradient-to-br ${product.gradient} border ${product.border} rounded-2xl p-6 transition-all duration-300 group product-card-shine`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${product.tag}`}>
                      {product.category}
                    </div>
                    <p className="text-slate-400 text-sm max-w-xs">{product.description}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 ml-3`}>
                    <Icon size={20} className={product.tag} />
                  </div>
                </div>

                {/* Product list */}
                <div className="space-y-2 mb-5">
                  {product.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-sm text-slate-300 font-medium">{item.name}</span>
                      <span className={`text-xs font-semibold ml-3 flex-shrink-0 ${product.tag}`}>{item.spec}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${product.tag} hover:gap-3 transition-all`}
                >
                  Explore {product.category} <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
