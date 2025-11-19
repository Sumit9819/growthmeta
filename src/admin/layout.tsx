'use client'

import { ReactNode } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import AdminSidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'
import { usePathname } from 'next/navigation'

interface AdminLayoutProps {
  children: ReactNode
}

function AdminLayoutContent({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'
  
  // Show sidebar and header only if user is authenticated and not on login page
  const showAdminUI = session && !isLoginPage

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showAdminUI && <AdminSidebar />}
      <div className={showAdminUI ? "lg:pl-64 flex-1 flex flex-col" : "flex-1 flex flex-col"}>
        {showAdminUI && <AdminHeader />}
        <main className={showAdminUI ? "p-6 flex-1" : "flex-1"}>
          {children}
        </main>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  )
}