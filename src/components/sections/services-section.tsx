'use client'

import { Search, Megaphone, Target, BarChart3, Mail, Share2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Rank higher on Google and drive organic traffic that converts.',
    color: 'primary',
  },
  {
    icon: Megaphone,
    title: 'PPC Advertising',
    description: 'Maximize ROI with data-driven Google Ads and paid campaigns.',
    color: 'secondary',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Build engaged communities and turn followers into customers.',
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Make smarter decisions with AI-powered data analysis.',
    color: 'secondary',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer integrated digital solutions to help you grow and scale your revenue.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-${service.color}-500 to-${service.color === 'primary' ? 'secondary' : 'primary'}-500 mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary-600 hover:text-primary-700"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}