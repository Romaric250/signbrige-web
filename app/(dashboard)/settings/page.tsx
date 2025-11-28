'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const SettingsPage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage platform settings and configuration.</p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Site Name" defaultValue="SignNova" />
            <Input label="Site URL" defaultValue="https://signnova.com" />
            <Button className="bg-primary text-white hover:bg-primary-dark">Save Changes</Button>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="API Base URL" type="url" defaultValue="https://api.signnova.com" />
            <Input label="API Key" type="password" defaultValue="••••••••" />
            <Button className="bg-primary text-white hover:bg-primary-dark">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SettingsPage
