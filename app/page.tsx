import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import TestimonialsStats from '@/components/TestimonialsStats'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesPreview />
      <TestimonialsStats />
    </div>
  )
}
