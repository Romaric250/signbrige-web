'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Building2, Heart, Users } from 'lucide-react'

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Classrooms',
    description: 'Empowering educators to create inclusive learning environments where every student can participate and comprehend.',
  },
  {
    icon: Building2,
    title: 'Workplaces',
    description: 'Breaking down communication barriers in professional settings and fostering inclusive collaboration.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Enabling clear communication between healthcare providers and Deaf patients for better diagnosis and care.',
  },
  {
    icon: Users,
    title: 'Public Spaces',
    description: 'Making public services, events, and spaces accessible to everyone, everywhere.',
  },
]

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making a <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sign Bridge is transforming how people communicate across education, healthcare, employment, and social participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Impact
