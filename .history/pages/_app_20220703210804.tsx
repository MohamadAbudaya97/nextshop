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
  console.log("is mobile",props["isMobileView"])
  return(
    <>
    {
      !props["isMobileView"] &&<Connect /> 
    }
   
    <Component {...pageProps} />
  </>
  ) 
}
MyApp.getInitialProps  = async ({ Component, ctx }: AppContext) => {
  let isMobileView = await (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    //Returning the isMobileView as a prop to the component for further use.
    return {
      isMobileView: Boolean(isMobileView)
    }
}


export default MyApp

