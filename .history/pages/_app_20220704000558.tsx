import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'

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
