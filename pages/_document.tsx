import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https: //fonts.googleapis.com/css2?family= Courier+Prime:wght@700 & family = Montserrat:wght@400;500;700 & family= Roboto+Mono:wght@700 & family= Roboto:wght@400; 700 & display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}