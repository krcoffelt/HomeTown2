'use client'

import { motion } from 'framer-motion'

const TeamSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hometown-green mb-6">
            Meet Kyle Coffelt
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto">
            I'm a Kansas City native who's passionate about helping local businesses succeed. 
            Get to know the person behind your marketing success.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Kyle Coffelt"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-serif font-bold text-hometown-green mb-4">
                    Kyle Coffelt
                  </h3>
                  <p className="text-hometown-green-light font-medium mb-6">
                    Founder & Marketing Consultant
                  </p>
                  
                  <div className="space-y-4 text-hometown-green leading-relaxed mb-8">
                    <p>
                      I'm a Kansas City native with over 10 years of experience in digital marketing. 
                      I started HomeTown after seeing too many local businesses struggle with marketing 
                      when they should be focusing on what they do best.
                    </p>
                    <p>
                      I believe that every Kansas City business deserves to thrive, and I'm committed 
                      to providing the marketing support they need to grow and succeed.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-hometown-green mb-3">What I Specialize In:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-hometown-green/10 text-hometown-green text-sm rounded-full font-medium">
                        Strategy
                      </span>
                      <span className="px-3 py-1 bg-hometown-green/10 text-hometown-green text-sm rounded-full font-medium">
                        Local Marketing
                      </span>
                      <span className="px-3 py-1 bg-hometown-green/10 text-hometown-green text-sm rounded-full font-medium">
                        Business Growth
                      </span>
                      <span className="px-3 py-1 bg-hometown-green/10 text-hometown-green text-sm rounded-full font-full font-medium">
                        Social Media
                      </span>
                      <span className="px-3 py-1 bg-hometown-green/10 text-hometown-green text-sm rounded-full font-medium">
                        Branding
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-hometown-green mb-6">
              Why Working With Me Makes the Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-hometown-green mb-2">Local</div>
                <p className="text-hometown-green">I live and work in Kansas City, so I understand your market.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-hometown-green mb-2">Experienced</div>
                <p className="text-hometown-green">10+ years of marketing expertise across industries.</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-hometown-green mb-2">Accessible</div>
                <p className="text-hometown-green">Direct access to me, not junior staff or account managers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
