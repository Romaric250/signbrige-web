'use client'

import React, { useState } from 'react'
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import { SIGN_LANGUAGES } from '@/lib/constants'

const DictionaryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')

  // Mock data - replace with real data from API
  const signs = [
    { id: '1', word: 'Hello', language: 'asl', category: 'Greetings', createdAt: '2024-01-15' },
    { id: '2', word: 'Thank You', language: 'asl', category: 'Greetings', createdAt: '2024-01-14' },
    { id: '3', word: 'Please', language: 'asl', category: 'Greetings', createdAt: '2024-01-13' },
    { id: '4', word: 'Goodbye', language: 'bsl', category: 'Greetings', createdAt: '2024-01-12' },
    { id: '5', word: 'Water', language: 'asl', category: 'Common', createdAt: '2024-01-11' },
    { id: '6', word: 'Food', language: 'asl', category: 'Common', createdAt: '2024-01-10' },
  ]

  const filteredSigns = signs.filter(
    (sign) =>
      (selectedLanguage === 'all' || sign.language === selectedLanguage) &&
      sign.word.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Manage Signs</h1>
          <p className="text-gray-600">Add, edit, or remove sign language entries.</p>
        </div>
        <Button className="bg-primary text-white hover:bg-primary-dark">
          <Plus className="mr-2 h-4 w-4" />
          Add New Sign
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search signs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search className="h-5 w-5" />}
          />
        </div>
        <Select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          options={[
            { value: 'all', label: 'All Languages' },
            ...SIGN_LANGUAGES,
          ]}
          className="w-full sm:w-64"
        />
      </div>

      {/* Signs Table */}
      <Card>
        <CardContent className="pt-6 p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Word</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Language</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Created</th>
                  <th className="text-right py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSigns.map((sign) => (
                  <tr key={sign.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">{sign.word}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 uppercase">{sign.language}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{sign.category}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{sign.createdAt}</td>
                    <td className="py-4 px-6 text-sm text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredSigns.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No signs found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default DictionaryPage
