'use client'

import { motion } from 'framer-motion'

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-hometown-green">
              Hi, I'm Kyle
              <span className="block text-hometown-green-light">Your KC Marketing Partner</span>
            </h1>
            
            <p className="text-xl text-hometown-green leading-relaxed mb-8">
              I'm a Kansas City native who's passionate about helping local businesses succeed. 
              I started HomeTown because I saw too many great businesses struggling with marketing 
              when they should be focusing on what they do best.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-hometown-green">150+</div>
                <div className="text-sm text-hometown-green-light">KC Businesses Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hometown-green">5+</div>
                <div className="text-sm text-hometown-green-light">Years in KC</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hometown-green">100%</div>
                <div className="text-sm text-hometown-green-light">Local Focus</div>
              </div>
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Kansas City Skyline"
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
