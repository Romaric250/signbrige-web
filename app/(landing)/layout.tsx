import type { Metadata } from 'next'
import Navigation from '@/components/shared/Navigation'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Sign Bridge eliminates communication barriers between hearing and non-hearing individuals through AI-powered real-time sign language translation. Learn, translate, and connect inclusively.',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

