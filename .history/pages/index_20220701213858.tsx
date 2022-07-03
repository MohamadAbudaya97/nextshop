import type { NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Container from '@mui/material/Container'
import Ads from '@Components/Prodect/ads'
const Home: NextPage = () => {
  return (
    <>
    <SingleSwiper/>
    <Container>
      <Ads/>
    </Container>
    </>
  )
}

export default Home