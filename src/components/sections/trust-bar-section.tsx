'use client'

const partners = [
    { name: 'Google Ads', icon: '🎯', color: 'text-red-600' },
    { name: 'Meta', icon: '📘', color: 'text-blue-600' },
    { name: 'HubSpot', icon: '🟠', color: 'text-orange-600' },
    { name: 'Shopify', icon: '🛍️', color: 'text-green-600' },
    { name: 'Analytics', icon: '📊', color: 'text-purple-600' },
]

export function TrustBarSection() {
    return (
        <section className="bg-gray-900 border-y-4 border-primary-500 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm font-bold text-gray-300 uppercase tracking-wider">Trusted Tools & Platforms</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer"
                        >
                            <span className="text-5xl">{partner.icon}</span>
                            <span className={`font-bold text-xl ${partner.color}`}>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
