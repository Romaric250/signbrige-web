import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value || request.headers.get('authorization')

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password']
  const isPublicRoute = publicRoutes.some((route) => request.nextUrl.pathname === route)

  // Dashboard routes require authentication
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/overview') ||
    request.nextUrl.pathname.startsWith('/dictionary') ||
    request.nextUrl.pathname.startsWith('/learning') ||
    request.nextUrl.pathname.startsWith('/translate') ||
    request.nextUrl.pathname.startsWith('/settings') ||
    request.nextUrl.pathname.startsWith('/analytics')

  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect authenticated users away from auth pages
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && token) {
    return NextResponse.redirect(new URL('/overview', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)',
  ],
}

