'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const TestimonialsStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '85%',
      label: 'of KC small businesses struggle with digital marketing',
      color: 'text-hometown-green'
    },
    {
      icon: Clock,
      number: '12hrs',
      label: 'average time spent weekly on marketing tasks',
      color: 'text-hometown-green'
    },
    {
      icon: DollarSign,
      number: '$0',
      label: 'wasted budget on ineffective marketing strategies',
      color: 'text-hometown-green'
    },
    {
      icon: Users,
      number: '3x',
      label: 'faster growth with professional marketing support',
      color: 'text-hometown-green'
    }
  ]

  const testimonials = [
    {
      quote: "We were losing customers to competitors with better social media. HomeTown turned that around completely.",
      author: "Sarah Johnson",
      business: "KC Coffee Co.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      quote: "Our website wasn't converting visitors into customers. HomeTown built us a site that actually works.",
      author: "Mike Chen",
      business: "Downtown Auto Repair",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hometown-green mb-6">
            The Marketing Reality for KC Businesses
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto mb-16">
            These aren't just statistics – they're the daily challenges facing Kansas City small businesses. 
            Every day you wait is another day your competitors are winning your customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-hometown-green mb-2">
                  {stat.number}
                </div>
                <p className="text-hometown-green text-sm leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-hometown-green mb-6">
            Real Results from Real KC Businesses
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <blockquote className="text-hometown-green text-lg leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-hometown-green">
                      {testimonial.author}
                    </div>
                    <div className="text-hometown-green-light text-sm">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-hometown-green rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stop Losing Customers Today
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your competitors are winning your customers. 
              Let's talk about how to turn this around.
            </p>
            <a
              href="/contact"
              className="bg-white text-hometown-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Get Your Free Marketing Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsStats
