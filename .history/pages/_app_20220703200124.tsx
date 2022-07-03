import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextComponentType } from 'next'
import { Router } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
import { AppTreeType } from 'next/dist/shared/lib/utils'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <MainLayout >
    <Component {...pageProps} />
  </MainLayout>
  </>
  ) 
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  
   console.log("context")
  return {
    props: {
      
    },
  }
}
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
MyApp.getInitialProps  = async ({ Component, ctx }: AppContext) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    console.log(ctx.req)
    //Returning the isMobileView as a prop to the component for further use.
    return {
      isMobileView: Boolean(isMobileView)
    }
}


export default MyApp

