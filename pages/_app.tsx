import Head from "next/head";
import type { AppProps } from "next/app";

import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A Cosmo Mapeamento Ambiental é uma consultoria do setor de geotecnologias, especializada em levantamentos aerofotogramétricos com drones e análise espacial de fenômenos ambientais."
        />
        <link rel="icon" href="/favicon.jpg" />
        <title>Cosmo Mapeamento</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
