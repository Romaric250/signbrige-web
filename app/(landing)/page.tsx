import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Team from '@/components/landing/Team'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
