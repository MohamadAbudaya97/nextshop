import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Styles from './index.module.scss'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'

const Index: NextPage = () => {
  return (
    <>
        <SingleSwiper 
    data={
      [
        {
          header:"افضل واجود انواع البدلات للاعراس",
          discription:"اكثر من 50% تخفيض",
          image:"https://chtstudio.com/demo/ecomart/images/bg/s5.png",
          link:{
            name:"التسوق الان",
            url:""
          }
        }
      ]
    }/>
    <div className="container">
      <Ads
      data={
        [
          {
            image:"https://chtstudio.com/demo/ecomart/images/others/of1.jpg",
            name:"تخفيضات على الملابس",
            url:""
          },
          {
            image:"https://chtstudio.com/demo/ecomart/images/others/of2.jpg",
            name:"تخفيضات على الاحذيه",
            url:""
          },
          {
            image:"https://chtstudio.com/demo/ecomart/images/others/of1.jpg",
            name:"تخفيضات على البدلات",
            url:""
          }
        ]
      }
      />
      <Catagory
      data={
        [
          
        ]
      }
      />
      <Section />
      <Section/>

    </>
  )
}


export default Index
