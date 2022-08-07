import type { GetServerSideProps, NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {getAllProdect} from '@Graphql/client/Querys/prodect'
  import { gql, useQuery } from "@apollo/client";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(
    
  );
  console.log(loading, error, data)
  return (
    <>
    <Head>
      <title>My page title</title>

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

/**
 *      <meta name="description" content="An example of a meta description. These show up in search engine results."/>
      <meta name='application-name' content='PWA App' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='PWA App' />
      <meta name='description' content='Best PWA App in the world' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#2B5797' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content='#fff' />srr

      <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

      <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content='https://yourdomain.com' />
      <meta name='twitter:title' content='PWA App' />
      <meta name='twitter:description' content='Best PWA App in the world' />
      <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
      <meta name='twitter:creator' content='@DavidWShadow' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='PWA App' />
      <meta property='og:description' content='Best PWA App in the world' />
      <meta property='og:site_name' content='PWA App' />
      <meta property='og:url' content='https://yourdomain.com' />
      <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />

 */