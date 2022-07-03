import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { Context } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}
MyApp.getInitialProps = async (ctx: Context) => {
  // ...
  return props
}

export default MyApp
