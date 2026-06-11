'use client'
import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Building2, MessageSquare } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function QuoteSection() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', organization: '', requirement: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('quote_requests').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', phone: '', email: '', organization: '', requirement: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="hero-orb w-[600px] h-[600px] bg-solar-600 bottom-0 right-0 opacity-5" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Get Started</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Request a Quote — <span className="text-gradient">Free Expert Consultation</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Our solar engineers will not only provide you with the most competitive quote but also guide you with technical expertise. 
              Partner with Ornate to build better, more efficient solar projects.
            </p>

            <div className="space-y-5">
              {[
                { icon: CheckCircle2, text: 'Free technical consultation with certified engineers' },
                { icon: CheckCircle2, text: 'Customised solution design for your specific site' },
                { icon: CheckCircle2, text: 'Transparent pricing with no hidden charges' },
                { icon: CheckCircle2, text: 'Quick turnaround — response within 24 hours' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon size={18} className="text-solar-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a href="tel:+911800202625" className="flex items-center gap-3 p-4 card-dark rounded-xl hover:border-solar-500/30 transition-all">
                <div className="w-9 h-9 bg-solar-500/10 border border-solar-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-solar-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Us</div>
                  <div className="text-sm font-semibold text-white">1800-2026-252</div>
                </div>
              </a>
              <a href="mailto:info@ornatesolar.com" className="flex items-center gap-3 p-4 card-dark rounded-xl hover:border-solar-500/30 transition-all">
                <div className="w-9 h-9 bg-solar-500/10 border border-solar-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-solar-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-semibold text-white">info@ornatesolar.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-glass rounded-3xl p-8 border border-white/10">
            <h3 className="font-display text-xl font-bold text-white mb-6">Tell Us About Your Project</h3>

            {status === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-solar-500 mx-auto mb-4" />
                <h4 className="font-display text-lg font-bold text-white mb-2">Quote Request Received!</h4>
                <p className="text-slate-400 text-sm">Our team will get back to you within 24 hours with a detailed proposal.</p>
                <button onClick={() => setStatus('idle')} className="mt-5 solar-btn-outline text-sm">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Organisation / Company</label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Project Requirement</label>
                  <textarea
                    rows={3}
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    placeholder="Describe your solar requirement — capacity, location, use case..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    <AlertCircle size={15} /> Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="solar-btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Request Free Quote
                    </span>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  No spam. We&apos;ll only contact you about your solar project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
