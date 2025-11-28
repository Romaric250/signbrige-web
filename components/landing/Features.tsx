'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  Brain,
  Users,
  Globe,
  Zap,
  GraduationCap,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Speech Recognition',
    description: 'Real-time conversion with advanced accuracy.',
  },
  {
    icon: Brain,
    title: 'AI Understanding',
    description: 'Captures tone, intent, and emotional context.',
  },
  {
    icon: Users,
    title: '3D Avatar',
    description: 'Lifelike signing with natural expressions.',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'ASL, BSL, ISL, LSF, GSL and more.',
  },
  {
    icon: Zap,
    title: 'Real-Time',
    description: 'Instant translation for seamless conversations.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Tools',
    description: 'Interactive tutorials and practice modules.',
  },
]

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to master visual communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
