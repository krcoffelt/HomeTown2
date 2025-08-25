'use client'

import { motion } from 'framer-motion'
import { Instagram, Globe, Palette, TrendingUp, Mail, CheckCircle } from 'lucide-react'

const ServiceDetails = () => {
  const services = [
    {
      id: 'social-media',
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Complete social media management including content creation, posting, engagement, and analytics.',
      features: [
        'Content creation and curation',
        'Strategic posting schedule',
        'Community engagement management',
        'Performance analytics and reporting',
        'Platform-specific optimization'
      ]
    },
    {
      id: 'website-seo',
      icon: Globe,
      title: 'Website Design & SEO',
      description: 'Professional website design with search engine optimization to drive traffic and convert visitors.',
      features: [
        'Custom website design and development',
        'Mobile-first responsive design',
        'SEO optimization and setup',
        'Contact forms and lead generation',
        'Analytics and performance tracking'
      ]
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Design & Branding',
      description: 'Complete brand identity development including logos, colors, typography, and visual guidelines.',
      features: [
        'Logo design and brand identity',
        'Color palette and typography',
        'Business card and collateral design',
        'Brand guidelines and standards',
        'Visual asset library creation'
      ]
    },
    {
      id: 'advertising',
      icon: TrendingUp,
      title: 'Advertising',
      description: 'Targeted advertising campaigns that get your message in front of the right people.',
      features: [
        'Google Ads and PPC campaigns',
        'Social media advertising',
        'Display and retargeting ads',
        'Campaign optimization',
        'ROI tracking and reporting'
      ]
    },
    {
      id: 'email-marketing',
      icon: Mail,
      title: 'Email Marketing',
      description: 'Email campaigns that nurture relationships and convert subscribers into customers.',
      features: [
        'Welcome and onboarding sequences',
        'Promotional campaign design',
        'Automated email workflows',
        'A/B testing and optimization',
        'Revenue tracking and analytics'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hometown-green mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto">
            Each service is designed to solve specific marketing challenges facing Kansas City small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Subtle gradient background for frosted glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-hometown-green/5 to-white/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-hometown-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-hometown-green mb-2">
                      {service.title}
                    </h3>
                    <p className="text-hometown-green leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-hometown-green mb-3">What's Included:</h4>
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-hometown-green flex-shrink-0" />
                      <span className="text-hometown-green">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
