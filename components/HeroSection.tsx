'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hometown-green">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-24 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-12 shadow-2xl border border-white/40"
            >
              <Image
                src="/HomeTownMarketingLogo.png"
                alt="HomeTown Marketing Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </motion.div>

            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium mb-8 leading-[0.9] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Marketing Is
              <span className="block text-white mt-2">
                Costing You
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto font-light"
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
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                href="/contact"
                className="btn-primary text-xl px-16 py-5 text-lg inline-block shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Your Free Marketing Audit
              </Link>
              
              <Link
                href="/services"
                className="btn-secondary text-xl px-12 py-5 border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                See How We Help
              </Link>
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white/12 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/16 transition-all duration-300 group shadow-2xl">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-200 font-medium">Local Focus</div>
                <div className="text-white/60 text-sm mt-2">Kansas City born & raised</div>
              </div>
              <div className="bg-white/12 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/16 transition-all duration-300 group shadow-2xl">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">24-48h</div>
                <div className="text-gray-200 font-medium">Turnaround</div>
                <div className="text-white/60 text-sm mt-2">Most projects completed</div>
              </div>
              <div className="bg-white/12 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/16 transition-all duration-300 group shadow-2xl">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">$0</div>
                <div className="text-gray-200 font-medium">Setup Fees</div>
                <div className="text-white/60 text-sm mt-2">Start immediately</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-1.5 h-4 bg-white rounded-full mt-3"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
