'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, PPC, social media marketing, and content marketing to boost your online presence.",
    icon: "📈",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy"]
  },
  {
    title: "Web Development",
    description: "Custom web development solutions using modern technologies to create fast, responsive, and user-friendly websites.",
    icon: "💻",
    features: ["Custom Development", "Responsive Design", "E-commerce Solutions", "CMS Integration"]
  },
  {
    title: "Growth Analytics",
    description: "Data-driven insights and analytics to track your growth, understand your audience, and optimize your marketing efforts.",
    icon: "📊",
    features: ["Performance Tracking", "User Analytics", "Conversion Optimization", "Reporting & Insights"]
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive brand strategy and identity design to help your business stand out in the competitive market.",
    icon: "🎯",
    features: ["Brand Identity", "Logo Design", "Marketing Materials", "Brand Guidelines"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}