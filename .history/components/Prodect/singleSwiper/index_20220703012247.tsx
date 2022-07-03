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
      <div className={Style.SwiperSlide}>
      <SwiperSlide >
        <div className="d-flex justify-content-between align-items-center">
          <div className='row container w-75'  >
              <div className='row col-md-4' dir="ltr">
                <Image  src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
              </div>
              <div className="col-md-8 align-self-center">
                <h2>افضل واجود انواع البدلات للاعراس </h2>
                <p>اكثر من 50% تخفيض</p>
                <Button variant="outlined"><ArrowForwardIcon/> <span style={{fontSize:18,color:"black"}}>التسوق الان</span>  </Button>
              </div>
          </div>
        </div>
      </SwiperSlide>
      </div>
    </Swiper>
    <Divider/>
    </>
  )
}
/*
        <div className={Style.Main}>
            <Image  src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
            <div>
              <h2>افضل واجود انواع البدلات للاعراس </h2>
              <p>اكثر من 50% تخفيض</p>
              <Button variant="outlined"><ArrowForwardIcon/> <span style={{fontSize:18,color:"black"}}>التسوق الان</span>  </Button>
            </div>
        </div>
*/
export default Index
