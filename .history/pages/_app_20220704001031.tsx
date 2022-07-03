import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { NextPage } from 'next'

interface Props {
  userAgent?: string;
  appProps:AppProps
}

const MyApp: NextPage<Props> = ({appProps:{Component,pageProps}}) => (
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
)

MyApp.getInitialProps = async ({ req }) => {
 const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default MyApp
