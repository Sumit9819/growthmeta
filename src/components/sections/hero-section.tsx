'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b-4 border-primary-500">
      {/* Vibrant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-secondary-100"></div>
      <div className="absolute inset-0 bg-pattern"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-secondary-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered Growth Strategies</span>
            </div>
          </div>

          {/* Main Headline - VERY VISIBLE */}
          <h1 className="text-5xl lg:text-7xl font-black text-center text-gray-900 mb-6 leading-tight">
            Scale Your Revenue With
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              AI-Driven Marketing
            </span>
          </h1>

          {/* Sub-headline - HIGHLY VISIBLE */}
          <p className="text-xl lg:text-2xl text-center text-gray-700 font-medium mb-10 max-w-4xl mx-auto leading-relaxed">
            Stop wasting budget on guesswork. Get <span className="text-primary-600 font-bold">data-backed campaigns</span> that convert cold traffic into <span className="text-secondary-600 font-bold">loyal customers</span>.
          </p>

          {/* CTA Buttons - VERY PROMINENT */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-primary-500/50 transition-all group" asChild>
              <Link href="/contact">
                Get My Free Proposal
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all" asChild>
              <Link href="#case-studies">
                View Success Stories
              </Link>
            </Button>
          </div>

          {/* Stats Cards - HIGHLY VISIBLE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-primary-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl font-black bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                ↑ 247%
              </div>
              <div className="text-gray-700 font-semibold text-lg">Average Revenue Growth</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-secondary-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl font-black bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent mb-2">
                ↓ 43%
              </div>
              <div className="text-gray-700 font-semibold text-lg">Lower Ad Costs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-primary-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl font-black bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                5.2x
              </div>
              <div className="text-gray-700 font-semibold text-lg">Return on Ad Spend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}