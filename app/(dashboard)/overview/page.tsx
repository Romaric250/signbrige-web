'use client'

import React from 'react'
import { TrendingUp, BookOpen, Clock, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Progress from '@/components/ui/Progress'
import Badge from '@/components/ui/Badge'
import { useAuth } from '@/contexts/AuthContext'

const OverviewPage: React.FC = () => {
  const { user } = useAuth()

  // Mock data - replace with real data from API
  const stats = [
    { icon: TrendingUp, label: 'Learning Streak', value: '12 days', color: 'text-primary' },
    { icon: BookOpen, label: 'Signs Learned', value: '247', color: 'text-blue-600' },
    { icon: Clock, label: 'Practice Time', value: '18h 32m', color: 'text-purple-600' },
    { icon: Award, label: 'Achievements', value: '8', color: 'text-yellow-600' },
  ]

  const recentActivity = [
    { id: 1, type: 'sign_learned', title: 'Learned "Hello" in ASL', time: '2 hours ago' },
    { id: 2, type: 'practice_completed', title: 'Completed Beginner Module 3', time: '1 day ago' },
    { id: 3, type: 'streak_milestone', title: '7-day streak achieved!', time: '2 days ago' },
  ]

  const recommendedLessons = [
    { id: 1, title: 'Greetings & Introductions', progress: 65, difficulty: 'Beginner' },
    { id: 2, title: 'Common Phrases', progress: 30, difficulty: 'Beginner' },
    { id: 3, title: 'Numbers & Counting', progress: 0, difficulty: 'Beginner' },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name || 'there'}! 👋
        </h1>
        <p className="text-gray-600">Continue your journey to master visual communication.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} hover>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Overall Progress</span>
                <span className="font-semibold text-gray-900">42%</span>
              </div>
              <Progress value={42} max={100} size="lg" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Lessons</h3>
              <div className="space-y-4">
                {recommendedLessons.map((lesson) => (
                  <div key={lesson.id}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{lesson.title}</span>
                      <Badge variant={lesson.difficulty === 'Beginner' ? 'success' : 'info'}>
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <Progress value={lesson.progress} max={100} />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OverviewPage

