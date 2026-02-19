'use client'

import Hero from '@/components/landing/Hero'
import Problem from '@/components/landing/Problem'
import VisionMission from '@/components/landing/VisionMission'
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
      <Problem />
      <VisionMission />
      <Features />
      <HowItWorks />
      <Impact />
      <Team />
      <CTA />
      <Footer />
    </main>
  )
}
