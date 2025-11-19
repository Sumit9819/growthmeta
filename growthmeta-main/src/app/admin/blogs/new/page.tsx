'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import TiptapEditor from '@/components/admin/tiptap-editor'
import toast from 'react-hot-toast'

export default function NewBlogPostPage() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handlePublish = async () => {
        if (!title.trim()) {
            toast.error('Please enter a title')
            return
        }

        if (!content.trim() || content === '<p></p>') {
            toast.error('Please enter some content')
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        try {
            console.log('Publishing blog post:', {
                title,
                content,
                status: 'published',
                publishedAt: new Date().toISOString()
            })

            await new Promise(resolve => setTimeout(resolve, 1000))

            toast.success('Blog post published successfully!')
            // In a real app, we would redirect to the blog list or edit page
            // router.push('/admin/blogs')
        } catch (error) {
            console.error('Error publishing post:', error)
            toast.error('Failed to publish post')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/admin">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">New Blog Post</h1>
                        <p className="text-sm text-gray-500">Create a new article for your blog</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <Button variant="outline" disabled={isSubmitting}>
                        Save Draft
                    </Button>
                    <Button onClick={handlePublish} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Publishing...
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Publish
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                    Post Title
                                </label>
                                <Input
                                    id="title"
                                    placeholder="Enter post title..."
                                    className="text-lg font-medium"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Content
                                </label>
                                <TiptapEditor content={content} onChange={setContent} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Publishing</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Status</span>
                                    <span className="font-medium text-gray-900">Draft</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Visibility</span>
                                    <span className="font-medium text-gray-900">Public</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
