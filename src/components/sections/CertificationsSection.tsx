import { Shield, Award, FlaskConical, Truck, Headphones, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Truck,
    title: 'Ornate Express',
    desc: 'Fastest delivery guaranteed with over 26 local warehouses across India. Never wait weeks for your solar equipment.',
    href: '#',
    color: 'text-solar-400',
    bg: 'bg-solar-500/10 border-solar-500/20',
  },
  {
    icon: Shield,
    title: 'Ornate Guarantee',
    desc: 'Solar industry\'s most reputed support and service network. We stand behind every product we sell.',
    href: '#',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Users,
    title: 'Solar+ Partner Program',
    desc: 'Partner with Ornate Solar and benefit from India\'s vast solar potential. Join our growing ecosystem.',
    href: '/contact#partner',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Award,
    title: 'Ornate Assured Products',
    desc: 'Customisable, quality-checked solar accessories for every project type. Precision-engineered to last.',
    href: '/products/inroof',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: FlaskConical,
    title: 'AEO T3 Certified',
    desc: 'Authorised Economic Operator T3 certification from the Government of India — highest trade compliance standard.',
    href: '/about',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Headphones,
    title: 'Post-Sales Support',
    desc: '24/7 technical support. Our expert team ensures every installation performs to specification, every day.',
    href: '/contact',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
]

export default function CertificationsSection() {
  return (
    <section className="section-padding bg-midnight-800/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-4">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Why Ornate</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Solving Solar&apos;s Biggest Problems
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From procurement to installation to after-sales — we&apos;ve built an end-to-end ecosystem so you never have to worry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="card-dark rounded-2xl p-6 group">
                <div className={`w-11 h-11 ${service.bg} border rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={service.color} />
                </div>
                <h3 className={`font-display text-base font-semibold mb-2 ${service.color}`}>{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
