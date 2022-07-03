import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <Head>
    <html lang="en" />
    <title>My page title</title>
    <meta name="description" content="An example of a meta description. These show up in search engine results."/>
  </Head>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}

export default MyApp
