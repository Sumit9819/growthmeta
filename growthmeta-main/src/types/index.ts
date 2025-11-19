export interface User {
  id: string
  name?: string | null
  email: string
  image?: string | null
  role: 'ADMIN' | 'EDITOR' | 'VIEWER'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string | null
  featuredImage?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  keywords?: string | null
  categories: string[]
  tags: string[]
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED'
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
  authorId: string
  views: number
  readingTime?: number | null
  author: User
}

export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  icon?: string | null
  image?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  keywords?: string | null
  order: number
  active: boolean
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface MediaFile {
  id: string
  filename: string
  originalName: string
  url: string
  size: number
  width?: number | null
  height?: number | null
  mimeType: string
  altText?: string | null
  description?: string | null
  tags: string[]
  uploadedAt: Date
  updatedAt: Date
  uploadedById?: string | null
}