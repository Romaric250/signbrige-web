'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  Brain,
  Users,
  Globe,
  Zap,
  WifiOff,
  Palette,
  Eye,
  GraduationCap,
  MessageSquare,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const features = [
  {
    icon: Mic,
    title: 'Accurate Speech Recognition',
    description: 'Real-time conversion even in noisy environments with advanced noise cancellation.',
  },
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'AI analyzes tone, intent, and emotional context for authentic communication.',
  },
  {
    icon: Users,
    title: 'Lifelike 3D Avatar',
    description: 'Smooth, grammatically correct signing with natural facial expressions and gestures.',
  },
  {
    icon: MessageSquare,
    title: 'Extensive Dictionary',
    description: 'Searchable signs with example videos, definitions, and usage contexts.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'ASL, BSL, ISL, LSF, GSL and more languages coming soon.',
  },
  {
    icon: Zap,
    title: 'Real-Time Mode',
    description: 'Live captioning and instant translation for seamless conversations.',
  },
  {
    icon: WifiOff,
    title: 'Offline Mode',
    description: 'Works without internet connection for reliable access anywhere.',
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Personalize avatar appearance, signing speed, and handedness preferences.',
  },
  {
    icon: Eye,
    title: 'Accessibility First',
    description: 'High-contrast UI, vibration feedback, and color-blind friendly design.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Tools',
    description: 'Interactive tutorials, practice modules, and personalized feedback system.',
  },
]

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="text-primary">Visual Communication</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to learn, practice, and master sign language translation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
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

export default Features

