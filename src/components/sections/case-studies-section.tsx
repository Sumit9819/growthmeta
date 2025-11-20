'use client'

import { TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const caseStudies = [
    {
        client: 'E-Commerce Fashion Brand',
        result: '247% revenue increase',
        timeframe: '4 months',
        metric: '+247%',
        description: 'Transformed underperforming Google Ads into a profit machine with AI-driven targeting.',
        stats: [
            { label: 'Revenue', value: '+247%' },
            { label: 'ROAS', value: '5.2x' },
            { label: 'CPA', value: '-43%' },
        ],
    },
    {
        client: 'SaaS Platform',
        result: '3x qualified leads',
        timeframe: '90 days',
        metric: '3x',
        description: 'Rebuilt SEO strategy and content marketing to attract high-intent buyers.',
        stats: [
            { label: 'Organic Traffic', value: '+312%' },
            { label: 'Leads', value: '3x' },
            { label: 'Cost/Lead', value: '-65%' },
        ],
    },
]

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Real Results for <span className="gradient-text">Real Clients</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it — see the growth we've delivered.
                        </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary-400 hover:shadow-2xl transition-all"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                                        <p className="text-primary-600 font-semibold">{study.result} in {study.timeframe}</p>
                                    </div>
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-xl font-bold">
                                        {study.metric}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                    {study.stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                                            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Visual Chart */}
                                <div className="h-24 bg-gradient-to-t from-primary-100 to-transparent rounded-lg flex items-end justify-around px-2">
                                    {[30, 40, 50, 65, 80, 90, 100].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-8 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t transition-all hover:scale-105"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-lg font-semibold text-primary-600 hover:text-primary-700"
                        >
                            Get results like these
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
