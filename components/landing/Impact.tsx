'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Building2, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Classrooms',
    description: 'Empowering educators to create inclusive learning environments where every student can communicate.',
  },
  {
    icon: Building2,
    title: 'Workplaces',
    description: 'Breaking down communication barriers in professional settings and fostering inclusive collaboration.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Enabling clear communication between healthcare providers and Deaf patients for better care.',
  },
  {
    icon: Users,
    title: 'Public Spaces',
    description: 'Making public services, events, and spaces accessible to everyone, everywhere.',
  },
]

const stats = [
  { value: '500K+', label: 'Users Worldwide' },
  { value: '50+', label: 'Countries' },
  { value: '1M+', label: 'Translations Daily' },
  { value: '95%', label: 'Accuracy Rate' },
]

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making a <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SignNova is transforming how people communicate across different sectors and communities.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Impact

