import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /admin, /admin/blog)
  const pathname = request.nextUrl.pathname

  // Check if the path is for admin routes (except login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Get the token from the request
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    })

    // If no token, redirect to admin login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Check if user has admin role
    if (token.role !== 'ADMIN' && token.role !== 'EDITOR') {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('error', 'AccessDenied')
      return NextResponse.redirect(loginUrl)
    }
  }

  // If user is logged in and tries to access login page, redirect to admin dashboard
  if (pathname === '/admin/login') {
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    })

    if (token) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/admin/:path*',
  ]
}