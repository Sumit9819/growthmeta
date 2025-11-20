'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 mb-8 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-gray-700">AI-Powered Growth Strategies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            We Help{' '}
            <span className="gradient-text">E-Commerce & SaaS</span>
            {' '}Businesses Scale Revenue Using AI-Driven Marketing
          </h1>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop guessing with your budget. Get data-backed campaigns that convert cold traffic into loyal customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base px-8 group" asChild>
              <Link href="/contact">
                Get My Free Proposal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="#case-studies">
                View Success Stories
              </Link>
            </Button>
          </div>

          {/* Visual Element - Dashboard Mockup */}
          <div className="relative mt-16 animate-fade-in">
            <div className="rounded-xl border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-8">
              <div className="bg-white rounded-lg p-6 space-y-4">
                {/* Simulated Dashboard Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-600">↑ 247%</div>
                    <div className="text-sm text-gray-600 mt-1">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-lg">
                    <div className="text-3xl font-bold text-secondary-600">↓ 43%</div>
                    <div className="text-sm text-gray-600 mt-1">Ad Cost</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-600">5.2x</div>
                    <div className="text-sm text-gray-600 mt-1">ROAS</div>
                  </div>
                </div>

                {/* Simulated Growth Chart */}
                <div className="h-32 bg-gradient-to-t from-primary-100 to-transparent rounded-lg flex items-end justify-around px-4 pb-4">
                  {[40, 50, 45, 60, 75, 85, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}