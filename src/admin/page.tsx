'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Briefcase, 
  Image, 
  Users, 
  TrendingUp,
  Calendar,
  Activity,
  Plus,
  Eye,
  BarChart3,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

interface DashboardStats {
  totalBlogs: number
  publishedBlogs: number
  totalServices: number
  activeServices: number
  totalMedia: number
  totalPageViews: number
  recentActivity: ActivityLog[]
  growth: {
    blogs: { current: number; previous: number; percentage: number }
    pageViews: { current: number; previous: number; percentage: number }
  }
}

interface ActivityLog {
  id: string
  action: string
  entityType: string
  details: string
  createdAt: string
  user: {
    name: string
    email: string
  }
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock data for now since API endpoints aren't created yet
    const mockStats: DashboardStats = {
      totalBlogs: 12,
      publishedBlogs: 8,
      totalServices: 6,
      activeServices: 6,
      totalMedia: 24,
      totalPageViews: 1250,
      recentActivity: [
        {
          id: '1',
          action: 'CREATE_BLOG',
          entityType: 'BlogPost',
          details: 'Created new blog post "SEO Best Practices"',
          createdAt: new Date().toISOString(),
          user: { name: 'Admin', email: 'admin@growthmeta.com' }
        },
        {
          id: '2',
          action: 'UPDATE_SERVICE',
          entityType: 'Service',
          details: 'Updated PPC Management service',
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          user: { name: 'Admin', email: 'admin@growthmeta.com' }
        }
      ],
      growth: {
        blogs: { current: 12, previous: 8, percentage: 50 },
        pageViews: { current: 1250, previous: 980, percentage: 27.6 }
      }
    }

    setTimeout(() => {
      setStats(mockStats)
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your site.</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/admin/blogs/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalBlogs || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.publishedBlogs || 0} published • 
              <span className={(stats?.growth?.blogs?.percentage ?? 0) >= 0 ? "text-green-600" : "text-red-600"}>
                +{stats?.growth?.blogs?.percentage ?? 0}%
              </span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalServices || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.activeServices || 0} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Files</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalMedia || 0}</div>
            <p className="text-xs text-muted-foreground">
              Total uploads
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalPageViews.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">
                +{stats?.growth?.pageViews?.percentage ?? 0}%
              </span> this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest updates and changes to your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recentActivity && stats.recentActivity.length > 0 ? (
                stats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="flex-shrink-0">
                      <Activity className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.details}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No recent activity</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}