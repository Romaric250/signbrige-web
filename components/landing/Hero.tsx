'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 pb-20 z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight"
          >
            Visual Communication
            <br />
            <span className="text-gray-600">Beyond Words</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the clarity of visual communication. Learn sign language through AI-powered translation.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/signup">
              <Button size="lg" className="rounded-full px-10">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="lg" className="rounded-full px-10">
                Sign In
              </Button>
            </Link>
          </motion.div>

          {/* QR Code for App Download */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="text-center mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Download the App</p>
                <p className="text-xs text-gray-500">Scan to download SignNova</p>
              </div>
              <div className="w-48 h-48 mx-auto bg-white rounded-lg p-4 border border-gray-100 relative">
                <Image 
                  src="https://g9kbtbs1bu.ufs.sh/f/woziFUfAWTFpQVraYWzGtjkfFV7Pw64WHpM3q9O5lxgJYKEh" 
                  alt="QR Code to download SignNova app"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
