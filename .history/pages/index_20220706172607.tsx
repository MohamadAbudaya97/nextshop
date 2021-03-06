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
    <SingleSwiper/>
    <div className="container">
      <Ads/>
      <Catagory/>
      <Section/>
      <Section/>
    </div>
    </>
  )
}


export default Home
