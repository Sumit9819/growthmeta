'use client'

import { Card } from '@/components/ui/card'

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
]

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of the curve with the latest technologies and digital marketing trends.",
    icon: "💡"
  },
  {
    title: "Results-Driven",
    description: "Our strategies are focused on delivering measurable results and ROI for your business.",
    icon: "🎯"
  },
  {
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to achieve your goals.",
    icon: "🤝"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              About GrowthMeta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a digital growth agency dedicated to helping businesses thrive in the digital world. 
              Our team of experts combines creativity, technology, and data-driven strategies to deliver exceptional results.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance brand presence, and create meaningful connections with their target audience.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}