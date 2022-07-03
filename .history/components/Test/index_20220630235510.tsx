import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import Image  from 'next/image'
const Test: NextPage = () => {
  return (
      <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={Style.MainSwiper}
    >
      <SwiperSlide>
        <div className={Style.SwiperSlide}>
            <Image src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
            <h3>hsad asd asdas asd sad sad </h3>
            <p>up to 50% discount</p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Test
