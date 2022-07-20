import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import Image  from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import Divider from '@mui/material/Divider';
import type {SingleSwiper} from '@Interface/Prodect'
import Link from 'next/link'

interface Props{
data:SingleSwiper[]
}

const Index: NextPage<Props> = (Props) => {

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
      {
        Props.data.map((item,i)=>
          <SwiperSlide key={item.discription+item.header+i} className={Style.SwiperSlide} >
            <div className="container w-100 h-100">
              <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="col-md-3 d-flex justify-content-center align-items-center" >
                  <div className={Style.image}>
                          <Image src={item.image} alt={item.header} layout='fill' priority/>
                  </div>
                </div>
                <div className="col-md-6 text-md-end text-center">
                    <h2>{item.header}</h2>
                    <p>{item.discription}</p>
                    <Link href={item.link.url}>
                      <a>
                        <Button variant="outlined"><ArrowForwardIcon/> <span style={{fontSize:18,color:"black"}}>{item.link.name}</span>  </Button>
                      </a>
                    </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
    <Divider/>
    </>
  )
}
export default Index
