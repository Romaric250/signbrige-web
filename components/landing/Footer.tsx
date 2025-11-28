'use client'

import React from 'react'
import Link from 'next/link'
import { Linkedin, Github, Twitter, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">SN</span>
              </div>
              <span className="text-2xl font-bold text-white">SignNova</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Revolutionizing visual communication and breaking down barriers between hearing and Deaf communities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-primary transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition-colors text-sm">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors text-sm">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SignNova. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center gap-1">
            <Heart className="h-4 w-4 text-primary" />
            Built for Deaf and hearing communities
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
