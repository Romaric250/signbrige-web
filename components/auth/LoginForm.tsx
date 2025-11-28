'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail, Lock } from 'lucide-react'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(email, password)
      router.push('/overview')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
          {error}
        </div>
      )}

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        icon={<Mail className="h-5 w-5" />}
        placeholder="Enter your email"
      />

      <div>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          icon={<Lock className="h-5 w-5" />}
          placeholder="Enter your password"
        />
        <Link
          href="/forgot-password"
          className="text-sm text-primary hover:underline mt-2 inline-block"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
        Sign In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  )
}

export default LoginForm

