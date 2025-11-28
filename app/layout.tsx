import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SignNova - Learn Visual Communication',
  description: 'Revolutionary sign language translation platform helping hearing individuals learn visual communication the way Deaf communities naturally do.',
  keywords: ['sign language', 'ASL', 'translation', 'accessibility', 'Deaf community'],
  authors: [{ name: 'SignNova Team' }],
  openGraph: {
    title: 'SignNova - Learn Visual Communication',
    description: 'AI-powered sign language translation platform',
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

