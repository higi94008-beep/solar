import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, FlaskConical, Globe2, Users, Building2, Zap, Shield, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ornate Solar',
  description: 'Established in 1998, Ornate Solar is India\'s most trusted clean energy solution provider. 1GW+ delivered, DSIR-certified R&D, and India\'s first integrated solar roofing.',
}

const milestones = [
  { year: '1998', event: 'Founded as Ornate Agencies Pvt. Ltd under the Hans Air – Rama Motors Group' },
  { year: '2005', event: 'Expanded to solar distribution with pan-India warehouse network' },
  { year: '2012', event: 'Established exclusive partnerships with global solar technology leaders' },
  { year: '2015', event: 'Unveiled Ornate Solar with a mission to accelerate India\'s clean energy transition' },
  { year: '2018', event: 'DSIR-certified R&D lab recognised by Ministry of Science and Technology' },
  { year: '2020', event: 'Launched India\'s first solar-integrated roofing — the InRoof system (patented)' },
  { year: '2022', event: 'Reached 500MW milestone; expanded manufacturing to Ghiloth, NCR' },
  { year: '2024', event: 'Launched UnityESS — India\'s indigenous Battery Energy Storage System lineup' },
  { year: '2026', event: 'Crossed 1 GW delivered; AEO T3 certified; ₹2,500 Cr+ cumulative revenue' },
]

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold our products and services to the highest standard — no shortcuts, no compromises.' },
  { icon: FlaskConical, title: 'Innovation', desc: 'We invest in R&D to solve problems the industry hasn\'t even identified yet.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Every product we sell contributes to India\'s net-zero goals and a cleaner planet.' },
  { icon: Shield, title: 'Trust', desc: 'Transparent pricing, quality guarantees, and responsive service — that\'s the Ornate promise.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="hero-orb w-[500px] h-[500px] bg-solar-600 top-[-100px] right-[-100px] opacity-8" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Our Story</span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create a Sustainable<br />
              <span className="text-gradient">Tomorrow, Together</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              We built Ornate Solar to be a catalyst in India&apos;s solar journey. Our mission is to empower you with affordable, 
              reliable, and easy solar solutions that fulfil your energy requirements while enabling you to contribute 
              to India&apos;s net-zero aspirations.
            </p>
            <Link href="/contact" className="solar-btn-primary">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-midnight-800/30">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '₹2,500 Cr+', label: 'Cumulative Revenue', icon: Building2 },
              { value: '1 GW+', label: 'Solar Delivered Across India', icon: Zap },
              { value: '7,124+', label: 'Satisfied Customers', icon: Users },
              { value: '25+', label: 'Years of Excellence', icon: Award },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center card-dark rounded-2xl p-6">
                <Icon size={24} className="text-solar-400 mx-auto mb-3" />
                <div className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Our History
              </h2>
              <div className="prose prose-invert prose-sm max-w-none space-y-4 text-slate-400">
                <p>
                  In the 1990s, M/s Hans Air Services — a prominent name in India&apos;s travel industry — ventured into automobiles 
                  and created full-range dealerships for Hyundai Motors, Fiat, and Tata Motors under the Rama Motors Pvt. Ltd. brand.
                </p>
                <p>
                  Fueled by three decades of business expertise and insights from international partnerships, the group unveiled 
                  Ornate Solar in 2015 with the mission to bring India one step closer to a sustainable tomorrow.
                </p>
                <p>
                  Ornate Solar is a Future Energy Solutions initiative of the Hans Air – Rama Motors Group. It is led by a team of 
                  entrepreneurs with an in-depth understanding of consumer behaviour across multi-dimensional backgrounds.
                </p>
                <p>
                  Today, with offices across India, associations with leading international solar manufacturers, and a DSIR-recognised 
                  R&amp;D lab, we have successfully deployed over 1 GW of solar solutions to 7,124+ customers — achieving ₹2,500 Cr+ in 
                  cumulative sales over the last 10 years.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Our Commitment to R&amp;D
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed mb-6">
                <p>
                  Ornate Solar&apos;s in-house R&D team has been accorded <strong className="text-solar-400">DSIR recognition</strong> by the 
                  Ministry of Science and Technology, Government of India.
                </p>
                <p>
                  We use our technical association with <strong className="text-solar-400">IIT-Delhi&apos;s industrial interface (FiTT)</strong> for 
                  designing solar energy projects and furthering our research collaboration.
                </p>
                <p>
                  The goal of this programme is to interact with the faculty of India&apos;s premier engineering institution to facilitate 
                  the implementation of technological developments, and to provide students with a hands-on solar energy learning lab.
                </p>
              </div>

              <div className="bg-glass rounded-2xl p-5 border border-solar-500/20">
                <h3 className="font-display text-sm font-semibold text-solar-400 mb-3 uppercase tracking-wide">Key R&D Achievements</h3>
                <ul className="space-y-2.5">
                  {[
                    'India\'s first solar-integrated roofing system (InRoof) — patented',
                    'Indigenous power electronics stack for grid-tied inverters',
                    'UnityESS — in-house battery energy storage system lineup',
                    'Multiple patents in solar integration and mounting technology',
                    'State-of-the-art BESS manufacturing in Ghiloth, NCR',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-solar-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-solar-500 rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section-padding bg-midnight-800/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
              Celebrating 25+ Years of Trust
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-[68px] top-0 bottom-0 w-px bg-gradient-to-b from-solar-500/50 via-solar-500/20 to-transparent" />
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 text-right">
                      <span className="text-xs font-bold text-solar-400 font-display">{m.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 w-5 flex items-start justify-center pt-0.5">
                      <div className="w-3 h-3 rounded-full bg-solar-500 border-2 border-midnight ring-2 ring-solar-500/20 z-10" />
                    </div>
                    <div className="flex-1 pb-1">
                      <p className="text-sm text-slate-300 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-solar-500/10 border border-solar-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-solar-400" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International partnerships */}
      <section className="section-padding bg-midnight-800/30">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-3">International Associations</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              We&apos;ve tied up with the best technologies from around the world and made them accessible in India 
              through our nationwide warehouse network.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['First Solar (USA)', 'Hopewind (China)', 'SolarEdge (Israel)', 'Enphase (USA)', 'RenewSys (India)', 'Fronius (Austria)', 'Canadian Solar (Canada)'].map((brand) => (
              <span key={brand} className="px-5 py-2.5 bg-white/4 border border-white/8 rounded-xl text-sm text-slate-300 font-medium">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Go Solar?</h2>
            <p className="text-slate-400 mb-8">
              Join 7,000+ satisfied customers who trust Ornate Solar for their clean energy needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#quote" className="solar-btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/products/solar-panels" className="solar-btn-outline">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
