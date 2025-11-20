'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        question: 'Do you work with small budgets?',
        answer: 'Yes! We work with businesses of all sizes. Our minimum ad spend starts at $2,000/month, but we can create custom packages based on your goals and budget.',
    },
    {
        question: 'How long until I see results?',
        answer: 'Most clients see meaningful improvements within 30-60 days. However, sustainable growth is a marathon, not a sprint. We focus on building long-term success, not quick wins that fade.',
    },
    {
        question: 'Are we locked into a long-term contract?',
        answer: 'No. We offer month-to-month agreements because we believe in earning your business every month. If you are not seeing results, you can cancel anytime.',
    },
    {
        question: 'What makes you different from other agencies?',
        answer: 'We use AI-driven data analysis to optimize every campaign in real-time. Plus, we focus on revenue and ROI — not vanity metrics like impressions or clicks. You only pay for results that matter.',
    },
    {
        question: 'Do you guarantee results?',
        answer: 'While we cannot legally guarantee specific numbers, we do guarantee our commitment: transparent reporting, data-driven decisions, and constant optimization. If something is not working, we pivot immediately.',
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know before getting started.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Still have questions? */}
                    <div className="mt-12 text-center p-8 bg-primary-50 rounded-xl border border-primary-200">
                        <p className="text-lg text-gray-700 mb-4">
                            Still have questions?
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                        >
                            Contact us directly →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
