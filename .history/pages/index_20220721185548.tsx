import type { GetServerSideProps, NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {getAllProdect} from '@Graphql/client/Querys/prodect'
import { useQuery } from '@apollo/client';

const Home: NextPage = () => {
      const { data, loading, error } = useQuery(getAllProdect);

  return (
    <>
    {
      data
    }
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
    </div>
    </>
  )
}


export default Home
