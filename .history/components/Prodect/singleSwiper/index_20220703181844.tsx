import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
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
      <SwiperSlide className={Style.SwiperSlide}>
        <div className="container w-100 h-100">
          <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="col-md-4 red h-50">sad</div>
            <div className="col-md-8 black h-50">asd</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <Divider/>
    </>
  )
}
/*
        <div className={Style.SwiperSlide}>
          <div className='row container w-75'  >
              <div className='row col-md-4 d-flex align-self-md-center justify-content-md-center' dir="ltr">
                <Image   src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
              </div>
              <div className="col-md-8 align-self-center">
                <h2>افضل واجود انواع البدلات للاعراس </h2>
                <p>اكثر من 50% تخفيض</p>
                <Button variant="outlined"><ArrowForwardIcon/> <span style={{fontSize:18,color:"black"}}>التسوق الان</span>  </Button>
              </div>
          </div>
        </div>
*/
export default Index
