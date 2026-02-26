/**
 * SEO configuration and metadata
 * Set NEXT_PUBLIC_SITE_URL in .env for production (e.g. https://signbridge.com)
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://signbridge.com'

export const SEO = {
  title: 'Sign Bridge — Eliminating Communication Barriers',
  titleTemplate: '%s | Sign Bridge',
  description:
    'Sign Bridge is a social-impact technology company focused on eliminating communication barriers between hearing and non-hearing individuals through accessible digital solutions. AI-powered real-time sign language translation. Powered by SignNova.',
  keywords: [
    'sign language',
    'accessibility',
    'Deaf community',
    'Ghana',
    'assistive technology',
    'real-time translation',
    'inclusive communication',
    'ASL',
    'sign language translation',
    'Deaf accessibility',
  ],
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    siteName: 'Sign Bridge',
  },
  twitter: {
    card: 'summary_large_image' as const,
    creator: '@signbridge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
} as const
