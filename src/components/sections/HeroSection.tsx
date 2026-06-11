'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Award, Zap } from 'lucide-react'

const slides = [
  {
    eyebrow: 'India\'s #1 Solar Company',
    headline: 'Power Your Future with',
    highlight: 'Premium Solar',
    sub: 'From integrated roofing to industrial-scale inverters — 25 years of engineering excellence, 1GW+ delivered across India.',
    cta: { label: 'Explore InRoof Solution', href: '/products/inroof' },
    tag: 'InRoof — Solar Integrated Roofing',
    accent: '#FFC107',
  },
  {
    eyebrow: 'PM KUSUM Yojana Partner',
    headline: 'Empowering India\'s',
    highlight: 'Farmers with Solar',
    sub: 'Official implementation partner for PM KUSUM. Bringing affordable solar energy to agriculture, reducing input costs for 7,000+ farmers.',
    cta: { label: 'Learn About PM KUSUM', href: '/pm-kusum' },
    tag: 'Government Approved Program',
    accent: '#4CAF50',
  },
  {
    eyebrow: 'UnityESS — Battery Storage',
    headline: 'Next-Gen Energy',
    highlight: 'Storage Systems',
    sub: 'The UnityESS lineup — purpose-built for India\'s grid conditions. BESS solutions from residential to utility scale, engineered in-house.',
    cta: { label: 'Explore UnityESS', href: '/products/energy-storage' },
    tag: 'Made in India',
    accent: '#2196F3',
  },
]

export default function HeroSection() {
  const slideRef = useRef<HTMLDivElement>(null)
  const currentSlide = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      currentSlide.current = (currentSlide.current + 1) % slides.length
      if (slideRef.current) {
        const slideEls = slideRef.current.querySelectorAll('.slide-item')
        slideEls.forEach((el, i) => {
          ;(el as HTMLElement).style.opacity = i === currentSlide.current ? '1' : '0'
          ;(el as HTMLElement).style.transform = i === currentSlide.current ? 'translateY(0)' : 'translateY(20px)'
        })
      }
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight">
        <div className="grid-bg absolute inset-0 opacity-60" />
        {/* Orbs */}
        <div className="hero-orb w-[600px] h-[600px] bg-solar-500 top-[-200px] right-[-100px] opacity-10" />
        <div className="hero-orb w-[400px] h-[400px] bg-blue-600 bottom-[-100px] left-[-100px] opacity-8" />
        <div className="hero-orb w-[300px] h-[300px] bg-solar-700 top-[40%] left-[40%] opacity-6" />
      </div>

      <div className="container-wide relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-solar-500 rounded-full animate-pulse" />
              <span className="text-solar-400 text-xs font-semibold tracking-wider uppercase">
                India&apos;s Leading Solar Company
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Power India&apos;s Future with{' '}
              <span className="text-gradient">Premium Solar</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              25 years of engineering excellence. AEO T3 certified. DSIR-recognised R&D lab.
              India&apos;s first solar integrated roofing — and over 1 GW delivered across the nation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact#quote" className="solar-btn-primary px-7 py-3.5 text-base">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="solar-btn-outline px-7 py-3.5 text-base">
                <Play size={16} /> Our Story
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: 'AEO T3 Certified', value: 'Govt. of India' },
                { icon: Award, label: 'DSIR Recognised', value: 'R&D Lab' },
                { icon: Zap, label: '26 Warehouses', value: 'Pan India' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-solar-500/10 border border-solar-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-solar-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{label}</p>
                    <p className="text-xs text-slate-500">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="relative">
            {/* Main feature card */}
            <div className="bg-glass rounded-3xl p-8 border border-white/10 mb-5">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-solar-500/20 to-solar-900/20 border border-solar-500/10 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="text-center relative z-10">
                  <div className="text-7xl font-display font-bold text-gradient leading-none mb-1">1 GW+</div>
                  <div className="text-solar-400 text-sm font-semibold tracking-wide uppercase">Solar Delivered Across India</div>
                </div>
                {/* Decorative rays */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px bg-gradient-to-t from-solar-500/20 to-transparent"
                    style={{
                      height: '60%',
                      bottom: '-10%',
                      left: '50%',
                      transform: `rotate(${(i - 3.5) * 12}deg)`,
                      transformOrigin: 'bottom center',
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '25+', label: 'Years' },
                  { value: '7,124+', label: 'Customers' },
                  { value: '₹2,500 Cr', label: 'Revenue' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-display font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-dark p-4 rounded-xl">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide font-medium">Innovation</div>
                <div className="text-sm font-semibold text-white">India&apos;s First InRoof Solar</div>
                <div className="text-xs text-solar-400 mt-1">Patented Technology</div>
              </div>
              <div className="card-dark p-4 rounded-xl">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide font-medium">Network</div>
                <div className="text-sm font-semibold text-white">26 Local Warehouses</div>
                <div className="text-xs text-solar-400 mt-1">Pan India Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  )
}
