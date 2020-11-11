import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WMMCL29');`,
            }}
          /> */}
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta property="og:title" content="Tastewise AI | Food Data, Statistics & Trends Platform" />
          <meta
            property="og:description"
            content="Tastewise pairs the largest data-set in food intelligence with proprietary machine learning algorithms to analyze and distill information, and predict consumer"
          />
          <meta name="Description" content="Tastewise pairs the largest data-set in food intelligence with proprietary machine learning algorithms to analyze and distill information, and predict consumer" />
        </Head>
        <body>
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMMCL29" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
            }}
          /> */}
          <Main />
          <NextScript />

          {/* <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/5571396.js"
          ></script> */}
        </body>
      </Html>
    )
  }
}
