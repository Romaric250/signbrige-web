'use client'

import React, { useState } from 'react'
import { User, Bell, Eye, Globe, Palette } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Switch from '@/components/ui/Switch'
import Button from '@/components/ui/Button'
import { SIGN_LANGUAGES } from '@/lib/constants'
import { useAuth } from '@/contexts/AuthContext'

const SettingsPage: React.FC = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    language: 'asl',
    avatarSpeed: 1,
    handedness: 'right',
    skinTone: '#FFDBAC',
    highContrast: false,
    textSize: 'medium',
    colorBlindMode: false,
    emailNotifications: true,
    pushNotifications: false,
  })

  const handleSave = () => {
    // TODO: Save settings to API
    alert('Settings saved!')
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and accessibility options.</p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <CardTitle>Profile Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Language & Translation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <CardTitle>Language & Translation</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select
            label="Preferred Sign Language"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            options={SIGN_LANGUAGES}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Signing Speed: {formData.avatarSpeed}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={formData.avatarSpeed}
              onChange={(e) => setFormData({ ...formData, avatarSpeed: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Handedness</label>
            <div className="flex gap-4">
              <button
                onClick={() => setFormData({ ...formData, handedness: 'left' })}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  formData.handedness === 'left'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                Left-Handed
              </button>
              <button
                onClick={() => setFormData({ ...formData, handedness: 'right' })}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  formData.handedness === 'right'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                Right-Handed
              </button>
            </div>
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Avatar Customization */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <CardTitle>Avatar Customization</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
            <div className="flex gap-2">
              {['#FFDBAC', '#F1C27D', '#E0AC69', '#C68642', '#8D5524'].map((color) => (
                <button
                  key={color}
                  onClick={() => setFormData({ ...formData, skinTone: color })}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    formData.skinTone === color ? 'border-primary scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Skin tone ${color}`}
                />
              ))}
            </div>
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <CardTitle>Accessibility</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Switch
            label="High Contrast Mode"
            description="Increase contrast for better visibility"
            checked={formData.highContrast}
            onChange={(e) => setFormData({ ...formData, highContrast: e.target.checked })}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
            <Select
              value={formData.textSize}
              onChange={(e) => setFormData({ ...formData, textSize: e.target.value })}
              options={[
                { value: 'small', label: 'Small' },
                { value: 'medium', label: 'Medium' },
                { value: 'large', label: 'Large' },
              ]}
            />
          </div>
          <Switch
            label="Color Blind Mode"
            description="Optimize colors for color vision deficiencies"
            checked={formData.colorBlindMode}
            onChange={(e) => setFormData({ ...formData, colorBlindMode: e.target.checked })}
          />
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Switch
            label="Email Notifications"
            description="Receive updates via email"
            checked={formData.emailNotifications}
            onChange={(e) => setFormData({ ...formData, emailNotifications: e.target.checked })}
          />
          <Switch
            label="Push Notifications"
            description="Receive browser notifications"
            checked={formData.pushNotifications}
            onChange={(e) => setFormData({ ...formData, pushNotifications: e.target.checked })}
          />
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPage

