'use client'

import React, { useState } from 'react'
import { Search, Bell, User } from 'lucide-react'
import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import { useAuth } from '@/contexts/AuthContext'

const TopBar: React.FC = () => {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Search signs, lessons, or translations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="h-5 w-5" />}
            className="w-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>

          {/* User Avatar */}
          <button
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="User menu"
          >
            <Avatar src={user?.avatar} fallback={user?.name || 'User'} size="md" />
            <span className="hidden md:block text-sm font-medium text-gray-900">
              {user?.name || 'User'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar

