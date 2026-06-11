'use client'
import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Briefcase, MapPin, Clock, Users, Zap, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const openings = [
  { title: 'Solar Project Engineer', dept: 'Engineering', location: 'New Delhi', type: 'Full-time' },
  { title: 'Business Development Manager', dept: 'Sales', location: 'Mumbai / Bangalore', type: 'Full-time' },
  { title: 'R&D Engineer — Power Electronics', dept: 'R&D', location: 'Ghiloth, NCR', type: 'Full-time' },
  { title: 'Digital Marketing Specialist', dept: 'Marketing', location: 'New Delhi', type: 'Full-time' },
  { title: 'Solar Installer / Technician', dept: 'Operations', location: 'Pan India', type: 'Full-time' },
  { title: 'Product Manager — BESS', dept: 'Product', location: 'New Delhi', type: 'Full-time' },
]

const perks = [
  { icon: Zap, title: 'Meaningful Work', desc: 'Help power India\'s clean energy transition — your work directly reduces carbon emissions.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Work alongside India\'s brightest solar engineers, entrepreneurs, and innovators.' },
  { icon: Briefcase, title: 'Career Growth', desc: 'Clear growth paths, internal mobility, and learning budgets for every team member.' },
  { icon: Clock, title: 'Work-Life Balance', desc: 'Flexible working arrangements, 5-day work weeks, and generous leave policies.' },
]

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('career_applications').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
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
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Join the Team</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
            Build India&apos;s Clean Energy Future.<br />
            <span className="text-gradient">Work at Ornate Solar.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We&apos;re looking for passionate engineers, developers, sales professionals, and innovators who want to make India energy independent.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-midnight-800/30">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark rounded-2xl p-6 text-center">
                <div className="w-11 h-11 bg-solar-500/10 border border-solar-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-solar-400" />
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {openings.map((job) => (
              <div key={job.title} className="card-dark rounded-2xl p-5 flex items-start justify-between gap-4 hover:border-solar-500/30 transition-all">
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Briefcase size={11} /> {job.dept}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={11} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} /> {job.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setForm({ ...form, position: job.title })}
                  className="text-solar-400 hover:text-solar-300 text-xs font-semibold flex items-center gap-1 flex-shrink-0"
                >
                  Apply <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

          {/* Application form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">Apply Now</h2>
              <p className="text-slate-400 text-sm mb-8">Don&apos;t see the right role? Send us your profile anyway — we&apos;re always looking for great people.</p>

              {status === 'success' ? (
                <div className="text-center py-10 card-dark rounded-2xl">
                  <CheckCircle2 size={40} className="text-solar-500 mx-auto mb-3" />
                  <h3 className="font-display text-lg font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-slate-400 text-sm">We&apos;ll review your application and get back to you within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Full Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98XXXXXXXX" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Position Applying For *</label>
                    <input type="text" required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}
                      placeholder="Job title / area of interest" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Years of Experience *</label>
                    <select required value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-solar-500/50 transition-all appearance-none">
                      <option value="" className="bg-midnight">Select experience</option>
                      <option value="0-1" className="bg-midnight">0–1 years (Fresher)</option>
                      <option value="1-3" className="bg-midnight">1–3 years</option>
                      <option value="3-5" className="bg-midnight">3–5 years</option>
                      <option value="5-10" className="bg-midnight">5–10 years</option>
                      <option value="10+" className="bg-midnight">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Tell Us About Yourself</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Brief intro, relevant experience, why Ornate Solar..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-solar-500/50 transition-all resize-none" />
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      <AlertCircle size={14} /> Failed to submit. Please try again.
                    </div>
                  )}
                  <button type="submit" disabled={status === 'loading'} className="solar-btn-primary w-full justify-center py-3.5 disabled:opacity-60">
                    {status === 'loading' ? 'Submitting...' : <><Send size={15} /> Submit Application</>}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-5">
              <h2 className="font-display text-2xl font-bold text-white">Life at Ornate Solar</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We&apos;re a 250+ person team working across New Delhi, Mumbai, Bangalore, and manufacturing in Ghiloth, NCR. 
                Our culture is built on mutual respect, ownership, and a shared belief that clean energy will shape India&apos;s future.
              </p>
              <div className="bg-glass rounded-2xl p-5 border border-solar-500/20">
                <h3 className="font-display text-sm font-semibold text-solar-400 mb-3">What Our Team Says</h3>
                <blockquote className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;At Ornate, I get to work on technologies that will be in the field for 25 years. 
                  The impact you make here is real and lasting.&rdquo;
                </blockquote>
                <div className="mt-3 text-xs text-slate-500">— Senior R&D Engineer, Ghiloth Facility</div>
              </div>
              <div className="bg-glass rounded-2xl p-5 border border-white/10">
                <blockquote className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;I joined as a graduate trainee and I&apos;m now leading a regional sales team. 
                  The growth here is real if you&apos;re willing to put in the effort.&rdquo;
                </blockquote>
                <div className="mt-3 text-xs text-slate-500">— Regional Manager, West India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
