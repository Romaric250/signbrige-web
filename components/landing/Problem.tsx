'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Briefcase, Users } from 'lucide-react'

const stats = [
  { value: '470,000+', label: 'People with hearing loss in Ghana' },
  { value: '1 in 67', label: 'Individuals experience hearing impairment' },
]

const affectedAreas = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Class participation and comprehension suffer without accessible communication tools.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Accurate diagnosis and treatment require clear patient-provider communication.',
  },
  {
    icon: Briefcase,
    title: 'Employment',
    description: 'Team collaboration and productivity are limited without real-time understanding.',
  },
  {
    icon: Users,
    title: 'Social Interaction',
    description: 'Daily communication and inclusion remain challenging without interpreters.',
  },
]

const Problem: React.FC = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-gray-50 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Communication Barrier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Communication between deaf and hearing individuals remains a major challenge in Ghana and many parts of the world — limiting independence and equal participation in society.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Affected areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {affectedAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 min-w-0"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Problem
