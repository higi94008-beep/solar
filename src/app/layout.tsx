import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppWidget from '@/components/ui/WhatsAppWidget'

export const metadata: Metadata = {
  title: {
    default: 'Ornate Solar – India\'s Leading Solar Energy Company',
    template: '%s | Ornate Solar',
  },
  description: 'Ornate Solar is India\'s leading solar company specialising in designing and developing premium solar solutions — panels, inverters, energy storage, and integrated roofing. 25+ years of expertise, 1GW+ delivered.',
  keywords: ['solar panels India', 'solar inverter', 'PM KUSUM Yojana', 'BIPV', 'energy storage', 'Ornate Solar'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ornatesolar.com',
    siteName: 'Ornate Solar',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-midnight text-slate-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
