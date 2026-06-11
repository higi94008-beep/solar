'use client'
import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Zap, Users, Building2, Award, Globe } from 'lucide-react'

const stats = [
  { value: 2500, suffix: ' Cr+', label: 'Cumulative Revenue', icon: TrendingUp, prefix: '₹' },
  { value: 1, suffix: ' GW+', label: 'Solar Delivered', icon: Zap, prefix: '' },
  { value: 7124, suffix: '+', label: 'Satisfied Customers', icon: Users, prefix: '' },
  { value: 26, suffix: '+', label: 'Local Warehouses', icon: Building2, prefix: '' },
  { value: 25, suffix: '+', label: 'Years of Excellence', icon: Award, prefix: '' },
  { value: 15, suffix: '+', label: 'States Covered', icon: Globe, prefix: '' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ stat, start }: { stat: typeof stats[0]; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start)
  const Icon = stat.icon

  return (
    <div className="text-center p-6 card-dark rounded-2xl group product-card-shine">
      <div className="w-12 h-12 bg-solar-500/10 border border-solar-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-solar-500/20 transition-colors">
        <Icon size={22} className="text-solar-400" />
      </div>
      <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1 counter-value">
        {stat.prefix}{count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="text-sm text-slate-400">{stat.label}</div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-4">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Our Numbers</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Numbers Do the Talking
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Driven by our commitment to customer satisfaction and on-time delivery of top-notch solar equipment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
