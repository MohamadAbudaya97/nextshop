import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    let isMobileView = (context.req
    ? context.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    
   console.log(isMobileView)
  return {
    props: {
      
    },
  }
}

export default MyApp

