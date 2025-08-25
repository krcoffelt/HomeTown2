'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactInfo = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-hometown-green mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-hometown-green max-w-3xl mx-auto">
            I'm here to help your Kansas City business grow. Reach out to me through any of 
            these channels, and I'll get back to you quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-hometown-green mb-2">Visit Me</h3>
            <p className="text-hometown-green">
              1234 Main Street<br />
              Kansas City, MO 64111<br />
              <span className="text-hometown-green-light font-medium">Downtown KC</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-hometown-green mb-2">Call Me</h3>
            <p className="text-hometown-green">
              <a href="tel:+18165551234" className="text-hometown-green hover:text-hometown-green-dark font-medium">
                (816) 555-1234
              </a><br />
              <span className="text-sm">Mon-Fri: 9 AM - 6 PM</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-hometown-green mb-2">Email Me</h3>
            <p className="text-hometown-green">
              <a href="mailto:hello@hometownkc.com" className="text-hometown-green hover:text-hometown-green-dark font-medium">
                hello@hometownkc.com
              </a><br />
              <span className="text-sm">Response within 24 hours</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-hometown-green mb-2">Office Hours</h3>
            <p className="text-hometown-green">
              Monday - Friday<br />
              9:00 AM - 6:00 PM<br />
              <span className="text-hometown-green-light font-medium">Saturday by appointment</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-hometown-green mb-6">
              Ready to Start Growing?
            </h3>
            <p className="text-lg text-hometown-green max-w-2xl mx-auto mb-8">
              The best time to start improving your marketing was yesterday. The second best time is today. 
              Let's have a conversation about your business and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary text-lg px-8 py-3"
              >
                Book Free Consultation
              </a>
              <a
                href="tel:+18165551234"
                className="btn-secondary text-lg px-8 py-3"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
