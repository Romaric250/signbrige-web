import type { Metadata } from 'next'
import Link from 'next/link'
import SignupForm from '@/components/auth/SignupForm'

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Create your Sign Bridge account and start using AI-powered sign language translation, learning tools, and inclusive communication features.',
  robots: { index: false, follow: true },
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-primary/5 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SN</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">SignNova</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Start your journey to master visual communication</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

