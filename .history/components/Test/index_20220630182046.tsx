import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import {Typography} from "@mui/material"
const Test: NextPage = () => {
    const data =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
 <div className={Style.main}>
  <Typography variant='h6'>العناصر التي شاهدتها مؤخرًا</Typography>
    <Swiper
    dir='rtl'
      className={Style.mainSwiper}
      spaceBetween={50}
      slidesPerView={7}
    >
        {
            data.map(()=>{
                return(
                    <>
                          <Swiper
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          <SwiperSlide>Slide 1</SwiperSlide>
                          <SwiperSlide>Slide 2</SwiperSlide>
                          <SwiperSlide>Slide 3</SwiperSlide>
                          <SwiperSlide>Slide 4</SwiperSlide>
                          <SwiperSlide>Slide 5</SwiperSlide>
                          <SwiperSlide>Slide 6</SwiperSlide>
                          <SwiperSlide>Slide 7</SwiperSlide>
                          <SwiperSlide>Slide 8</SwiperSlide>
                          <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </>
                )
            })
        }
    </Swiper>
   </div>
  )
}

export default Test
