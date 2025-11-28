import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import Impact from '@/components/landing/Impact'
import Team from '@/components/landing/Team'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}

