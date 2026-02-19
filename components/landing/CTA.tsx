'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { COMPANY, WEB_APP_URL } from '@/lib/constants'

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Join {COMPANY.name} in building a more inclusive world. Start using {COMPANY.product} today — no interpreter needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 group">
                Open {COMPANY.product}
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/signup">
              <Button variant="ghost" size="lg" className="rounded-full px-10">
                Create Account
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
