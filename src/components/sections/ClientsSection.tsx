const clients = [
  'Adani Green', 'Tata Power', 'NTPC', 'BHEL', 'ReNew Power',
  'Azure Power', 'Hero Future Energies', 'Greenko', 'Torrent Power',
  'JSW Energy', 'Vikram Solar', 'Waaree', 'Goldi Solar', 'Emmvee',
  'Navitas Solar', 'Insolation', 'Premier Energies', 'Photon Energy',
]

export default function ClientsSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-solar-500/10 border border-solar-500/20 rounded-full mb-4">
            <span className="text-solar-400 text-xs font-semibold tracking-wide uppercase">Trusted By</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Esteemed Clients
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            India&apos;s largest solar developers and enterprises trust Ornate Solar for their most critical projects.
          </p>
        </div>

        {/* Ticker */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex ticker-track">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex-shrink-0 mx-3 px-6 py-3 bg-white/4 border border-white/8 rounded-xl text-slate-400 text-sm font-medium whitespace-nowrap hover:border-solar-500/30 hover:text-slate-200 transition-colors"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
