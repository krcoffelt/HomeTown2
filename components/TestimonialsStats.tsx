'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const TestimonialsStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '85%',
      label: 'of KC small businesses struggle with digital marketing',
      color: 'text-white'
    },
    {
      icon: Clock,
      number: '12hrs',
      label: 'average time spent weekly on marketing tasks',
      color: 'text-white'
    },
    {
      icon: DollarSign,
      number: '$0',
      label: 'wasted budget on ineffective marketing strategies',
      color: 'text-white'
    },
    {
      icon: Users,
      number: '3x',
      label: 'faster growth with professional marketing support',
      color: 'text-white'
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
    <section className="section-padding bg-hometown-green relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-36 h-36 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-8 leading-tight">
            The Marketing Reality for
            <span className="block text-white italic">KC Businesses</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-20 leading-relaxed">
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
                className="text-center group"
              >
                <motion.div
                  key={stat.label}
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                    <div className="text-white/90 font-medium">{stat.label}</div>
                    <div className="text-white/60 text-sm mt-2">{stat.color}</div>
                  </div>
                </motion.div>
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
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8 leading-tight">
            Real Results for
            <span className="block text-white italic">Real Businesses</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  key={testimonial.author}
                  className="relative group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-white">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-white/70 text-sm">{testimonial.business}</div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsStats
