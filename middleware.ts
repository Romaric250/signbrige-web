import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value || request.headers.get('authorization')

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password']
  const isPublicRoute = publicRoutes.some((route) => request.nextUrl.pathname === route)

  // Dashboard routes - AUTH DISABLED FOR TESTING
  // All dashboard routes are now public and don't require authentication
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/overview') ||
    request.nextUrl.pathname.startsWith('/dictionary') ||
    request.nextUrl.pathname.startsWith('/learning') ||
    request.nextUrl.pathname.startsWith('/translate') ||
    request.nextUrl.pathname.startsWith('/settings') ||
    request.nextUrl.pathname.startsWith('/analytics')

  // AUTH CHECK COMPLETELY DISABLED FOR TESTING
  // Dashboard routes are accessible without authentication
  // To re-enable auth, uncomment the following:
  /*
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  */

  // Redirect authenticated users away from auth pages (optional)
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && token) {
    return NextResponse.redirect(new URL('/overview', request.url))
  }

  // Allow all requests to proceed
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)',
  ],
}

