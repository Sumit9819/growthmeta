import { ContactSection } from '@/components/sections/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | GrowthMeta - Digital Growth Agency',
  description: 'Get in touch with GrowthMeta for your digital marketing, web development, and growth analytics needs. Free consultation available.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  )
}