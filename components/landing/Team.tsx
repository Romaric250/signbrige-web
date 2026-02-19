'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'
import { TEAM_MEMBERS } from '@/lib/constants'
import { COMPANY } from '@/lib/constants'

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            The People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the team behind {COMPANY.name}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse group of innovators united by a shared mission to eliminate communication barriers.
          </p>
        </motion.div>

        {/* Bento-style grid - creative staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={cn(
                "relative h-full p-6 rounded-2xl border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden",
                index % 2 === 0
                  ? "bg-gray-900 border-gray-800 hover:border-primary/30"
                  : "bg-gray-50/80 border-gray-100 hover:border-primary/20"
              )}>
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      size="xl"
                      fallback={member.name}
                      className="border-2 border-white shadow-md ring-2 ring-primary/10"
                    />
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold mb-1",
                    index % 2 === 0 ? "text-white" : "text-gray-900"
                  )}>{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                  <p className={cn(
                    "text-sm mb-4 leading-relaxed max-w-xs",
                    index % 2 === 0 ? "text-gray-400" : "text-gray-600"
                  )}>{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
                        index % 2 === 0 ? "bg-gray-700/80 text-gray-400" : "bg-gray-200/80 text-gray-600"
                      )}
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
