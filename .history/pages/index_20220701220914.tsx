import type { NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Container from '@mui/material/Container'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
const Home: NextPage = () => {
  return (
    <>
    <SingleSwiper/>
    <div className="container">
      <Ads/>
      <Catagory/>
    </div>
    </>
  )
}

export default Home
