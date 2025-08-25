'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Zap, DollarSign } from 'lucide-react'

const HeroSection = () => {
  const socialProofData = [
    {
      value: "100%",
      label: "Local Focus",
      description: "Kansas City Born & Raised",
      icon: Home
    },
    {
      value: "24-48h",
      label: "Turnaround",
      description: "Quick Response Time",
      icon: Zap
    },
    {
      value: "$0",
      label: "Setup Fees",
      description: "No Hidden Costs",
      icon: DollarSign
    }
  ]

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
            className="text-center mb-12"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium mb-8 leading-[0.9] text-white text-balance">
              Your Marketing Is
              <span className="block text-white italic mt-2">
                Costing You
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed text-balance">
              Stop losing customers to competitors with better marketing. 
              Get consistent, engaging content that builds your audience and drives results.
            </p>
          </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="btn-primary text-xl px-16 py-5"
              >
                Get Your Free Marketing Audit
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="btn-secondary text-xl px-12 py-5"
              >
                See How We Help
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {socialProofData.map((item, index) => (
              <motion.div
                key={item.value}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Card content */}
                <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30 shadow-2xl transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-3xl">
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-3 flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <item.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  {/* Value */}
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {item.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-white/90 text-sm font-medium mb-2">
                    {item.label}
                  </div>
                  
                  {/* Description */}
                  <motion.div
                    className="text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.description}
                  </motion.div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </div>
              </motion.div>
            ))}
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
        <motion.div 
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5 cursor-pointer group hover:border-white/50 hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const nextSection = document.querySelector('.section-padding')
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <motion.div
            className="w-1.5 h-4 bg-white rounded-full mt-3 group-hover:bg-white/80 transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Scroll hint text */}
        <motion.p
          className="text-white/60 text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}

export default HeroSection
