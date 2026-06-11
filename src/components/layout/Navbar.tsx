'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Zap } from 'lucide-react'

const products = [
  {
    label: 'Solar Panels',
    href: '/products/solar-panels',
    items: [
      { name: 'RenewSys TOPCon Bifacial – 635–640 Wp', href: '/products/solar-panels#renewsys-640' },
      { name: 'RenewSys TOPCon Bifacial – 585–600 Wp', href: '/products/solar-panels#renewsys-600' },
      { name: 'First Solar Thin-Film – 532 Wp', href: '/products/solar-panels#first-solar' },
      { name: 'Canadian Solar TOPBiHiKu6', href: '/products/solar-panels#canadian' },
    ],
  },
  {
    label: 'Inverters',
    href: '/products/inverters',
    items: [
      { name: 'Hopewind 385kW String Inverter', href: '/products/inverters#hopewind-385' },
      { name: 'Hopewind 2.5MW Liquid-Cooled PCS', href: '/products/inverters#hopewind-pcs' },
      { name: 'SolarEdge Residential (3–10kW)', href: '/products/inverters#solaredge-res' },
      { name: 'SolarEdge Commercial (15–66kW)', href: '/products/inverters#solaredge-com' },
      { name: 'Enphase IQ8 Microinverter', href: '/products/inverters#enphase' },
      { name: 'Fronius Inverters', href: '/products/inverters#fronius' },
    ],
  },
  {
    label: 'Energy Storage',
    href: '/products/energy-storage',
    items: [
      { name: 'UnityESS Model A', href: '/products/energy-storage#model-a' },
      { name: 'UnityESS Model C', href: '/products/energy-storage#model-c' },
      { name: 'Unity Infinity', href: '/products/energy-storage#infinity' },
    ],
  },
  {
    label: 'Ornate Products',
    href: '/products/inroof',
    items: [
      { name: 'InRoof – Integrated Solar Roof', href: '/products/inroof' },
      { name: 'OJAS Solar Structure', href: '/products/inroof#ojas' },
      { name: 'Solar Carport', href: '/products/inroof#carport' },
      { name: 'Solar Tracker', href: '/products/inroof#tracker' },
      { name: 'AgriPV', href: '/products/inroof#agripv' },
      { name: 'Vyasa DGPV', href: '/products/inroof#vyasa' },
    ],
  },
]

const navLinks = [
  { label: 'PM KUSUM Yojana', href: '/pm-kusum' },
  { label: 'Products', href: '#', hasDropdown: true },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-solar-600 text-midnight text-xs font-medium py-1.5 px-4 text-center hidden md:flex items-center justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <Zap size={12} /> India&apos;s Leading Solar Company | 25+ Years of Excellence | 1 GW+ Delivered
        </span>
        <a href="tel:+911800-2026-252" className="flex items-center gap-1.5 hover:underline font-semibold">
          <Phone size={12} /> +91 1800-2026-252 (Toll Free)
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-midnight-DEFAULT/95 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-solar-500 rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-midnight" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-xl text-white">
              Ornate <span className="text-gradient">Solar</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/pm-kusum" className="nav-link px-4 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5">
              PM KUSUM
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5">
                Products <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-midnight-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-6">
                  {products.map((cat) => (
                    <div key={cat.label}>
                      <Link href={cat.href} className="block text-solar-400 font-semibold text-sm mb-3 font-display hover:text-solar-300">
                        {cat.label}
                      </Link>
                      <ul className="space-y-1.5">
                        {cat.items.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="text-xs text-slate-400 hover:text-slate-200 transition-colors leading-snug block">
                              › {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link px-4 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5">
              About Us
            </Link>
            <Link href="/blog" className="nav-link px-4 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5">
              Blog
            </Link>
            <Link href="/careers" className="nav-link px-4 py-2 text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors rounded-lg hover:bg-white/5">
              Careers
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-solar-400 transition-colors">
              Contact
            </Link>
            <Link href="/contact#quote" className="solar-btn-primary text-sm py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-solar-400 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-midnight-800/98 backdrop-blur-xl border-t border-white/5">
            <div className="container-wide py-4 space-y-1">
              <Link href="/pm-kusum" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                PM KUSUM Yojana
              </Link>

              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                Products <ChevronDown size={14} className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 space-y-3 py-2">
                  {products.map((cat) => (
                    <div key={cat.label}>
                      <Link href={cat.href} className="block text-solar-400 font-semibold text-xs mb-1" onClick={() => setMobileOpen(false)}>
                        {cat.label}
                      </Link>
                      {cat.items.slice(0, 3).map((item) => (
                        <Link key={item.name} href={item.href} className="block text-xs text-slate-500 hover:text-slate-300 py-0.5 pl-2" onClick={() => setMobileOpen(false)}>
                          › {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <Link href="/about" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <Link href="/blog" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/careers" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-solar-400 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <div className="pt-2 px-4">
                <Link href="/contact#quote" className="solar-btn-primary w-full justify-center text-sm" onClick={() => setMobileOpen(false)}>
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
