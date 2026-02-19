'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, WEB_APP_URL } from '@/lib/constants'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-32 pb-24 z-0">
      {/* Geometric background - crisp, professional */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/[0.03] to-primary/10" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(45,184,99,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(45,184,99,0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Accent gradient orb */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/80 shadow-sm text-gray-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Social-Impact Technology
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.08] tracking-tight"
          >
            Bridging the
            <br />
            <span className="text-primary">Communication Gap</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {COMPANY.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#features">
              <Button variant="ghost" size="lg" className="rounded-full px-10">
                Explore Features
              </Button>
            </a>
          </motion.div>

          {/* Product mention */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            Powered by <span className="font-semibold text-gray-700">{COMPANY.product}</span> — real-time sign language translation
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero
