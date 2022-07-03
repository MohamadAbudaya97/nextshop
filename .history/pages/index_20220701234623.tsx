import type { NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
const Home: NextPage = () => {
  return (
    <>
    <SingleSwiper/>
    <div className="container">
      <Ads/>
      <Catagory/>
      <Section/>
    </div>
    </>
  )
}

export default Home
