import Link from 'next/link'
import { ArrowRight, Leaf, Sun, CheckCircle2 } from 'lucide-react'

export default function PMKusumBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-wide py-0">
        <div className="relative rounded-3xl bg-gradient-to-r from-green-950/60 via-green-900/40 to-solar-900/40 border border-green-500/20 overflow-hidden p-8 lg:p-12">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-solar-500/5 rounded-full blur-3xl" />
          <div className="absolute left-1/2 bottom-0 w-60 h-60 bg-green-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Leaf size={16} className="text-green-400" />
                </div>
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Government of India Initiative</span>
              </div>

              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                PM KUSUM Yojana — Solar for Farmers
              </h2>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed mb-5">
                Ornate Solar is an official implementation partner for India&apos;s flagship PM KUSUM scheme. 
                Help farmers reduce electricity costs by up to 90% through solar-powered irrigation and on-farm power plants.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  'Component A – 500kW to 2MW',
                  'Component B – Standalone Pumps',
                  'Component C – Grid-Connected Pumps',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 flex-shrink-0">
              <Link href="/pm-kusum" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all text-sm">
                Learn More <ArrowRight size={15} />
              </Link>
              <Link href="/contact#quote" className="inline-flex items-center gap-2 px-6 py-3 border border-green-500/40 hover:border-green-400 text-green-400 font-semibold rounded-xl transition-all text-sm">
                <Sun size={15} /> Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
