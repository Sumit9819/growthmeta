'use client'

import Image from 'next/image'

const partners = [
    { name: 'Google Ads', logo: '🎯' },
    { name: 'Meta', logo: '📘' },
    { name: 'HubSpot', logo: '🟠' },
    { name: 'Shopify', logo: '🛍️' },
    { name: 'Analytics', logo: '📊' },
]

export function TrustBarSection() {
    return (
        <section className="bg-gray-50 border-y border-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Trusted by</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                        >
                            <span className="text-4xl">{partner.logo}</span>
                            <span className="font-semibold text-gray-700">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
