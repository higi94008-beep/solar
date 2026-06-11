'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Zap, Sun, Battery, Home, ArrowRight } from 'lucide-react'

const productCategories = [
  {
    label: 'Solar Panels',
    href: '/products/solar-panels',
    icon: Sun,
    color: 'text-solar-400',
    items: [
      { name: 'RenewSys TOPCon Bifacial – 635–640 Wp', href: '/products/solar-panels' },
      { name: 'RenewSys TOPCon Bifacial – 585–600 Wp', href: '/products/solar-panels' },
      { name: 'First Solar Thin-Film – 532 Wp', href: '/products/solar-panels' },
      { name: 'Canadian Solar TOPBiHiKu6', href: '/products/solar-panels' },
    ],
  },
  {
    label: 'Inverters',
    href: '/products/inverters',
    icon: Zap,
    color: 'text-blue-400',
    items: [
      { name: 'Hopewind 385kW String Inverter', href: '/products/inverters' },
      { name: 'Hopewind 2.5MW Liquid-Cooled PCS', href: '/products/inverters' },
      { name: 'SolarEdge Residential (3–10kW)', href: '/products/inverters' },
      { name: 'SolarEdge Commercial (15–66kW)', href: '/products/inverters' },
      { name: 'Enphase IQ8 Microinverter', href: '/products/inverters' },
      { name: 'Fronius Inverters', href: '/products/inverters' },
    ],
  },
  {
    label: 'Energy Storage',
    href: '/products/energy-storage',
    icon: Battery,
    color: 'text-purple-400',
    items: [
      { name: 'UnityESS Model A – Residential', href: '/products/energy-storage' },
      { name: 'UnityESS Model C – Commercial', href: '/products/energy-storage' },
      { name: 'Unity Infinity – Utility Scale', href: '/products/energy-storage' },
    ],
  },
  {
    label: 'Ornate Products',
    href: '/products/inroof',
    icon: Home,
    color: 'text-emerald-400',
    items: [
      { name: 'InRoof – Integrated Solar Roof', href: '/products/inroof' },
      { name: 'OJAS Solar Structure', href: '/products/inroof' },
      { name: 'Solar Carport', href: '/products/inroof' },
      { name: 'AgriPV & Vyasa DGPV', href: '/products/inroof' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-solar-600 text-midnight text-xs font-semibold py-1.5 px-4 hidden md:flex items-center justify-center gap-8">
        <span className="flex items-center gap-1.5">
          <Zap size={11} fill="currentColor" /> India's Leading Solar Company · 25+ Years · AEO T3 Certified · 1 GW+ Delivered
        </span>
        <a href="tel:+911800202625" className="flex items-center gap-1.5 hover:underline">
          <Phone size={11} /> Toll Free: 1800-2026-252
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0E1A]/96 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-white/5'
            : 'bg-[#0A0E1A]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 bg-solar-500 rounded-lg flex items-center justify-center group-hover:bg-solar-400 transition-colors">
              <Zap size={17} className="text-[#0A0E1A]" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-[1.2rem] text-white tracking-tight">
              Ornate <span style={{ background: 'linear-gradient(135deg,#FFD54F,#FFC107,#FF8F00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Solar</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link href="/pm-kusum" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-all">
              PM KUSUM
            </Link>

            {/* Products mega dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-all"
              >
                Products
                <ChevronDown size={13} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega menu */}
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[780px] bg-[#111827]/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 grid grid-cols-4 gap-5 transition-all duration-200 origin-top ${
                  dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {productCategories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div key={cat.label}>
                      <Link
                        href={cat.href}
                        className={`flex items-center gap-1.5 font-display font-bold text-sm mb-3 ${cat.color} hover:opacity-80 transition-opacity`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Icon size={13} />
                        {cat.label}
                      </Link>
                      <ul className="space-y-1.5">
                        {cat.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-[11px] leading-snug text-slate-400 hover:text-slate-100 transition-colors block pl-1 border-l border-transparent hover:border-solar-500/50"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={cat.href}
                            className={`text-[11px] font-semibold ${cat.color} flex items-center gap-1 mt-2 hover:gap-2 transition-all`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            View all <ArrowRight size={10} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            <Link href="/about" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-all">
              About Us
            </Link>
            <Link href="/blog" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-all">
              Blog
            </Link>
            <Link href="/careers" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-all">
              Careers
            </Link>
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-solar-500/25 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#0A0E1A]/98 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/pm-kusum" className="flex items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-xl transition-all">
                PM KUSUM Yojana
              </Link>

              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-xl transition-all"
                >
                  Products
                  <ChevronDown size={14} className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileProductsOpen && (
                  <div className="ml-4 mt-1 space-y-3 pb-2">
                    {productCategories.map((cat) => {
                      const Icon = cat.icon
                      return (
                        <div key={cat.label} className="pl-3 border-l border-white/10">
                          <Link
                            href={cat.href}
                            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-2 ${cat.color}`}
                            onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }}
                          >
                            <Icon size={11} /> {cat.label}
                          </Link>
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-xs text-slate-400 hover:text-slate-200 py-1 pl-2 transition-colors"
                              onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }}
                            >
                              › {item.name}
                            </Link>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-2 px-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 bg-solar-500 hover:bg-solar-400 text-[#0A0E1A] font-bold rounded-xl text-sm transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
