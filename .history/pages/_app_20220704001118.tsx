import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'

interface Props {
  userAgent?: string;
}
function MyApp({ Component, pageProps,...props }: AppProps) {
  console.log(props)
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
