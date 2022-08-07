import '../styles/globals.scss'
import { Provider } from 'react-redux'
import {store} from '@Redux/store'
import App, { AppContext,AppProps  } from "next/app";
import {  ThemeProvider } from '@mui/material/styles';
import Theme from '../styles/theme '
import Layouts from '../Layouts'
import { StyledEngineProvider } from '@mui/material/styles';
import { ApolloProvider } from "@apollo/client";
import client from '@Graphql/client'
import { useQuery } from '@apollo/client';

type TProps = AppProps & {
  userAgent: string;
  admin:string;
};


function MyApp({ Component, pageProps,userAgent,admin }: TProps) {
  
  return(
    <>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <Layouts admin={admin} userAgent={userAgent}>
              <Component {...pageProps}/>
            </Layouts>
          </StyledEngineProvider>
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  </>
  ) 
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  const userAgent = context?.ctx?.req?.headers["user-agent"] || navigator.userAgent 
  const asPath = context.ctx.asPath
  const admin = asPath.includes("admin")
  return { ...ctx, userAgent: userAgent,admin:admin };
};

export default MyApp
