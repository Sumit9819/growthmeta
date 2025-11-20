'use client'

import { TrendingDown, DollarSign, Users, ArrowRight } from 'lucide-react'

const painPoints = [
    {
        icon: TrendingDown,
        question: 'Traffic but no sales?',
        description: 'Your website gets visitors, but they leave without buying.',
    },
    {
        icon: DollarSign,
        question: 'Rising ad costs?',
        description: 'You\'re spending more on ads but seeing diminishing returns.',
    },
    {
        icon: Users,
        question: 'Inconsistent leads?',
        description: 'Some months are great, others are a struggle. No predictability.',
    },
]

export function ProblemSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
                        Is Your Current Strategy{' '}
                        <span className="text-red-600">Failing You?</span>
                    </h2>

                    <p className="text-xl text-center text-gray-600 mb-16">
                        You're not alone. Most businesses struggle with these challenges:
                    </p>

                    {/* Pain Points Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {painPoints.map((point, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                                    <point.icon className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{point.question}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* The Pivot */}
                    <div className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 border border-primary-200">
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            There's a better way.
                        </p>
                        <p className="text-xl text-gray-700 mb-6">
                            Enter <span className="gradient-text font-bold">GrowthMeta</span> —
                            where data drives decisions, and campaigns deliver results.
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
                            <span>See how we do it</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
