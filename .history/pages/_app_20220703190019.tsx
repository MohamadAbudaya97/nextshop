import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { useEffect } from 'react';
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
