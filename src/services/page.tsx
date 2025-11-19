import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/data/content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | GrowthMeta - Digital Growth Solutions',
  description: 'Explore our comprehensive digital services including web development, digital marketing, growth analytics, and brand strategy.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Benefits:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-3">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help accelerate your business growth with our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/blog">View Case Studies</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}