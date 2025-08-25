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
            Stop Losing Customers to Better Marketing
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto">
            These are the five core marketing services that Kansas City small businesses actually need to compete and grow. 
            No fluff, no complicated packages – just what works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-hometown-green mb-4">
                  {service.title}
                </h3>
                
                <p className="text-hometown-green leading-relaxed">
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
          className="text-center mt-16"
        >
          <p className="text-lg text-hometown-green mb-8">
            Ready to stop losing customers and start growing your business?
          </p>
          <a
            href="/services"
            className="btn-secondary text-lg px-8 py-3"
          >
            See Full Service Details
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
