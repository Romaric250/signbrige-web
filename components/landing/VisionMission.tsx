'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const VisionMission: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10 border border-primary/20"
          >
            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To build a society where communication barriers no longer limit access to education, healthcare, employment, or social participation — enabling hearing and non-hearing individuals to interact with dignity, equality, and mutual understanding.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 border border-gray-100 shadow-sm"
          >
            <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
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
