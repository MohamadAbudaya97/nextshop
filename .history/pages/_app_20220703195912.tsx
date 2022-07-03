import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
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
MyApp.getInitialProps  = async ({ Component, ctx }: AppContext) => {
... logic
}


export default MyApp

