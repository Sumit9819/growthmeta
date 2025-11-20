'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export function FinalCTASection() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        Ready to Grow?
                    </h2>

                    <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
                        Stop leaving money on the table. Let's build a growth strategy that actually works.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-10 py-6 group shadow-xl"
                            asChild
                        >
                            <Link href="/contact">
                                <Calendar className="mr-2 w-6 h-6" />
                                Book Your Strategy Call Now
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* Trust Elements */}
                    <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-sm opacity-80">Campaigns Launched</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">98%</div>
                            <div className="text-sm opacity-80">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">$50M+</div>
                            <div className="text-sm opacity-80">Revenue Generated</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
