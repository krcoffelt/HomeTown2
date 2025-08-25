import ServicesHero from '@/components/ServicesHero'
import ServiceDetails from '@/components/ServiceDetails'
import ServicesCTA from '@/components/ServicesCTA'

export default function Services() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServiceDetails />
      <ServicesCTA />
    </div>
  )
}
