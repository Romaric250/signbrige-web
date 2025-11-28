'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import { TEAM_MEMBERS } from '@/lib/constants'

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Minds Behind <span className="text-primary">SignNova</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse team of innovators, engineers, and advocates dedicated to bridging communication gaps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      size="xl"
                      fallback={member.name}
                      className="border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex items-center justify-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

