'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LayoutDashboard, Sparkles } from 'lucide-react'
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
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-base">SN</span>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            SignNova
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {isLandingPage && (
            <>
              <a
                href="#features"
                className="relative px-6 py-3 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 transition-all group"
              >
                <span className="relative z-10">Features</span>
                <span className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
              </a>
              <a
                href="#team"
                className="relative px-6 py-3 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 transition-all group"
              >
                <span className="relative z-10">Team</span>
                <span className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
              </a>
            </>
          )}
          
          {/* Dashboard Link */}
          <Link
            href="/overview"
            className="relative px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 text-gray-700 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl p-6 animate-slide-down border border-gray-100">
          {isLandingPage && (
            <>
              <a
                href="#features"
                className="block py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#team"
                className="block py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
            </>
          )}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/overview"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-center hover:shadow-lg transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
