'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Send } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-hometown-green mb-6">
              Send Me a Message
            </h2>
            <p className="text-lg text-hometown-green mb-8">
              Fill out the form below and I'll get back to you within 24 hours. 
              I'm excited to learn about your business and how I can help you grow.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hometown-green mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hometown-green focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-hometown-green mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hometown-green focus:border-transparent transition-colors duration-300"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hometown-green mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hometown-green focus:border-transparent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-hometown-green mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hometown-green focus:border-transparent transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-hometown-green mb-2">
                  Tell Me About Your Business
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hometown-green focus:border-transparent transition-colors duration-300"
                  placeholder="What are your biggest marketing challenges? What are your goals? Any specific services you're interested in?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-hometown-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-hometown-green mb-2">
                Prefer to Book Directly?
              </h3>
              <p className="text-hometown-green">
                Schedule a free 30-minute consultation at a time that works for you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-hometown-green mb-2">What to Expect</h4>
                <ul className="text-sm text-hometown-green space-y-1">
                  <li>• 30-minute video call or coffee meeting</li>
                  <li>• Discussion of your business goals</li>
                  <li>• Marketing challenges assessment</li>
                  <li>• Custom strategy recommendations</li>
                  <li>• No sales pitch, just valuable insights</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-hometown-green mb-2">Available Times</h4>
                <ul className="text-sm text-hometown-green space-y-1">
                  <li>• Monday - Friday: 9 AM - 6 PM</li>
                  <li>• Saturday: 10 AM - 2 PM</li>
                  <li>• Evening appointments available</li>
                  <li>• In-person or virtual meetings</li>
                </ul>
              </div>

              <a
                href="#"
                className="w-full bg-hometown-green text-white py-3 px-6 rounded-md font-semibold hover:bg-hometown-green-dark transition-colors duration-300 text-center block"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
