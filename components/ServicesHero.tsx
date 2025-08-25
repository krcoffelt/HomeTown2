'use client'

import { motion } from 'framer-motion'

const ServicesHero = () => {
  return (
    <section className="relative py-24 bg-white text-hometown-green overflow-hidden">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60">
            {/* Subtle gradient background for frosted glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-hometown-green/5 to-white/10 rounded-3xl blur-sm"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-hometown-green">
                Our Services
              </h1>
              
              <p className="text-xl text-hometown-green leading-relaxed mb-8 max-w-3xl mx-auto">
                Five core marketing services designed specifically for Kansas City small businesses. 
                Simple, effective, and results-driven.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
