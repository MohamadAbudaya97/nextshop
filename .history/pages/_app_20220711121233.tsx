import '../styles/globals.scss'
import MainLayout from '../Layouts/main'
import { Provider } from 'react-redux'
import {store} from '@Redux/store'
import App, { AppContext,AppProps  } from "next/app";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from '../styles/theme '
import Reoute from 'next/router'
type TProps = AppProps & {
  userAgent: string;
};


function MyApp({ Component, pageProps,userAgent }: TProps) {
  return(
    <>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <MainLayout userAgent={userAgent}>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  </>
  ) 
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const userAgent = context.ctx.req.headers["user-agent"]
  const url = context.ctx.asPath
  console.log(url)
  return { ...ctx, userAgent: userAgent };
};

export default MyApp
