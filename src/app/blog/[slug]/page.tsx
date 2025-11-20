import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'

// Mock blog post data - in a real app, this would come from a database
const getBlogPost = async (slug: string) => {
  // Simulate fetching from database
  const posts = {
    'future-of-digital-marketing-2024': {
      id: '1',
      title: 'The Future of Digital Marketing in 2024',
      slug: 'future-of-digital-marketing-2024',
      content: `
        <h2>Introduction</h2>
        <p>Digital marketing continues to evolve at a rapid pace. As we move through 2024, businesses need to stay ahead of the curve to remain competitive in the digital landscape.</p>
        
        <h2>Key Trends to Watch</h2>
        <h3>1. AI-Powered Personalization</h3>
        <p>Artificial intelligence is revolutionizing how businesses interact with customers. From personalized content recommendations to dynamic pricing strategies, AI is making marketing more effective and efficient.</p>
        
        <h3>2. Voice Search Optimization</h3>
        <p>With the increasing popularity of voice assistants, optimizing for voice search has become crucial for businesses looking to capture this growing market segment.</p>
        
        <h3>3. Video-First Content Strategy</h3>
        <p>Video content continues to dominate social media platforms and search results. Businesses that prioritize video content creation will have a significant advantage.</p>
        
        <h2>Conclusion</h2>
        <p>The future of digital marketing is exciting and full of opportunities. By staying informed about these trends and adapting your strategies accordingly, your business can thrive in the digital age.</p>
      `,
      excerpt: 'Discover the latest trends and strategies that will shape digital marketing in 2024 and beyond.',
      category: 'Digital Marketing',
      publishedAt: new Date('2024-01-15'),
      readingTime: 8,
      metaTitle: 'The Future of Digital Marketing in 2024 | GrowthMeta Blog',
      metaDescription: 'Discover the latest digital marketing trends for 2024 including AI personalization, voice search optimization, and video-first strategies.',
      keywords: 'digital marketing, 2024 trends, AI marketing, voice search, video marketing'
    }
  }

  return posts[slug as keyof typeof posts] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | GrowthMeta Blog'
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="outline">
              <Link href="/blog">← Back to Blog</Link>
            </Button>
          </div>

          {/* Article Header */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">
                {post.readingTime} min read
              </span>
              <span className="text-gray-500 text-sm">
                {post.publishedAt.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600">
              {post.excerpt}
            </p>
          </Card>

          {/* Article Content */}
          <Card className="p-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>

          {/* Related Posts / CTA */}
          <div className="mt-12">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Implement These Strategies?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let our expert team help you implement these digital marketing strategies for your business.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}