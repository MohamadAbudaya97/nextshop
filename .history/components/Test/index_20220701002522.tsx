import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import Image  from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Test: NextPage = () => {
  return (
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
          <div className={Style.Option}>
            <div className={Style.item}>All Offers</div>
            <Divider />
            <div className={Style.item}>Fashion and Clothing </div>
            <Divider />
            <div className={Style.item}> <ElectricBoltIcon/> Electronic Gradget </div>
          </div>
            <Image  src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
            <div>
              <h2>افضل واجود انواع البدلات للاعراس </h2>
              <p>اكثر من 50% تخفيض</p>
              <Button variant="outlined"><ArrowForwardIcon/> التسوق الان </Button>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Test
