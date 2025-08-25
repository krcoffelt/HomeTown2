'use client'

import { motion } from 'framer-motion'
import { Instagram, Globe, Palette, TrendingUp, Mail } from 'lucide-react'

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
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-8 leading-tight">
            Stop Losing Customers to
            <span className="block text-gray-200">Better Marketing</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            These are the five core marketing services that Kansas City small businesses actually need to compete and grow. 
            No fluff, no complicated packages – just what works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-white/30 h-full">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-10 h-10 text-hometown-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-3xl mx-auto">
            <p className="text-xl text-white mb-8 font-medium">
              Ready to stop losing customers and start growing your business?
            </p>
            <a
              href="/services"
              className="btn-secondary text-lg px-10 py-4 inline-block hover:bg-white hover:text-hometown-green transition-all duration-300 transform hover:scale-105"
            >
              See Full Service Details
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
