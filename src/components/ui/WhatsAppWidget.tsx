'use client'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-midnight-800 border border-white/10 rounded-2xl p-4 w-72 shadow-2xl">
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Ornate Solar Support</p>
              <p className="text-xs text-green-400">● Online</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 mb-4">
            👋 Hey! Want great pricing on Solar Panels & Inverters? Chat with us on WhatsApp!
          </p>
          <a
            href="https://wa.me/911800202625?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions%20from%20Ornate%20Solar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={26} className="text-white" />}
      </button>
    </div>
  )
}
