'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Brain, User, BookOpen } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const steps = [
  {
    number: 1,
    icon: Mic,
    title: 'Speak or Type',
    description: 'Input your message through voice or text. Our AI captures every nuance for accurate translation.',
  },
  {
    number: 2,
    icon: Brain,
    title: 'AI Analyzes Context',
    description: 'Advanced algorithms understand tone, emotion, and intent for authentic sign language representation.',
  },
  {
    number: 3,
    icon: User,
    title: 'Visual Avatar Signs',
    description: 'Watch lifelike avatars perform accurate, grammatically correct sign language in real time.',
  },
  {
    number: 4,
    icon: BookOpen,
    title: 'Learn & Understand',
    description: 'Build visual communication skills through practice and interactive learning during every interaction.',
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-white to-primary/5 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-primary">{COMPANY.product}</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, powerful process that transforms how you communicate — enabling both hearing and non-hearing individuals to interact naturally.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="relative rounded-2xl bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
