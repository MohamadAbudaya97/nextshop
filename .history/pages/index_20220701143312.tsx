import type { NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Container from '@mui/material/Container'
const Home: NextPage = () => {
  return (
    <>
    <SingleSwiper/>
    <Container>
      <Section/>
    </Container>
    </>
  )
}

export default Home
