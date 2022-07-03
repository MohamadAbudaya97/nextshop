import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../Layouts/main'
function MyApp({ Component, pageProps }: AppProps) {
  return   <html lang="en">
<MainLayout ><Component {...pageProps} /></MainLayout>
</html>


}

export default MyApp
