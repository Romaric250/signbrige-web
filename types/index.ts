export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  preferences?: UserPreferences
}

export interface UserPreferences {
  language: 'asl' | 'bsl' | 'isl' | 'lsf' | 'gsl'
  avatarSpeed: number
  handedness: 'left' | 'right'
  skinTone: string
  accessibility: {
    highContrast: boolean
    textSize: 'small' | 'medium' | 'large'
    colorBlindMode: boolean
  }
}

export interface Sign {
  id: string
  word: string
  language: 'asl' | 'bsl' | 'isl' | 'lsf' | 'gsl'
  videoUrl: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  relatedSigns?: string[]
}

export interface LearningProgress {
  userId: string
  signsLearned: number
  practiceTime: number
  currentStreak: number
  longestStreak: number
  achievements: Achievement[]
  recentActivity: Activity[]
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt?: string
}

export interface Activity {
  id: string
  type: 'sign_learned' | 'practice_completed' | 'streak_milestone'
  title: string
  timestamp: string
}

export interface Translation {
  id: string
  input: string
  output: string
  language: string
  timestamp: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  github?: string
  twitter?: string
}

