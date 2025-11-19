import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  
  if (!session?.user?.email) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
    },
  })

  return user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/admin/login')
  }
  
  return user
}

export async function requireAdmin() {
  const user = await getCurrentUser()
  
  if (!user || user.role !== 'ADMIN') {
    redirect('/admin/login')
  }
  
  return user
}

export function hasPermission(userRole: string, requiredRole: string) {
  const roleHierarchy = {
    VIEWER: 1,
    EDITOR: 2,
    ADMIN: 3,
  }
  
  return roleHierarchy[userRole as keyof typeof roleHierarchy] >= 
         roleHierarchy[requiredRole as keyof typeof roleHierarchy]
}