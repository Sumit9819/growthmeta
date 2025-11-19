'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Accelerate Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Digital Growth
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge digital marketing strategies, 
            web development, and growth optimization solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}