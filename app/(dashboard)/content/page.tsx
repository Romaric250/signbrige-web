'use client'

import React, { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const ContentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'team'>('features')

  const features = [
    { id: 1, title: 'Accurate Speech Recognition', description: 'Real-time conversion even in noisy environments', order: 1 },
    { id: 2, title: 'Natural Language Understanding', description: 'AI analyzes tone, intent, and emotional context', order: 2 },
    { id: 3, title: 'Lifelike 3D Avatar', description: 'Smooth, grammatically correct signing', order: 3 },
  ]

  const teamMembers = [
    { id: 1, name: 'Alex Chen', role: 'CEO & Co-Founder', bio: 'Bridging communication gaps through technology.', order: 1 },
    { id: 2, name: 'Sarah Johnson', role: 'CTO & Co-Founder', bio: 'AI/ML expert in computer vision and NLP.', order: 2 },
  ]

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Manage Content</h1>
          <p className="text-gray-600">Edit landing page content and features.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'features'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'team'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Team Members
        </button>
      </div>

      {/* Content List */}
      {activeTab === 'features' && (
        <div className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button className="bg-primary text-white hover:bg-primary-dark">
              <Plus className="mr-2 h-4 w-4" />
              Add Feature
            </Button>
          </div>
          {features.map((feature) => (
            <Card key={feature.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">#{feature.order}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'team' && (
        <div className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button className="bg-primary text-white hover:bg-primary-dark">
              <Plus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </div>
          {teamMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">#{member.order}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <span className="text-sm text-gray-600">— {member.role}</span>
                    </div>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default ContentPage

