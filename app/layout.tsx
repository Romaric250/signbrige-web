import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { JsonLd } from '@/components/seo/JsonLd'
import { SEO, SITE_URL } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#38E078',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: 'Sign Bridge', url: SITE_URL }],
  creator: 'Sign Bridge',
  publisher: 'Sign Bridge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: SEO.openGraph.type,
    locale: SEO.openGraph.locale,
    siteName: SEO.openGraph.siteName,
    url: SITE_URL,
    images: [
      {
        url: COMPANY.logoUrl,
        width: 512,
        height: 512,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: SEO.twitter.card,
    title: SEO.title,
    description: SEO.description,
    creator: SEO.twitter.creator,
  },
  robots: SEO.robots,
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <JsonLd />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

