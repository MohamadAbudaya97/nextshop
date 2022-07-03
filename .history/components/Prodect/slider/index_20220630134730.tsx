import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './index.module.scss'
import {Typography} from "@mui/material"
const Slider: NextPage = () => {
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
                        <SwiperSlide>      
                        <span className={Style.mainSwiperItem}>
                        <div className={Style.image}
                        style={{backgroundImage:'url(' + 'https://i.ebayimg.com/images/g/rMUAAOSwer1il9S-/s-l200.webp' + ')'}}>
                        </div>
                        <h2 className={Style.name}>
                            $182.6
                        </h2>
                        <p>
                          <span>10% خصم</span>
                          .
                          <del>$13</del>
                        </p>
                        </span>
                        </SwiperSlide>
                    </>
                )
            })
        }
    </Swiper>
   </div>
  )
}

export default Slider
