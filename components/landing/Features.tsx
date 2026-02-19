'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  FileText,
  GraduationCap,
  BookOpen,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/constants'

const features = [
  {
    icon: Mic,
    title: 'Real-Time Speech-to-Text',
    description: 'Converts spoken language into live readable text during conversations, lectures, and meetings — ensuring deaf users can follow discussions accurately and in context.',
  },
  {
    icon: FileText,
    title: 'Collaborative Note-Taking',
    description: 'Capture, organize, and review important information from discussions. Notes can be saved, categorized, and shared across sessions for seamless collaboration.',
  },
  {
    icon: GraduationCap,
    title: 'Adaptive Sign Language Learning',
    description: 'Gradually teaches hearing users sign language by exposing them to signs during interaction, promoting long-term communication independence.',
  },
  {
    icon: BookOpen,
    title: 'Sign Dictionary & Avatar Translation',
    description: 'A searchable library of signs and phrases combined with a visual avatar that translates text into sign language representation for intuitive comprehension.',
  },
]

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Solution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Features of {COMPANY.product}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for inclusive, real-time communication — without a human interpreter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group p-6 sm:p-8 rounded-2xl border hover:shadow-xl transition-all duration-300",
                  index % 2 === 0
                    ? "bg-gray-900 border-gray-800 hover:border-primary/30"
                    : "bg-gray-50 border-gray-100 hover:border-primary/20 hover:bg-white"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300",
                  index % 2 === 0 ? "bg-primary/20" : "bg-primary/10"
                )}>
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className={cn(
                  "text-lg sm:text-xl font-semibold mb-3",
                  index % 2 === 0 ? "text-white" : "text-gray-900"
                )}>{feature.title}</h3>
                <p className={cn(
                  "text-sm sm:text-base leading-relaxed",
                  index % 2 === 0 ? "text-gray-400" : "text-gray-600"
                )}>{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
