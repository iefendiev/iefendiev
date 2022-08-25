import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="İpek Efendiev" key="title" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️‍🔥</text></svg>"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W2VLQZGTVL"
          strategy="lazyOnload"
        ></Script>
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W2VLQZGTVL')
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
