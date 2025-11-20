'use client'

import { Target, Facebook, Settings, ShoppingBag, BarChart3 } from 'lucide-react'

const partners = [
    { name: 'Google Ads', Icon: Target, color: 'from-red-500 to-orange-500' },
    { name: 'Meta', Icon: Facebook, color: 'from-blue-600 to-blue-400' },
    { name: 'HubSpot', Icon: Settings, color: 'from-orange-500 to-red-500' },
    { name: 'Shopify', Icon: ShoppingBag, color: 'from-green-600 to-emerald-500' },
    { name: 'Analytics', Icon: BarChart3, color: 'from-purple-600 to-indigo-500' },
]

export function TrustBarSection() {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-primary-500/30 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Powered By Industry-Leading Platforms
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex flex-col items-center gap-3 hover:scale-110 transition-all cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partner.color} p-3 shadow-lg group-hover:shadow-2xl transition-all`}>
                                <partner.Icon className="w-full h-full text-white" strokeWidth={2} />
                            </div>
                            <span className="font-semibold text-white text-sm">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
