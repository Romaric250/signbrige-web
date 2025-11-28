'use client'

import React, { useState } from 'react'
import { Search, MoreVertical } from 'lucide-react'
import Input from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const UsersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', joined: '2024-01-15', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', joined: '2024-01-14', status: 'Active' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Admin', joined: '2024-01-10', status: 'Active' },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Manage Users</h1>
        <p className="text-gray-600">View and manage platform users.</p>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-md">
        <Input
          type="search"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search className="h-5 w-5" />}
        />
      </div>

      {/* Users Table */}
      <Card>
        <CardContent className="pt-6 p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Email</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Role</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Joined</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-right py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">{user.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{user.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{user.role}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{user.joined}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-right">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersPage

