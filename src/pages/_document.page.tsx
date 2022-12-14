import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#334454" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
