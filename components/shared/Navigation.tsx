'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LayoutDashboard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY, WEB_APP_URL } from '@/lib/constants'

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
    { href: '#problem', label: 'The Challenge' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#impact', label: 'Impact' },
    { href: '#team', label: 'Team' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
        isScrolled || !isLandingPage
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-100/50 rounded-full px-8'
          : 'bg-white/90 backdrop-blur-2xl shadow-xl border border-gray-100/50 rounded-full px-8'
      )}
      style={{ borderRadius: '9999px' }}
    >
      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
              <span className="text-white font-bold text-base">SB</span>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {isLandingPage && navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-5 py-3 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0" />
            </a>
          ))}

          {/* App CTA */}
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Open {COMPANY.product}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 text-gray-700 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 animate-slide-down"
        >
          {isLandingPage && (
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <div className="pt-4 border-t border-gray-100">
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-center hover:shadow-lg transition-all duration-200"
            >
              <span className="flex items-center justify-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Open {COMPANY.product}
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
