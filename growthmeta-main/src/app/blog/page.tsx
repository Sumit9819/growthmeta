import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | GrowthMeta - Digital Marketing Insights',
  description: 'Read our latest articles on digital marketing, web development, SEO, and growth strategies.',
}

// Mock blog posts - in a real app, this would come from a database
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Digital Marketing in 2024',
    slug: 'future-of-digital-marketing-2024',
    excerpt: 'Discover the latest trends and strategies that will shape digital marketing in 2024 and beyond.',
    category: 'Digital Marketing',
    publishedAt: new Date('2024-01-15'),
    readingTime: 8,
    featuredImage: '/images/blog/digital-marketing-2024.jpg'
  },
  {
    id: '2',
    title: 'Building High-Performance Web Applications with Next.js',
    slug: 'building-high-performance-web-apps-nextjs',
    excerpt: 'Learn how to create fast, scalable web applications using Next.js and modern web development practices.',
    category: 'Web Development',
    publishedAt: new Date('2024-01-10'),
    readingTime: 12,
    featuredImage: '/images/blog/nextjs-performance.jpg'
  },
  {
    id: '3',
    title: 'SEO Strategies That Actually Work in 2024',
    slug: 'seo-strategies-that-work-2024',
    excerpt: 'Effective SEO strategies to improve your website\'s search engine rankings and organic traffic.',
    category: 'SEO',
    publishedAt: new Date('2024-01-05'),
    readingTime: 10,
    featuredImage: '/images/blog/seo-strategies.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and strategies to help you grow your business in the digital world.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-6xl">📝</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.publishedAt.toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Button variant="outline">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-lg opacity-90 mb-6">
                Get the latest insights and strategies delivered to your inbox.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe to Newsletter
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}