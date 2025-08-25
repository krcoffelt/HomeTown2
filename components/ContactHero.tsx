'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="relative py-32 bg-hometown-green text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-hometown-green/80" />
      </div>
      
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Let's Talk About Your Business
            <span className="block text-white/90">Over Coffee</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're ready to get started or just want to learn more about how I can help 
            your Kansas City business grow, I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm text-white/80">Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">30 Min</div>
              <div className="text-sm text-white/80">Initial Meeting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">No Pressure</div>
              <div className="text-sm text-white/80">Sales Pitch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
