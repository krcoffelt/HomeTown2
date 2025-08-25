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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Our Services
          </h1>
          
          <p className="text-xl text-hometown-green leading-relaxed mb-8 max-w-3xl mx-auto">
            Five core marketing services designed specifically for Kansas City small businesses. 
            Simple, effective, and results-driven.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
