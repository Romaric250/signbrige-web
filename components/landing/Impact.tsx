'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Building2, Heart, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

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
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Reach
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making a <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sign Bridge is transforming how people communicate across education, healthcare, employment, and social participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "rounded-2xl p-5 sm:p-6 border shadow-sm hover:shadow-lg transition-all duration-300 h-full min-w-0",
                  index % 2 === 0
                    ? "bg-gray-900 border-gray-800 hover:border-primary/30"
                    : "bg-white border-gray-100 hover:border-primary/20"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  index % 2 === 0 ? "bg-primary/20" : "bg-primary/10"
                )}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  index % 2 === 0 ? "text-white" : "text-gray-900"
                )}>{area.title}</h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  index % 2 === 0 ? "text-gray-400" : "text-gray-600"
                )}>{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Impact
