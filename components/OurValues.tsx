'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, TrendingUp } from 'lucide-react'

const OurValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community',
      description: 'I believe in the power of local business to strengthen our community. Every client I help is a neighbor, and every success story makes Kansas City stronger.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest pricing, transparent processes, and results you can count on. I build long-term relationships based on trust and mutual success.',
      color: 'from-hometown-green to-hometown-green-light'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'I\'m not satisfied with just maintaining your business – I\'m committed to helping it grow. Every strategy I create is designed for measurable, sustainable growth.',
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
            What I Stand For
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto">
            These aren't just words on a wall – they're the principles that guide every decision I make 
            and every strategy I create for my clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-hometown-green mb-4">
                  {value.title}
                </h3>
                
                <p className="text-hometown-green leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-hometown-green mb-6">
              Living My Values Every Day
            </h3>
            <p className="text-lg text-hometown-green max-w-3xl mx-auto mb-8">
              From the way I price my services to how I communicate with clients, these values 
              shape everything I do. They're not just promises – they're my commitment to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-hometown-green-light">
              <span className="px-4 py-2 bg-gray-100 rounded-full">Transparent Pricing</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full">Local Partnerships</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full">Results-Focused</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full">Community Support</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full">Honest Communication</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurValues
