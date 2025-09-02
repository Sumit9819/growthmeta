'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard,
  FileText,
  Briefcase,
  Image,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const sidebarItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard
  },
  {
    name: 'Blog Posts',
    href: '/admin/blogs',
    icon: FileText
  },
  {
    name: 'Services',
    href: '/admin/services',
    icon: Briefcase
  },
  {
    name: 'Media Library',
    href: '/admin/media',
    icon: Image
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings
  }
]

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } lg:translate-x-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold">Growth Meta</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-gray-700"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}