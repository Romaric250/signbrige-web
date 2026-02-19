import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sign Bridge — Eliminating Communication Barriers',
  description: 'Sign Bridge is a social-impact technology company focused on eliminating communication barriers between hearing and non-hearing individuals through accessible digital solutions. Powered by SignNova.',
  keywords: ['sign language', 'accessibility', 'Deaf community', 'Ghana', 'assistive technology', 'real-time translation', 'inclusive communication'],
  authors: [{ name: 'Sign Bridge' }],
  openGraph: {
    title: 'Sign Bridge — Eliminating Communication Barriers',
    description: 'Social-impact technology for inclusive communication between hearing and non-hearing individuals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

