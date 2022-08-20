import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>İpek Efendiev</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
