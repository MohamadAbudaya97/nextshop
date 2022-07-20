import type { GetServerSideProps, NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="description" content="An example of a meta description. These show up in search engine results."/>
    </Head>
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
          }
        ]
      }
      />
      <Catagory/>
      <Section />
      <Section/>
    </div>
    </>
  )
}


export default Home
