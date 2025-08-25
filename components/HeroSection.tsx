'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-20 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <span className="text-white font-bold text-2xl">H</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-hometown-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Marketing Is Costing You
            <span className="block text-hometown-green-light">
              More Than You Think
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-hometown-green leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            While you're busy running your Kansas City business, your competitors are winning customers 
            with better marketing. Stop losing opportunities and start growing.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="btn-primary text-lg px-12 py-4 text-lg inline-block"
            >
              Get Your Free Marketing Audit
            </Link>
            
            <Link
              href="/services"
              className="btn-secondary text-lg px-8 py-4"
            >
              See How We Help
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="bg-gray-100 rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-hometown-green">100%</div>
              <div className="text-sm text-hometown-green-light">Local Focus</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-hometown-green">4</div>
              <div className="text-sm text-hometown-green-light">Core Services</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-hometown-green">Free</div>
              <div className="text-sm text-hometown-green-light">Initial Audit</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-hometown-green rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-hometown-green rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
