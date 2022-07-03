import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './menu.module.scss'
import Image  from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import Divider from '@mui/material/Divider';
const Index: NextPage = () => {

  return (
    <>
      <Swiper
      dir='rtl'
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={Style.MainSwiper}
    >
      <SwiperSlide>
        <div className={Style.Main}>
            <Image  src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
            <div>
              <h2>افضل واجود انواع البدلات للاعراس </h2>
              <p>اكثر من 50% تخفيض</p>
              <Button variant="outlined"><ArrowForwardIcon/> التسوق الان </Button>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <Divider/>
    </>
  )
}

export default Index
