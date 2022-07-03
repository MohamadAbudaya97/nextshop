import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './index.module.scss'
const Section: NextPage = () => {
  return (
 <div className={Style.main}>
  <h2>العناصر التي شاهدتها مؤخرًا
  </h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Section
/*
<div class="main">
  <h2>العناصر التي شاهدتها مؤخرًا
  </h2>
  <swiper [slidesPerView]="7" [spaceBetween]="50" class="main-swiper">
    class="main-swiper">
    <ng-template swiperSlide>
      <span class="main-swiper-item" [routerLink]="['sections','music']">
        <div class="image"
          [ngStyle]="{'background-image':' url(' + 'https://i.ebayimg.com/images/g/rMUAAOSwer1il9S-/s-l200.webp' + ')'}">
        </div>
        <h2 class="name">
          الموسيقى
        </h2>
      </span>
    </ng-template>
  </swiper>
</div>
