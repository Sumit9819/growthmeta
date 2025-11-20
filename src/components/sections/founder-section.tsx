'use client'

import { User, Quote } from 'lucide-react'

export function FounderSection() {
    return (
        <section id="founder" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Photo/Visual */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                                <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center">
                                    <User className="w-32 h-32 text-gray-400" />
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50 -z-10"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <Quote className="w-12 h-12 text-primary-500 mb-6" />

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Why We Built <span className="gradient-text">GrowthMeta</span>
                            </h2>

                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    We built GrowthMeta to eliminate the inefficiencies of traditional agencies.
                                    Too many businesses waste money on guesswork and vanity metrics.
                                </p>
                                <p>
                                    Our mission is simple: use data and AI to drive <strong>real revenue growth</strong>,
                                    not just traffic or "engagement."
                                </p>
                                <p className="text-primary-600 font-semibold">
                                    Every campaign we run is designed to increase your bottom line — period.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <p className="font-bold text-gray-900 text-xl">Growth Meta Team</p>
                                <p className="text-gray-600">AI-Driven Digital Marketing Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
