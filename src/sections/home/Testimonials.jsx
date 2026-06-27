import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../../constants/site'
import { testimonialAvatars } from '../../constants/images'
import SectionHeader from '../../components/ui/SectionHeader'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="tms section">
      <div className="tms-ghost">
        <Quote size={420} strokeWidth={0.4} />
      </div>
      <div className="container">
        <SectionHeader
          align="center"
          label="In Their Words"
          title="Cherished by Families,|Generation After Generation"
        />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.15}
        spaceBetween={20}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2, slideShadows: false }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          720: { slidesPerView: 2 },
          1100: { slidesPerView: 2.6 },
        }}
        className="tms-swiper"
      >
        {TESTIMONIALS.map((t, i) => (
          <SwiperSlide key={t.name} className="tms-slide">
            <figure className="tms-card">
              <Quote className="tms-card-quote" size={32} />
              <div className="tms-stars">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>{t.text}</blockquote>
              <figcaption className="tms-author">
                <img src={testimonialAvatars[i % testimonialAvatars.length]} alt="" loading="lazy" />
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.place}</em>
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
