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
    <section className="section-padding relative overflow-hidden">
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
            <span className="block text-gray-200">KC Businesses</span>
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
                <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/12 transition-all duration-300 h-full">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
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
            <span className="block text-gray-200">Real Businesses</span>
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
                <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/12 transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/30 transition-colors duration-300">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-200 text-sm">
                      {testimonial.business}
                    </p>
                  </div>
                  
                  <blockquote className="text-lg text-gray-200 leading-relaxed italic group-hover:text-white/90 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsStats
