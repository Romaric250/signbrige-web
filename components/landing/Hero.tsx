'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Mic, Users, Globe, Hand, Zap, Heart } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, WEB_APP_URL, HERO_BACKGROUND_IMAGE } from '@/lib/constants'

const highlights = [
  { icon: Mic, text: 'Real-time speech-to-text' },
  { icon: Users, text: 'Inclusive communication' },
  { icon: Globe, text: 'Multi-language support' },
]

const valueProps = [
  { icon: Hand, title: 'No interpreter needed', desc: 'Communicate directly, anytime.' },
  { icon: Zap, title: 'Instant translation', desc: 'Speech to sign in real time.' },
  { icon: Heart, title: 'Built for inclusion', desc: 'Education, healthcare, work.' },
]

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24 z-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Main content - aligns with logo via same container */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Social-Impact Technology
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
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
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              {COMPANY.tagline}
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 sm:gap-6 mb-8"
            >
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{item.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-8 sm:gap-12 mb-10"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">470K+</div>
                <div className="text-sm text-gray-400">People with hearing loss in Ghana</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">1 in 67</div>
                <div className="text-sm text-gray-400">Experience hearing impairment</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-10 group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#features">
                <Button variant="ghost" size="lg" className="rounded-full px-10 text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                  Explore Features
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-sm text-gray-400"
            >
              Powered by <span className="font-semibold text-gray-300">{COMPANY.product}</span>
            </motion.p>
          </div>

          {/* Right: Creative content - uses the space */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm"
            >
              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-1">Why Sign Bridge?</h3>
                <p className="text-sm text-gray-400 mb-6">Making every conversation accessible.</p>
                <div className="space-y-4">
                  {valueProps.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{item.title}</div>
                          <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500">
                    Real-time translation for classrooms, healthcare, and everyday conversations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
