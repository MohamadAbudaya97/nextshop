import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Style from './index.module.scss'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Taps from './tabs'
import Section from '@Components/Prodect/section'
import  IProduce  from '@Interface/prodect';
const Item: NextPage = () => {
  function setValue(newValue: number) {
    console.log(newValue)
  }
  return (
    <>
     <div className="container" dir="rtl">
      <div className='row pt-4 pb-4'>
          <div className="col-12 col-lg-5  mt-lg-4">
            <div className={Style.imageMain}>
              <div className={Style.image}>
                <Image className={Style.imagescal} src="https://chtstudio.com/demo/ecomart/images/product/2.png" width={355} height={320} alt="saasd"/>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 mt-lg-4">
            <div className={Style.MainDeteals}>
               <Typography variant='h3' style={{fontSize:20}} className="m-3">Classic T-shirt Sleeves and Formal Dress 100% Cotton Single Jersey</Typography>
               <div className="m-3">
                  <span style={{fontSize:14}}>
                      <StarIcon style={{fontSize:18,marginBottom:5,color:"red"}}/> 4.5 
                  </span>
                  <Button variant="text" className="">
                    <CompareArrowsIcon style={{fontSize:18,marginBottom:5}}/> المقارنه
                  </Button>
                  <Button variant="text" className="">
                    <FavoriteBorderIcon style={{fontSize:18,marginBottom:5}}/>الاضافه للمفضله
                  </Button>
               </div>
               <div className="m-3"><strong>النوع : </strong><span> Original Foom </span></div>
               <div className="m-3"><span> COO21445Y </span><strong> : SKU</strong></div>
               <div className="m-3"><del className="m-2">$350</del><span>$330</span></div>
               <div className="m-3"><strong>لقد وفرت : </strong><span> $31.00 ( 10.0% ) </span></div>
               <div className="row m-1">
                  <div className="col-12 col-sm-6">
                      <div className={Style.MainStokEstimated}>
                          <div className="row pt-2 m-1">
                              <div className="col-1"><CheckCircleRoundedIcon style={{color:"#198754"}}/></div>
                              <div className="col-10">متوفر</div>
                          </div>
                          <div className="row m-1">
                              <div className="col-1"></div>
                              <div className="col-10">6 عناصر متوفره بالمتجر</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6">
                        <div className={Style.MainStokEstimated}>
                          <div className="row pt-2 m-1">
                              <div className="col-1"><CheckCircleRoundedIcon style={{color:"#198754"}}/></div>
                              <div className="col-10">الوقت المقدر للتسليم</div>
                          </div>
                          <div className="row m-1">
                              <div className="col-1"></div>
                              <div className="col-10">1-3 ايام</div>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="m-3">
                  <strong>المشاركه بواسطه :</strong>
                  <span>
                      <IconButton style={{color:"#1876f2"}}>
                          <FacebookRoundedIcon/>
                      </IconButton>
                  </span>
                  <span className="iconify" data-icon="mdi:instagram"></span>
              </div>
              <div className="row m-2">       
                <Button variant="contained"  className="col-12 col-sm-4 m-1 ">الشراء الان !</Button>
                <Button variant="outlined" className="col-12 col-sm-4  m-1">الاضافه للقائمه</Button>
              </div>
            </div>
          </div>
      </div>
      <div className="white radius p-3">
        <div className={Style.MainDetails}>
           <Taps/>
        </div>
      </div>
      <Section/>
     </div>
    </>
  )
}

export default Item



