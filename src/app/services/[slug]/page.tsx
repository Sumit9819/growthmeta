import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { services } from '@/data/content'
import { Metadata } from 'next'

const getService = async (slug: string) => {
  return services.find(service => service.slug === slug) || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found | GrowthMeta Services'
    }
  }

  return {
    title: `${service.title} | GrowthMeta Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back to Services */}
          <div className="mb-8">
            <Button variant="outline">
              <Link href="/services">← Back to Services</Link>
            </Button>
          </div>

          {/* Service Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.longDescription}
              </p>
              <Button size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Features & Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">{feature}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Professional implementation with best practices and ongoing support.
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl flex-shrink-0">→</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Measurable impact on your business growth and success.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Process */}
          <Card className="p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your current situation and identify opportunities" },
                { step: "02", title: "Strategy", description: "We develop a customized strategy tailored to your goals" },
                { step: "03", title: "Implementation", description: "We execute the strategy with precision and attention to detail" },
                { step: "04", title: "Optimization", description: "We continuously monitor and optimize for better results" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}