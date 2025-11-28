'use client'

import React from 'react'
import { BookOpen, Users, FileText, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const OverviewPage: React.FC = () => {
  const stats = [
    { icon: BookOpen, label: 'Total Signs', value: '1,247', href: '/dictionary' },
    { icon: Users, label: 'Total Users', value: '5,432', href: '/users' },
    { icon: FileText, label: 'Content Items', value: '156', href: '/content' },
    { icon: TrendingUp, label: 'Active Today', value: '342', href: '/analytics' },
  ]

  const quickActions = [
    { label: 'Add New Sign', href: '/dictionary?action=create', color: 'bg-primary text-white hover:bg-primary-dark' },
    { label: 'Manage Content', href: '/content', color: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50' },
    { label: 'View Analytics', href: '/analytics', color: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Manage your SignNova content and platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.label} href={stat.href}>
              <Card hover className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gray-100">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <p className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Button className={action.color}>
                {action.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-900">New sign added: "Hello"</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-900">Team member updated</p>
                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-900">Content published</p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewPage
