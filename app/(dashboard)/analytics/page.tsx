'use client'

import React, { useState } from 'react'
import { TrendingUp, Users, Clock, BookOpen, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'
import Badge from '@/components/ui/Badge'

const AnalyticsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d')

  // Mock data - replace with real data from API
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: Users },
    { label: 'Active Sessions', value: '856', change: '+8%', icon: Clock },
    { label: 'Signs Learned', value: '5,678', change: '+23%', icon: BookOpen },
    { label: 'Translation Requests', value: '12,345', change: '+15%', icon: TrendingUp },
  ]

  const topSigns = [
    { sign: 'Hello', count: 1234, language: 'ASL' },
    { sign: 'Thank You', count: 987, language: 'ASL' },
    { sign: 'Please', count: 856, language: 'ASL' },
    { sign: 'Goodbye', count: 743, language: 'ASL' },
    { sign: 'Water', count: 621, language: 'ASL' },
  ]

  const learningProgress = [
    { level: 'Beginner', users: 456, percentage: 65 },
    { level: 'Intermediate', users: 234, percentage: 33 },
    { level: 'Advanced', users: 78, percentage: 11 },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track usage, engagement, and learning progress.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            options={[
              { value: '7d', label: 'Last 7 days' },
              { value: '30d', label: 'Last 30 days' },
              { value: '90d', label: 'Last 90 days' },
              { value: 'all', label: 'All time' },
            ]}
            className="w-48"
          />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} hover>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="success" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Signs */}
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSigns.map((item, index) => (
                <div key={item.sign} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.sign}</p>
                      <p className="text-sm text-gray-500">{item.language}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.count.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">requests</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {learningProgress.map((item) => (
                <div key={item.level}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-900">{item.level}</span>
                    <span className="text-gray-600">{item.users} users ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Statistics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Metric</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Value</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-700">Daily Active Users</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">856</td>
                  <td className="py-3 px-4 text-sm text-right text-primary">+8%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-700">Average Session Duration</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">18m 32s</td>
                  <td className="py-3 px-4 text-sm text-right text-primary">+5%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-700">Lessons Completed</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">2,345</td>
                  <td className="py-3 px-4 text-sm text-right text-primary">+12%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-700">Translation Accuracy</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">95.2%</td>
                  <td className="py-3 px-4 text-sm text-right text-primary">+2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnalyticsPage

