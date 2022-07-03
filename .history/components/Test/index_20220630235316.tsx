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
            <Image src="" alt="sadasd" width={50} height={50}/>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Test
