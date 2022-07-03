import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { NextPage } from 'next'

interface Props {
  userAgent?: string;
  appProps:AppProps
}
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}
MyApp.getInitialProps = async (ctx: any) => {
  // ...
  return props
}

export default MyApp
