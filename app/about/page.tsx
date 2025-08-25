import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import OurValues from '@/components/OurValues'
import TeamSection from '@/components/TeamSection'

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
    </div>
  )
}
