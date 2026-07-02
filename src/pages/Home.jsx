import Hero from '../sections/home/Hero'
import Welcome from '../sections/home/Welcome'
import Collections from '../sections/home/Collections'
import Heritage from '../sections/home/Heritage'
import WhyChooseUs from '../sections/home/WhyChooseUs'
import Featured from '../sections/home/Featured'
import Testimonials from '../sections/home/Testimonials'
import TrustNumbers from '../sections/home/TrustNumbers'
import Gallery from '../sections/shared/Gallery'
import Faq from '../sections/shared/Faq'
import FinalCta from '../sections/shared/FinalCta'
import Marquee from '../components/ui/Marquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={['Bridal Splendour', 'Temple Heritage', 'Certified Diamonds', 'Pure 916 Gold', 'Since 1947']}
      />
      <Welcome />
      <Collections />
      <Heritage />
      <WhyChooseUs />
      <Featured />
      <Testimonials />
      <TrustNumbers />
      <Gallery />
      <Faq />
      <FinalCta />
    </>
  )
}
