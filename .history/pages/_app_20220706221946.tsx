import '../styles/globals.scss'
import MainLayout from '../Layouts/main'
import { Provider } from 'react-redux'
import {store} from '@Redux/store'
import App, { AppContext,AppProps  } from "next/app";

type TProps = AppProps & {
  userAgent: string;
};


function MyApp({ Component, pageProps,userAgent }: TProps) {
  return(
    <>
      <Provider store={store}>
        <MainLayout userAgent={userAgent}>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
  </>
  ) 
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const userAgent = context.ctx.req.headers["user-agent"]
  return { ...ctx, userAgent: userAgent };
};

export default MyApp
