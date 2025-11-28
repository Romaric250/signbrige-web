'use client'

import React, { useState } from 'react'
import { Search, Filter, Grid, List, Heart } from 'lucide-react'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { SIGN_LANGUAGES } from '@/lib/constants'

const DictionaryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('asl')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  // Mock data - replace with real data from API
  const signs = [
    { id: '1', word: 'Hello', language: 'asl', category: 'Greetings', difficulty: 'beginner' },
    { id: '2', word: 'Thank You', language: 'asl', category: 'Greetings', difficulty: 'beginner' },
    { id: '3', word: 'Please', language: 'asl', category: 'Greetings', difficulty: 'beginner' },
    { id: '4', word: 'Goodbye', language: 'asl', category: 'Greetings', difficulty: 'beginner' },
    { id: '5', word: 'Water', language: 'asl', category: 'Common', difficulty: 'beginner' },
    { id: '6', word: 'Food', language: 'asl', category: 'Common', difficulty: 'beginner' },
  ]

  const filteredSigns = signs.filter(
    (sign) =>
      sign.language === selectedLanguage &&
      sign.word.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Language Dictionary</h1>
        <p className="text-gray-600">Search and learn signs from our extensive collection.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
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
          options={SIGN_LANGUAGES}
          className="w-full sm:w-64"
        />
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-5 w-5" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setViewMode('list')}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredSigns.map((sign) => (
          <Card key={sign.id} hover>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{sign.word}</h3>
                  <Badge variant="info" className="text-xs">
                    {sign.language.toUpperCase()}
                  </Badge>
                </div>
                <button
                  onClick={() => toggleFavorite(sign.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    favorites.has(sign.id)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-400 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle favorite"
                >
                  <Heart className={`h-5 w-5 ${favorites.has(sign.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Video Preview</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{sign.category}</span>
                <span>•</span>
                <Badge variant={sign.difficulty === 'beginner' ? 'success' : 'warning'}>
                  {sign.difficulty}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSigns.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No signs found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}

export default DictionaryPage

