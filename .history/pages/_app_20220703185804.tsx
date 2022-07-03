import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import {useWidth} from '@Hooks/width'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  const width = useWidth();
  useEffect(() => {
    return () => {
      console.log(width)
    };
  })
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}

export default MyApp
