'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Mic, Users, Globe, Hand, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, WEB_APP_URL, HERO_BACKGROUND_IMAGE } from '@/lib/constants'

const highlights = [
  { icon: Mic, text: 'Real-time speech-to-text' },
  { icon: Users, text: 'Inclusive communication' },
  { icon: Globe, text: 'Multi-language support' },
]

const signLabels = ['Hello', 'Good', 'Help', 'Yes', 'Thank you']

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24 z-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt="Diverse group collaborating - Sign Bridge enables inclusive communication"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      {/* Dark overlay - subtle, lets image show through */}
      <div className="absolute inset-0 bg-[#0b1a23]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a23]/90 via-[#0b1a23]/70 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Main content - aligns with logo */}
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

            {/* Headline - "Breaking barriers" style */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
            >
              Breaking barriers
              <br />
              <span className="text-gray-400 font-semibold">in </span>
              <span className="text-primary">communication</span>
            </motion.h1>

            {/* Subheadline - with AI-powered */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              Eliminating communication barriers between hearing and non-hearing individuals through AI-powered real-time sign language translation.
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

            {/* Stats - 3 stats including translation latency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mb-10"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">470K+</div>
                <div className="text-sm text-gray-400">People with hearing loss in Ghana</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">1 in 67</div>
                <div className="text-sm text-gray-400">Experience hearing impairment</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">&lt;1s</div>
                <div className="text-sm text-gray-400">Translation latency</div>
              </div>
            </motion.div>

            {/* CTA - Zap icon on Explore Features */}
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
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium"
              >
                <Zap className="h-5 w-5 text-primary" />
                Explore Features
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-sm text-gray-500"
            >
              Powered by <span className="font-semibold text-gray-400">{COMPANY.product}</span>
            </motion.p>
          </div>

          {/* Right: Interactive visual - circular graphic + LIVE TRANSLATION */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[520px] aspect-square mx-auto lg:mx-0"
            >
              {/* Concentric rings + hand center */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-primary/30"
                      style={{
                        width: `${i * 18}%`,
                        height: `${i * 18}%`,
                      }}
                    />
                  ))}
                </div>
                {/* Dots */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                    const angle = (i / 12) * Math.PI * 2
                    const r = 38
                    const x = 50 + Math.cos(angle) * r
                    const y = 50 + Math.sin(angle) * r
                    return (
                      <div
                        key={i}
                        className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/60"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )
                  })}
                </div>
                {/* Hand icon center */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/5 border-2 border-primary/40 flex items-center justify-center">
                  <Hand className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-white" strokeWidth={1.5} />
                </div>
                {/* Floating sign labels */}
                {signLabels.map((label, i) => {
                  const positions = [
                    { top: '12%', left: '50%', transform: 'translateX(-50%)' },
                    { top: '28%', right: '8%' },
                    { bottom: '38%', left: '2%' },
                    { bottom: '28%', right: '8%' },
                    { top: '55%', left: '2%' },
                  ]
                  const pos = positions[i] ?? positions[0]
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="absolute px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-primary/40 text-white text-sm sm:text-base font-medium backdrop-blur-sm"
                      style={pos}
                    >
                      {label}
                    </motion.div>
                  )
                })}
              </div>

              {/* LIVE TRANSLATION box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-2 right-0 sm:right-4 lg:right-0 w-full min-w-[260px] max-w-[320px] sm:min-w-[300px] sm:max-w-[360px] rounded-xl bg-slate-900/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
              >
                <div className="px-5 py-3 bg-primary/20 border-b border-white/10">
                  <span className="text-xs sm:text-sm font-bold text-primary tracking-wider">LIVE TRANSLATION</span>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-white text-sm sm:text-base">Good morning, how are you?</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-400">Translating to</span>
                    <span className="text-xs sm:text-sm font-medium text-primary">GSL</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
