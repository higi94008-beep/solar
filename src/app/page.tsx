import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProductsSection from '@/components/sections/ProductsSection'
import InnovationSection from '@/components/sections/InnovationSection'
import PMKusumBanner from '@/components/sections/PMKusumBanner'
import ClientsSection from '@/components/sections/ClientsSection'
import BlogSection from '@/components/sections/BlogSection'
import QuoteSection from '@/components/sections/QuoteSection'
import CertificationsSection from '@/components/sections/CertificationsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PMKusumBanner />
      <ProductsSection />
      <InnovationSection />
      <CertificationsSection />
      <ClientsSection />
      <BlogSection />
      <QuoteSection />
    </>
  )
}
