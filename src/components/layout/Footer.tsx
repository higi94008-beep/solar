import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, Linkedin, Youtube, Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Ornate', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'R&D Center', href: '/about#rd' },
    { label: 'Careers', href: '/careers' },
    { label: 'Partner with Us', href: '/contact#partner' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/contact#faq' },
  ],
  products: [
    { label: 'InRoof Solution', href: '/products/inroof' },
    { label: 'UnityESS', href: '/products/energy-storage' },
    { label: 'Solar Panels', href: '/products/solar-panels' },
    { label: 'Inverters', href: '/products/inverters' },
    { label: 'Solar Carport', href: '/products/inroof#carport' },
    { label: 'Solar Tracker', href: '/products/inroof#tracker' },
    { label: 'AgriPV', href: '/products/inroof#agripv' },
    { label: 'PM KUSUM Yojana', href: '/pm-kusum' },
  ],
  partners: [
    { label: 'First Solar', href: '/products/solar-panels#first-solar' },
    { label: 'RenewSys', href: '/products/solar-panels#renewsys' },
    { label: 'Hopewind', href: '/products/inverters#hopewind' },
    { label: 'SolarEdge', href: '/products/inverters#solaredge' },
    { label: 'Enphase', href: '/products/inverters#enphase' },
    { label: 'Fronius', href: '/products/inverters#fronius' },
    { label: 'Canadian Solar', href: '/products/solar-panels#canadian' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/blog#news' },
    { label: 'Case Studies', href: '/blog#case-studies' },
    { label: 'State Solar Policies', href: '/blog#policies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-midnight-800 border-t border-white/5">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-solar-500 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-midnight" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Ornate <span className="text-gradient">Solar</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s leading solar company with 25+ years of expertise. Designing and developing premium solar solutions that go beyond traditional installations.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-solar-500/10 border border-solar-500/20 rounded-full text-xs text-solar-400 font-medium">AEO T3 Certified</span>
              <span className="px-3 py-1 bg-solar-500/10 border border-solar-500/20 rounded-full text-xs text-solar-400 font-medium">DSIR R&D Lab</span>
              <span className="px-3 py-1 bg-solar-500/10 border border-solar-500/20 rounded-full text-xs text-solar-400 font-medium">ISO Certified</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/ornate-solar', label: 'LinkedIn' },
                { icon: Youtube, href: 'https://youtube.com/c/ornatesolarindia', label: 'YouTube' },
                { icon: Instagram, href: 'https://instagram.com/ornate_solar', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/ornatesolar', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com/OrnateSolar', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-solar-500/20 hover:text-solar-400 flex items-center justify-center text-slate-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Partner Brands</h4>
            <ul className="space-y-2.5">
              {footerLinks.partners.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+911800-2026-252" className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-solar-500" />
                  +91 1800-2026-252
                </a>
              </li>
              <li>
                <a href="mailto:info@ornatesolar.com" className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-solar-500" />
                  info@ornatesolar.com
                </a>
              </li>
              <li>
                <a href="https://g.page/ornatesolar" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-solar-400 transition-colors">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-solar-500" />
                  A-87, Okhla Phase – II, New Delhi
                </a>
              </li>
            </ul>

            {/* Resources */}
            <h4 className="font-display font-semibold text-white mt-6 mb-4 text-sm">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-solar-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2014–2026 Ornate Agencies Pvt. Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
