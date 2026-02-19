'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  FileText,
  GraduationCap,
  BookOpen,
} from 'lucide-react'
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
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
