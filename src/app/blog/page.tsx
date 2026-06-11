import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Solar News',
  description: 'Latest solar industry news, technology updates, policy insights, and case studies from Ornate Solar — India\'s leading solar company.',
}

const posts = [
  {
    title: 'Uttar Pradesh Advances PM KUSUM Goals with 57 Solar Power Purchase Agreements',
    excerpt: 'Uttar Pradesh has approved 57 Power Purchase Agreements (PPAs) under the PM KUSUM Component C-2 scheme, bringing solar energy to thousands more farmers across the state.',
    category: 'Policy',
    author: 'Anjali Sharma',
    date: 'June 8, 2026',
    slug: 'up-pm-kusum-57-ppas',
    featured: true,
  },
  {
    title: 'India Surpasses US in Solar Capacity Additions, Emerges as World\'s Second-Largest Solar Market',
    excerpt: 'India has emerged as the world\'s second-largest solar growth market, surpassing the US in solar capacity additions with record installations in 2025–26.',
    category: 'News',
    author: 'Anjali Sharma',
    date: 'June 4, 2026',
    slug: 'india-solar-surpasses-us',
    featured: false,
  },
  {
    title: 'Hopewind PCS 2.5MW: Advanced Liquid-Cooled Power Conversion for Utility-Scale BESS',
    excerpt: 'The Hopewind PCS 2.5MW liquid-cooled power conversion system is redefining what\'s possible for large-scale battery storage installations in India.',
    category: 'Technology',
    author: 'Arjun Paridwal',
    date: 'June 1, 2026',
    slug: 'hopewind-pcs-2-5mw-bess',
    featured: false,
  },
  {
    title: 'Why N-Type TOPCon Bifacial Panels Are the Future of Commercial Solar in India',
    excerpt: 'N-Type TOPCon technology is rapidly displacing PERC in large-scale solar projects. Here\'s why, and what it means for project developers.',
    category: 'Technology',
    author: 'Arjun Paridwal',
    date: 'May 25, 2026',
    slug: 'n-type-topcon-bifacial-future',
    featured: false,
  },
  {
    title: 'InRoof Installation Guide: What You Need to Know Before Going Solar-Integrated',
    excerpt: 'Everything homeowners and architects need to understand before specifying India\'s first integrated solar roofing system.',
    category: 'Guide',
    author: 'Ornate Solar Team',
    date: 'May 18, 2026',
    slug: 'inroof-installation-guide',
    featured: false,
  },
  {
    title: 'Rajasthan\'s Solar Boom: How 29,000 Farmers Got Solar Pumps in One Year',
    excerpt: 'A deep-dive into how Rajasthan achieved a landmark milestone under the PM KUSUM solar pump scheme and what it means for the rest of India.',
    category: 'Case Study',
    author: 'Anjali Sharma',
    date: 'May 10, 2026',
    slug: 'rajasthan-solar-pump-farmers',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Policy: 'text-green-400 bg-green-500/10 border-green-500/20',
  News: 'text-solar-400 bg-solar-500/10 border-solar-500/20',
  Technology: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Guide: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  'Case Study': 'text-orange-400 bg-orange-500/10 border-orange-500/20',
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-midnight grid-bg opacity-60" />
        <div className="container-wide relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-6">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Solar Insights</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
            News, Guides & Solar Updates
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Industry news, technology deep-dives, policy updates, and practical guides from Ornate Solar&apos;s team of experts.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-10 group">
              <div className="card-dark rounded-3xl p-8 lg:p-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-midnight-700 rounded-2xl flex items-center justify-center border border-white/5">
                  <div className="text-5xl">☀️</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1.5 bg-solar-500 text-midnight rounded-full">Featured</span>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${categoryColors[featured.category] || ''}`}>{featured.category}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-solar-300 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5"><Calendar size={11} /> {featured.date}</span>
                      <span>{featured.author}</span>
                    </div>
                    <span className="text-solar-400 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-dark rounded-2xl overflow-hidden group flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-midnight-700 flex items-center justify-center border-b border-white/5">
                  <div className="text-4xl">☀️</div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border self-start mb-3 ${categoryColors[post.category] || ''}`}>
                    {post.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-solar-300 transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1.5"><Calendar size={11} /> {post.date}</span>
                    <span className="text-solar-400 font-medium flex items-center gap-1">Read <ArrowRight size={11} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
