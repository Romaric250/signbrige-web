'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const CTA: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Integrate with email service
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Thanks for signing up! We\'ll be in touch soon.')
    }, 1000)
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be among the first to experience the future of visual communication.
            Sign up for early access and exclusive updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<Mail className="h-5 w-5" />}
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              isLoading={isSubmitting}
              className="whitespace-nowrap"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Learn More
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

