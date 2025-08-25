'use client'

import { motion } from 'framer-motion'

const OurStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-hometown-green mb-8">
              Why I Started HomeTown
            </h2>
            <div className="space-y-6 text-lg text-hometown-green leading-relaxed">
              <p>
                Five years ago, I noticed something troubling in Kansas City's business community. 
                Small business owners were working harder than ever, but struggling to get their 
                message out there. They had the passion, the products, and the drive, but they 
                were missing the marketing expertise to grow.
              </p>
              <p>
                I saw business owners spending countless hours trying to figure out social media, 
                burning through budgets on ads that didn't work, and feeling overwhelmed by the 
                digital marketing landscape. They needed help, but the big agencies were too expensive, 
                and the DIY approach was costing them time they couldn't afford to lose.
              </p>
              <p>
                That's when I decided to build HomeTown – a marketing service that understands 
                the unique challenges of running a small business in Kansas City, because I'm 
                living it too. I'm not just a consultant; I'm your partner in growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-hometown-green">
              <h3 className="text-2xl font-serif font-semibold text-hometown-green mb-4">
                My Mission
              </h3>
              <p className="text-hometown-green leading-relaxed">
                To empower Kansas City small businesses with professional marketing solutions that 
                drive real growth, without the big agency price tag or the overwhelming complexity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-hometown-green">
              <h3 className="text-2xl font-serif font-semibold text-hometown-green mb-4">
                My Vision
              </h3>
              <p className="text-hometown-green leading-relaxed">
                A Kansas City where every small business has the marketing support they need to 
                thrive, creating a stronger, more vibrant local economy for all of us.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-hometown-green">
              <h3 className="text-2xl font-serif font-semibold text-hometown-green mb-4">
                My Promise
              </h3>
              <p className="text-hometown-green leading-relaxed">
                I'll treat your business like it's my own. No cookie-cutter solutions, no 
                hidden fees, just honest, effective marketing that gets results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
