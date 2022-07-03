import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextComponentType } from 'next'
import { Router } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
import { AppTreeType } from 'next/dist/shared/lib/utils'
import Connect from '@Components/layout/Contact'
import {useWidth} from '@Hooks/screen'
type AppContext = {
    Component: NextComponentType<NextPageContext, {}, {}>;
    AppTree: AppTreeType;
    ctx: NextPageContext;
    router: Router;
}
interface NextPageContext {
    req?: IncomingMessage;
    res?: ServerResponse;
    // other props
}
function MyApp({ Component, pageProps ,...props}: AppProps) {
  const width = useWidth();
  console.log(width)
  return(
    <>
    {
      width > 550 &&<Connect /> 
    }
   
    <Component {...pageProps} />
  </>
  ) 
}


export default MyApp

