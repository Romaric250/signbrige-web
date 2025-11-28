'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import { TEAM_MEMBERS } from '@/lib/constants'

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The minds behind SignNova.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    size="xl"
                    fallback={member.name}
                    className="border-2 border-gray-100"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{member.bio}</p>
                {member.linkedin && (
                  <div className="flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
