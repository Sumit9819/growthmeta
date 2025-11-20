'use client'

import { Search, Rocket, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Audit & Strategy',
        description: 'We analyze your current marketing, find gaps, and create a custom growth plan.',
    },
    {
        number: '02',
        icon: Rocket,
        title: 'Execution',
        description: 'We launch optimized campaigns across the right channels for maximum impact.',
    },
    {
        number: '03',
        icon: TrendingUp,
        title: 'Optimization & Scale',
        description: 'We continuously improve performance and scale what works best.',
    },
]

export function ProcessSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                            How We <span className="gradient-text">Scale Your Business</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our proven 3-step process transforms underperforming marketing into a revenue engine.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Step Card */}
                                <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all text-center">
                                    {/* Number Badge */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-2xl font-bold mb-6">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 mb-4">
                                        <step.icon className="w-7 h-7 text-primary-600" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow (not on last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-20 -right-6 text-primary-400">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
