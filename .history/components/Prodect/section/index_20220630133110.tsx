import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './index.module.scss'
const Section: NextPage = () => {
    const data =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
 <div className={Style.main}>
  <h2>العناصر التي شاهدتها مؤخرًا
  </h2>
    <Swiper
     className={Style.mainSwiper}
      spaceBetween={50}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            data.map(()=>{
                return(
                        <SwiperSlide>      
                        <span className={Style.mainSwiperItem}>
                        <div className={Style.image}
                        style={{backgroundImage:'url(' + 'https://i.ebayimg.com/images/g/rMUAAOSwer1il9S-/s-l200.webp' + ')'}}>
                        </div>
                        <h2 className={Style.name}>
                            الموسيقى
                            </h2>
                        </span>
                        </SwiperSlide>

                )
            })
        }
    </Swiper>
   </div>
  )
}

export default Section
