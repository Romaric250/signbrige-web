'use client'

import React from 'react'
import { Users, Eye, TrendingUp, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const AnalyticsPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Total Users', value: '5,432', change: '+12%' },
    { icon: Eye, label: 'Page Views', value: '24,567', change: '+8%' },
    { icon: BookOpen, label: 'Signs Viewed', value: '18,234', change: '+15%' },
    { icon: TrendingUp, label: 'Growth Rate', value: '23%', change: '+5%' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Platform usage and engagement metrics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gray-100">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-600">{stat.change}</span>
                </div>
                <p className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart placeholder</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Performance</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsPage
