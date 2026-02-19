'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = 'Avatar', size = 'md', fallback, ...props }, ref) => {
    const [imgError, setImgError] = useState(false)
    const isExternal = src?.startsWith('http://') || src?.startsWith('https://')

    const sizes = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-16 w-16 text-lg',
      xl: 'h-24 w-24 text-xl',
    }

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    const showFallback = !src || imgError

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold overflow-hidden',
          sizes[size],
          className
        )}
        {...props}
      >
        {src && !showFallback ? (
          isExternal ? (
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              unoptimized
              onError={() => setImgError(true)}
            />
          )
        ) : fallback ? (
          <span>{getInitials(fallback)}</span>
        ) : (
          <User className="h-1/2 w-1/2 text-primary" />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export default Avatar

