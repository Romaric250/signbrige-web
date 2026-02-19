'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const VisionMission: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Who We Are
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gray-900 p-6 sm:p-8 md:p-10 border border-gray-800 min-w-0"
          >
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To build a society where communication barriers no longer limit access to education, healthcare, employment, or social participation — enabling hearing and non-hearing individuals to interact with dignity, equality, and mutual understanding.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm min-w-0"
          >
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              To reduce communication barriers between hearing and non-hearing individuals by developing an inclusive and accessible digital solution.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Through collaboration, user-centered design, and continuous innovation, Sign Bridge aims to empower communities, support institutions, and create lasting social impact rather than short-term profit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
