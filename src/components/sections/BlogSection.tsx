import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

const posts = [
  {
    title: 'Uttar Pradesh Advances PM KUSUM Goals with 57 Solar PPAs Approved',
    excerpt: 'UP has approved 57 Power Purchase Agreements under PM KUSUM Component C-2, bringing solar irrigation to thousands more farmers.',
    category: 'Policy',
    author: 'Anjali Sharma',
    date: 'June 8, 2026',
    slug: 'up-pm-kusum-57-ppas',
    color: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    title: 'India Surpasses US in Solar Capacity Additions in 2026',
    excerpt: 'India has emerged as the world\'s second-largest solar growth market, surpassing the US with record-breaking additions.',
    category: 'News',
    author: 'Anjali Sharma',
    date: 'June 4, 2026',
    slug: 'india-solar-surpasses-us',
    color: 'text-solar-400 bg-solar-500/10 border-solar-500/20',
  },
  {
    title: 'Hopewind PCS 2.5MW: Next-Gen Liquid-Cooled System for Utility BESS',
    excerpt: 'The Hopewind PCS 2.5MW liquid-cooled power conversion system is redefining what\'s possible for large-scale battery storage in India.',
    category: 'Technology',
    author: 'Arjun Paridwal',
    date: 'June 1, 2026',
    slug: 'hopewind-pcs-2-5mw-bess',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
]

export default function BlogSection() {
  return (
    <section className="section-padding bg-midnight-800/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-4">
              <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Solar Updates</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
              Latest from Ornate Solar
            </h2>
            <p className="text-slate-400 max-w-md text-sm">
              Industry news, technology updates, and policy insights from India&apos;s solar sector.
            </p>
          </div>
          <Link href="/blog" className="solar-btn-outline self-start text-sm">
            View All Posts <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-dark rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-midnight-700 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">☀️</div>
                    <div className="text-xs text-slate-500">{post.category}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${post.color}`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-solar-300 transition-colors leading-snug flex-1">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} /> {post.date}
                  </span>
                  <span className="text-solar-400 group-hover:text-solar-300 flex items-center gap-1 font-medium">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
