import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Cumpleanito</title>
        <link rel="icon" type="image/x-icon" href="/Logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
