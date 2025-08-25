'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Send, Loader2 } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    notes: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      return 'Please enter a valid email address'
    }
    if (name === 'name' && value && value.length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (name === 'business' && value && value.length < 2) {
      return 'Business name must be at least 2 characters'
    }
    if (name === 'phone' && value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
      return 'Please enter a valid phone number'
    }
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    if (error) {
      setErrors({
        ...errors,
        [name]: error
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      if (key === 'phone') return // Phone is optional
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) {
        newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Handle successful submission
      setSubmitSuccess(true)
      setFormData({ name: '', business: '', email: '', phone: '', notes: '' })
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="section-padding"
      >
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h2 className="text-4xl font-serif font-medium text-hometown-green mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out! I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="btn-primary px-8 py-3"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-hometown-green mb-8 text-center">
                Ready to Transform
                <span className="block text-hometown-green italic">Your Marketing?</span>
              </h2>
              <p className="text-lg text-gray-200 mb-8 text-center">
                Fill out the form below and I'll get back to you within 24 hours. 
                I'm excited to learn about your business and how I can help you grow.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-white/10 text-white placeholder-gray-300 ${
                        errors.name 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/30 focus:ring-white'
                      }`}
                      placeholder="Your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <motion.p 
                        id="name-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-white mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-white/10 text-white placeholder-gray-300 ${
                        errors.business 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/30 focus:ring-white'
                      }`}
                      placeholder="Your business name"
                      aria-describedby={errors.business ? "business-error" : undefined}
                    />
                    {errors.business && (
                      <motion.p 
                        id="business-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.business}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-white/10 text-white placeholder-gray-300 ${
                        errors.email 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/30 focus:ring-white'
                      }`}
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <motion.p 
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-white/10 text-white placeholder-gray-300 ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/30 focus:ring-white'
                      }`}
                      placeholder="(555) 123-4567"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <motion.p 
                        id="phone-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-white mb-2">
                    Tell Me About Your Business
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-white/10 text-white placeholder-gray-300"
                    placeholder="What are your biggest marketing challenges? What are your goals? Any specific services you're interested in?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  aria-label="Submit contact form"
                  aria-describedby="form-description"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                <p id="form-description" className="text-sm text-white/70 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Calendly Integration */}
          <motion.div 
            className="relative mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60">
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-hometown-green mb-6">
                Prefer to Talk?
              </h3>
              <p className="text-lg text-hometown-green mb-8 max-w-2xl mx-auto">
                Schedule a free 30-minute consultation to discuss your marketing needs and see how we can help grow your business.
              </p>
              <div className="calendly-inline-widget" data-url="https://calendly.com/your-calendly-link" style={{ minWidth: '320px', height: '700px' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
