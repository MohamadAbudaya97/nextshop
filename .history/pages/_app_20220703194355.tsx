import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import {useWidth} from '@Hooks/width'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}

export default MyApp

export async function getServerSideProps(context) {
  console.log(context)
  return {
    props: {}, // will be passed to the page component as props
  }
}