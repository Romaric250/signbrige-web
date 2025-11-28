'use client'

import React, { useState } from 'react'
import { Play, CheckCircle, Lock, Award, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Progress from '@/components/ui/Progress'
import Button from '@/components/ui/Button'

const LearningPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ]

  const modules = [
    {
      id: 1,
      title: 'Greetings & Introductions',
      category: 'beginner',
      progress: 65,
      completed: false,
      lessons: 12,
      duration: '2h 30m',
    },
    {
      id: 2,
      title: 'Common Phrases',
      category: 'beginner',
      progress: 30,
      completed: false,
      lessons: 10,
      duration: '2h',
    },
    {
      id: 3,
      title: 'Numbers & Counting',
      category: 'beginner',
      progress: 0,
      completed: false,
      lessons: 8,
      duration: '1h 30m',
    },
    {
      id: 4,
      title: 'Advanced Conversations',
      category: 'intermediate',
      progress: 0,
      completed: false,
      lessons: 15,
      duration: '4h',
      locked: true,
    },
  ]

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first lesson', unlocked: true },
    { id: 2, name: 'Week Warrior', description: 'Maintain a 7-day streak', unlocked: true },
    { id: 3, name: 'Quick Learner', description: 'Learn 50 signs', unlocked: false },
    { id: 4, name: 'Master Communicator', description: 'Complete all beginner modules', unlocked: false },
  ]

  const dailyChallenge = {
    title: 'Practice 5 Signs Today',
    progress: 3,
    target: 5,
    reward: '50 XP',
  }

  const filteredModules =
    selectedCategory === 'all'
      ? modules
      : modules.filter((m) => m.category === selectedCategory)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Hub</h1>
        <p className="text-gray-600">Master sign language through interactive lessons and practice.</p>
      </div>

      {/* Daily Challenge */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Daily Challenge</h2>
          </div>
          <p className="text-gray-700 mb-4">{dailyChallenge.title}</p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Progress value={(dailyChallenge.progress / dailyChallenge.target) * 100} size="lg" />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{dailyChallenge.progress} / {dailyChallenge.target}</span>
                <span className="font-semibold text-primary">{dailyChallenge.reward}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Learning Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <Card key={module.id} hover={!module.locked}>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle>{module.title}</CardTitle>
                {module.locked ? (
                  <Lock className="h-5 w-5 text-gray-400" />
                ) : module.completed ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : null}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{module.lessons} lessons</span>
                <span>•</span>
                <span>{module.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Progress value={module.progress} />
                <p className="text-sm text-gray-600 mt-2">{module.progress}% complete</p>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                disabled={module.locked}
              >
                {module.locked ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Locked
                  </>
                ) : module.completed ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Review
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Continue Learning
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={achievement.unlocked ? 'border-primary' : 'opacity-60'}>
              <CardContent className="pt-6 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  achievement.unlocked ? 'bg-primary/10' : 'bg-gray-100'
                }`}>
                  <Award className={`h-8 w-8 ${achievement.unlocked ? 'text-primary' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{achievement.name}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LearningPage

