'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/constants'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLandingPage = pathname === '/'

  const navLinks = [
    { href: '#problem', label: 'Challenge' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it Works' },
    { href: '#impact', label: 'Impact' },
    { href: '#team', label: 'Team' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isLandingPage
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-100/50'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-sm">SB</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {isLandingPage && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="whitespace-nowrap ml-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {isLandingPage && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 rounded-lg bg-primary text-white font-medium text-center mt-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
