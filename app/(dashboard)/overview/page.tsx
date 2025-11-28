'use client'

import React from 'react'
import { BookOpen, Users, FileText, TrendingUp, Plus, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const OverviewPage: React.FC = () => {
  const stats = [
    { 
      icon: BookOpen, 
      label: 'Total Signs', 
      value: '1,247', 
      change: '+12 this week',
      href: '/dictionary',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      icon: Users, 
      label: 'Total Users', 
      value: '5,432', 
      change: '+234 this month',
      href: '/users',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    { 
      icon: FileText, 
      label: 'Content Items', 
      value: '156', 
      change: '+8 this week',
      href: '/content',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: TrendingUp, 
      label: 'Active Today', 
      value: '342', 
      change: '+15% from yesterday',
      href: '/analytics',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
  ]

  const recentActivity = [
    { 
      id: 1, 
      type: 'sign', 
      title: 'New sign added: "Hello"', 
      description: 'Added to ASL dictionary',
      time: '2 hours ago',
      icon: BookOpen,
      iconColor: 'text-blue-600'
    },
    { 
      id: 2, 
      type: 'team', 
      title: 'Team member updated', 
      description: 'Updated bio for Sarah Johnson',
      time: '5 hours ago',
      icon: Users,
      iconColor: 'text-purple-600'
    },
    { 
      id: 3, 
      type: 'content', 
      title: 'Content published', 
      description: 'Published new feature card',
      time: '1 day ago',
      icon: FileText,
      iconColor: 'text-green-600'
    },
    { 
      id: 4, 
      type: 'sign', 
      title: 'Sign edited: "Thank You"', 
      description: 'Updated video and description',
      time: '2 days ago',
      icon: BookOpen,
      iconColor: 'text-blue-600'
    },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.label} href={stat.href}>
              <Card hover className="h-full border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <Card className="lg:col-span-2 border border-gray-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/dictionary?action=create">
                <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Plus className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Add New Sign</p>
                      <p className="text-xs text-gray-500">Create a new sign entry</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
              <Link href="/content">
                <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Manage Content</p>
                      <p className="text-xs text-gray-500">Edit landing page</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
              <Link href="/users">
                <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Manage Users</p>
                      <p className="text-xs text-gray-500">View all users</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
              <Link href="/analytics">
                <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">View Analytics</p>
                      <p className="text-xs text-gray-500">Platform insights</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="border border-gray-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">API Status</span>
                </div>
                <span className="text-sm font-medium text-gray-900">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">Database</span>
                </div>
                <span className="text-sm font-medium text-gray-900">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">Storage</span>
                </div>
                <span className="text-sm font-medium text-gray-900">68% Used</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border border-gray-200">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            <Link href="/analytics" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className={`p-2 rounded-lg bg-gray-50 ${activity.iconColor}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverviewPage
