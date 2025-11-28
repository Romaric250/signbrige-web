'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

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

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
        isScrolled || !isLandingPage
          ? 'bg-white/90 backdrop-blur-xl shadow-lg rounded-full px-6'
          : 'bg-white/80 backdrop-blur-xl rounded-full px-6 shadow-sm'
      )}
    >
      <div className="flex items-center justify-between h-16 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-sm">SN</span>
          </div>
          <span className="text-lg font-bold text-gray-900">SignNova</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {isLandingPage && (
            <>
              <a
                href="#features"
                className="px-4 py-2 rounded-full text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                Features
              </a>
              <a
                href="#team"
                className="px-4 py-2 rounded-full text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                Team
              </a>
            </>
          )}
          <Link href="/login">
            <Button variant="ghost" size="sm" className="rounded-full">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-4 animate-slide-down">
          {isLandingPage && (
            <>
              <a
                href="#features"
                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#team"
                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
            </>
          )}
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-100">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full rounded-lg">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="sm" className="w-full rounded-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
