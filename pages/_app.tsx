import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>İpek Efendiev</title>
      <meta property="og:title" content="İpek Efendiev" key="title" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️‍🔥</text></svg>"
      />
    </Head>
    <Component {...pageProps} />
  </div>
)

export default MyApp
