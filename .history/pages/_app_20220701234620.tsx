import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  ) 
}

export default MyApp
