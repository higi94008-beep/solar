'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const offices = [
  { city: 'New Delhi (HQ)', address: 'A-87, Okhla Industrial Area, Phase – II, New Delhi – 110020', phone: '+91 11-4353-6666' },
  { city: 'Mumbai', address: 'Ornate Solar, Mumbai Distribution Centre, Maharashtra', phone: '+91 22-XXXX-XXXX' },
  { city: 'Bangalore', address: 'Ornate Solar, Whitefield, Bengaluru, Karnataka', phone: '+91 80-XXXX-XXXX' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('contact_messages').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[400px] h-[400px] bg-solar-600 top-0 right-0 opacity-8" />
        <div className="container-wide relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Get in Touch</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
            Let&apos;s Build Your Solar Project
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our team of solar engineers and project managers are ready to help you design and deliver the perfect solar solution.
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <section className="pb-10">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Phone, title: 'Toll-Free Helpline', value: '+91 1800-2026-252', sub: 'Mon–Sat, 9am–6pm IST', href: 'tel:+911800202625' },
              { icon: Mail, title: 'Email Us', value: 'info@ornatesolar.com', sub: 'Response within 24 hours', href: 'mailto:info@ornatesolar.com' },
              { icon: Clock, title: 'Business Hours', value: 'Mon–Sat: 9am–6pm', sub: 'IST (India Standard Time)', href: '#' },
            ].map(({ icon: Icon, title, value, sub, href }) => (
              <a
                key={title}
                href={href}
                className="card-dark rounded-2xl p-5 flex items-start gap-4 hover:border-solar-500/30 transition-all"
              >
                <div className="w-10 h-10 bg-solar-500/10 border border-solar-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-solar-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{title}</div>
                  <div className="text-sm font-semibold text-white">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section id="quote" className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-slate-400 text-sm mb-6">Fill in the form and our team will get back to you promptly.</p>

              {status === 'success' ? (
                <div className="text-center py-12 card-dark rounded-2xl">
                  <CheckCircle2 size={48} className="text-solar-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-5">We&apos;ll get back to you within 24 business hours.</p>
                  <button onClick={() => setStatus('idle')} className="solar-btn-outline text-sm">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98XXXXXXXX" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject *</label>
                    <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="What is this regarding?" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message *</label>
                    <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your requirement..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all resize-none" />
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      <AlertCircle size={14} /> Failed to send. Please try again or email us directly.
                    </div>
                  )}
                  <button type="submit" disabled={status === 'loading'} className="solar-btn-primary w-full justify-center py-3.5 disabled:opacity-60">
                    {status === 'loading' ? 'Sending...' : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">Our Offices</h2>
              <p className="text-slate-400 text-sm mb-6">Find us across India. 26 warehouses for fast equipment delivery.</p>

              <div className="space-y-4 mb-8">
                {offices.map((office) => (
                  <div key={office.city} className="card-dark rounded-xl p-5 flex items-start gap-4">
                    <div className="w-9 h-9 bg-solar-500/10 border border-solar-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-solar-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-0.5">{office.city}</div>
                      <div className="text-xs text-slate-400 mb-1">{office.address}</div>
                      <a href={`tel:${office.phone}`} className="text-xs text-solar-400 hover:text-solar-300 transition-colors">{office.phone}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-midnight-700 aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin size={32} className="mx-auto mb-2 opacity-40" />
                  <p className="text-xs">A-87, Okhla Phase II, New Delhi</p>
                  <a
                    href="https://g.page/ornatesolar?share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-solar-400 hover:underline mt-1 block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
