import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import Image  from 'next/image'
const Test: NextPage = () => {
    const data =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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
          <div className="row">
              <div className="col-md-4">
                  <div className="thumb animated slideInUp">
                      <div className="img-fluid">
                        <Image alt="asdsada" src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" layout='fill'/>
                      <div/>
                  </div>
              </div>
              <div className="col-md-8 align-self-center">
                  <div className="hero-text">
                      <h2 className="animated slideInUp">BLACK SMART WATCH</h2>
                      <h3 className="animated slideInUp">upto 50% Discount</h3>
                      <a href="#" className="btn btn-primary animated slideInUp">shop now <span className="fa-solid fa-arrow-right"></span></a>
                  </div>
              </div>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default Test
