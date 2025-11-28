'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail, Lock, User } from 'lucide-react'

const SignupForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setIsLoading(true)

    try {
      await signup(email, password, name)
      router.push('/overview')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account. Please try again.')
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
        label="Full Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        icon={<User className="h-5 w-5" />}
        placeholder="Enter your full name"
      />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        icon={<Mail className="h-5 w-5" />}
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        icon={<Lock className="h-5 w-5" />}
        placeholder="Create a password (min. 8 characters)"
      />

      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        icon={<Lock className="h-5 w-5" />}
        placeholder="Confirm your password"
      />

      <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
        Create Account
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  )
}

export default SignupForm

