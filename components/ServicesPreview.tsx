'use client'

import { motion } from 'framer-motion'
import { Instagram, Globe, Palette, TrendingUp, Mail } from 'lucide-react'
import Link from 'next/link'

const ServicesPreview = () => {
  const services = [
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Stop losing customers to competitors with better social media. Get consistent, engaging content that builds your audience.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: Globe,
      title: 'Website Design & SEO',
      description: 'Convert visitors into customers with a website that works. Fast, professional sites optimized for search engines.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: Palette,
      title: 'Design & Branding',
      description: 'Stand out in Kansas City with a memorable brand. Professional logos, colors, and visuals that build trust.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: TrendingUp,
      title: 'Advertising',
      description: 'Get your message in front of the right people. Targeted ads that drive traffic and generate leads.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Turn your email list into a revenue-generating machine. Automated campaigns that nurture relationships and drive sales.',
      color: 'from-hometown-green to-hometown-green-light'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-hometown-green mb-8 leading-tight">
            Stop Losing Customers to
            <span className="block text-hometown-green italic">Better Marketing</span>
          </h2>
          <p className="text-xl md:text-2xl text-hometown-green max-w-4xl mx-auto leading-relaxed">
            Five core marketing services designed specifically for Kansas City small businesses. 
            Simple, effective, and results-driven.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.01, y: -2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:bg-white/90 h-full">
                <div className="text-center">
                  <div className="bg-hometown-green rounded-2xl p-4 flex items-center justify-center mx-auto mb-6 w-16 h-16">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-medium text-hometown-green mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-hometown-green leading-relaxed text-base group-hover:text-hometown-green-dark/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="relative text-center py-20 px-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-20 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-hometown-green mb-8 leading-tight">
              Ready to Stop Losing
              <span className="block text-hometown-green italic">Customers to Competitors?</span>
            </h3>
            <p className="text-xl text-hometown-green mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can transform your marketing and start generating real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-10 py-5">
                Get Started Today
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-10 py-5">
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
