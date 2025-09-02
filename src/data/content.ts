export const siteConfig = {
  name: "GrowthMeta",
  description: "Digital Growth Agency - Web Development, Digital Marketing & Growth Analytics",
  url: "https://growthmeta.com",
  ogImage: "https://growthmeta.com/og.jpg",
  links: {
    twitter: "https://twitter.com/growthmeta",
    github: "https://github.com/growthmeta",
    linkedin: "https://linkedin.com/company/growthmeta",
  },
}

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const services = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDescription: "Comprehensive digital marketing strategies to boost your online presence",
    description: "Our digital marketing services include SEO, PPC, social media marketing, content marketing, and email marketing to help your business grow online.",
    longDescription: "We provide comprehensive digital marketing solutions that drive real results. Our team of experts uses data-driven strategies to increase your online visibility, generate quality leads, and maximize your ROI. From search engine optimization to social media marketing, we have the expertise to take your business to the next level.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    benefits: [
      "Increased online visibility",
      "Higher quality leads",
      "Better ROI on marketing spend",
      "Enhanced brand awareness",
      "Improved customer engagement"
    ],
    icon: "📈",
    image: "/images/services/digital-marketing.jpg",
    active: true,
    order: 1
  },
  {
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Custom web development solutions using modern technologies",
    description: "We create fast, responsive, and user-friendly websites using the latest technologies and best practices.",
    longDescription: "Our web development services focus on creating high-performance, scalable, and secure websites that deliver exceptional user experiences. We use modern frameworks like Next.js, React, and Node.js to build websites that not only look great but also perform exceptionally well.",
    features: [
      "Custom Web Development",
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
      "Security Implementation"
    ],
    benefits: [
      "Fast loading websites",
      "Mobile-friendly design",
      "Improved user experience",
      "Better search engine rankings",
      "Scalable architecture"
    ],
    icon: "💻",
    image: "/images/services/web-development.jpg",
    active: true,
    order: 2
  },
  {
    title: "Growth Analytics",
    slug: "growth-analytics",
    shortDescription: "Data-driven insights to track and optimize your growth",
    description: "Get detailed analytics and insights to understand your audience and optimize your marketing efforts for better results.",
    longDescription: "Our growth analytics services help you make data-driven decisions to accelerate your business growth. We implement comprehensive tracking systems, create custom dashboards, and provide actionable insights to optimize your marketing campaigns and improve your conversion rates.",
    features: [
      "Performance Tracking",
      "User Analytics",
      "Conversion Optimization",
      "Custom Dashboards",
      "A/B Testing",
      "Reporting & Insights"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved conversion rates",
      "Better understanding of customers",
      "Optimized marketing spend",
      "Increased ROI"
    ],
    icon: "📊",
    image: "/images/services/analytics.jpg",
    active: true,
    order: 3
  },
  {
    title: "Brand Strategy",
    slug: "brand-strategy",
    shortDescription: "Comprehensive brand strategy and identity design",
    description: "Develop a strong brand identity that resonates with your target audience and stands out in the market.",
    longDescription: "Our brand strategy services help you create a compelling brand that connects with your audience and drives business growth. We work with you to develop a comprehensive brand strategy, create visual identity, and establish brand guidelines that ensure consistency across all touchpoints.",
    features: [
      "Brand Identity Development",
      "Logo Design",
      "Brand Guidelines",
      "Marketing Materials",
      "Brand Positioning",
      "Visual Identity System"
    ],
    benefits: [
      "Strong brand recognition",
      "Consistent brand experience",
      "Differentiation from competitors",
      "Increased customer loyalty",
      "Higher perceived value"
    ],
    icon: "🎯",
    image: "/images/services/branding.jpg",
    active: true,
    order: 4
  }
]

export const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Startup Inc.",
    role: "CEO",
    content: "GrowthMeta transformed our digital presence completely. Their strategic approach to digital marketing helped us increase our leads by 300% in just 6 months.",
    avatar: "/images/testimonials/sarah.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "E-commerce Solutions",
    role: "Marketing Director",
    content: "The web development team at GrowthMeta built us a fantastic e-commerce platform that not only looks amazing but also converts really well. Highly recommended!",
    avatar: "/images/testimonials/michael.jpg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Local Business Co.",
    role: "Owner",
    content: "Working with GrowthMeta has been a game-changer for our business. Their data-driven approach to growth analytics helped us understand our customers better and optimize our marketing efforts.",
    avatar: "/images/testimonials/emily.jpg",
    rating: 5
  }
]

export const blogCategories = [
  "Digital Marketing",
  "Web Development",
  "Growth Analytics",
  "Brand Strategy",
  "SEO",
  "PPC",
  "Social Media",
  "Content Marketing",
  "E-commerce",
  "Technology"
]

export const contactInfo = {
  email: "hello@growthmeta.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business St, City, State 12345",
  businessHours: "Mon-Fri: 8am-6pm PST"
}