'use client'

import { Search, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Audit & Strategy',
        description: 'We analyze your current marketing, identify gaps, and create a custom growth roadmap.',
        gradient: 'from-purple-500 to-indigo-500',
        features: ['Competitor Analysis', 'Market Research', 'Custom Strategy'],
    },
    {
        number: '02',
        icon: Rocket,
        title: 'Launch & Execute',
        description: 'We deploy optimized campaigns across the right channels for maximum impact.',
        gradient: 'from-blue-500 to-cyan-500',
        features: ['Channel Setup', 'Content Creation', 'Campaign Launch'],
    },
    {
        number: '03',
        icon: TrendingUp,
        title: 'Optimize & Scale',
        description: 'We continuously test, improve, and scale what drives the best results.',
        gradient: 'from-green-500 to-emerald-500',
        features: ['A/B Testing', 'Performance Tracking', 'Scaling Strategy'],
    },
]

export function ProcessSection() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-semibold text-sm mb-4">
                            Our Process
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Scale Your Business</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Our proven 3-step framework transforms underperforming marketing into a revenue-generating machine
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Card */}
                                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-primary-300 shadow-xl hover:shadow-2xl transition-all h-full">
                                    {/* Number Badge */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white text-2xl font-black mb-6 shadow-lg`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 mb-4`}>
                                        <step.icon className={`w-7 h-7 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{step.description}</p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {step.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className={`w-5 h-5 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`} />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
