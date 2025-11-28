'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Brain, User, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const steps = [
  {
    number: 1,
    icon: Mic,
    title: 'Speak or Type',
    description: 'Input your message through voice or text. Our AI captures every nuance.',
  },
  {
    number: 2,
    icon: Brain,
    title: 'AI Analyzes Context',
    description: 'Advanced algorithms understand tone, emotion, and intent for authentic translation.',
  },
  {
    number: 3,
    icon: User,
    title: '3D Avatar Signs',
    description: 'Watch lifelike avatars perform accurate, grammatically correct sign language.',
  },
  {
    number: 4,
    icon: BookOpen,
    title: 'Learn & Understand',
    description: 'Build visual communication skills through practice and interactive learning.',
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-primary">SignNova</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, powerful process that transforms how you communicate visually.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="text-center h-full">
                    <CardContent className="pt-6">
                      <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                        <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{step.number}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
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

