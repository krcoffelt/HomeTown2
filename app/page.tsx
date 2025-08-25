import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load components for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => (
    <div className="min-h-screen bg-hometown-green flex items-center justify-center">
      <div className="animate-pulse-slow">
        <div className="w-96 h-24 bg-white/20 rounded-lg mb-8"></div>
        <div className="w-80 h-8 bg-white/20 rounded-lg mb-12"></div>
        <div className="flex gap-6 justify-center">
          <div className="w-48 h-14 bg-white/20 rounded-lg"></div>
          <div className="w-40 h-14 bg-white/20 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
})

const ServicesPreview = dynamic(() => import('@/components/ServicesPreview'), {
  loading: () => (
    <div className="section-padding">
      <div className="container-custom">
        <div className="animate-pulse-slow">
          <div className="w-64 h-16 bg-white/20 rounded-lg mb-8 mx-auto"></div>
          <div className="w-96 h-6 bg-white/20 rounded-lg mb-12 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white/20 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

const TestimonialsStats = dynamic(() => import('@/components/TestimonialsStats'), {
  loading: () => (
    <div className="section-padding bg-white/5">
      <div className="container-custom">
        <div className="animate-pulse-slow">
          <div className="w-80 h-16 bg-white/20 rounded-lg mb-8 mx-auto"></div>
          <div className="w-96 h-6 bg-white/20 rounded-lg mb-12 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-white/20 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <Suspense fallback={
        <div className="section-padding">
          <div className="container-custom">
            <div className="animate-pulse-slow">
              <div className="w-64 h-16 bg-white/20 rounded-lg mb-8 mx-auto"></div>
              <div className="w-96 h-6 bg-white/20 rounded-lg mb-12 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-white/20 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <ServicesPreview />
      </Suspense>
      <Suspense fallback={
        <div className="section-padding bg-white/5">
          <div className="container-custom">
            <div className="animate-pulse-slow">
              <div className="w-80 h-16 bg-white/20 rounded-lg mb-8 mx-auto"></div>
              <div className="w-96 h-6 bg-white/20 rounded-lg mb-12 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 bg-white/20 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <TestimonialsStats />
      </Suspense>
    </div>
  )
}
