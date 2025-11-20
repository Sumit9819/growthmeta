'use client'

import { Search, Megaphone, Share2, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings and drive organic traffic that converts into revenue.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Megaphone,
    title: 'PPC Advertising',
    description: 'Maximize ROI with laser-targeted ads that turn clicks into customers.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and transform followers into brand advocates.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Make smarter decisions with AI-powered insights and real-time tracking.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
              What We Do
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              End-to-end digital marketing solutions that drive measurable growth
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>

                <Card className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-300 shadow-xl hover:shadow-2xl transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary-600 font-bold group-hover:gap-4 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              View All Services
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}