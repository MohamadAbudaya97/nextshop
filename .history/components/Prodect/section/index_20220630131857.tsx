import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';

const Section: NextPage = () => {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <h1>sadasdsad</h1>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>

    </>
  )
}

export default Section
