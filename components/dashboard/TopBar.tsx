'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import { useAuth } from '@/contexts/AuthContext'

const TopBar: React.FC = () => {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Search content, signs, users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="h-5 w-5" />}
            className="w-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-6">
          {/* User Avatar */}
          <div className="flex items-center gap-3">
            <Avatar src={user?.avatar} fallback={user?.name || 'Admin'} size="md" />
            <span className="hidden md:block text-sm font-medium text-gray-900">
              {user?.name || 'Admin'}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
