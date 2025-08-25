'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServicesCTA = () => {
  return (
    <section className="section-padding bg-hometown-green">
      <div className="container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Let's discuss how these services can help your Kansas City business grow. 
            Book a free consultation to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-hometown-green px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Book Free Consultation
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-hometown-green transition-all duration-300 text-lg"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesCTA
