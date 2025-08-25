'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutHero = () => {
  return (
    <section className="relative py-32 bg-white text-hometown-green overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Subtle gradient background for frosted glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-hometown-green/5 to-white/10 rounded-3xl blur-sm"></div>
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-hometown-green">
                    Hi, I'm Kyle
                    <span className="block text-hometown-green italic">Your KC Marketing Partner</span>
                  </h1>
                  
                  <p className="text-xl text-hometown-green mb-8 leading-relaxed">
                    I'm a Kansas City native who understands what it takes to grow a business in our community. 
                    With over 8 years of marketing experience, I've helped dozens of local businesses stop losing 
                    customers to competitors and start generating real results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                      Let's Talk
                    </Link>
                    <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                      See Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/kyle.remini-enhanced.jpg"
                alt="Kyle - HomeTown Marketing Founder"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-96 bg-hometown-green rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
