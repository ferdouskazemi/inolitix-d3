import type { AppProps } from "next/app";
import Head from "next/head";

require("../styles/globals.css");
function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full w-full" id="app-wrapper">
      <Head>
        <title>D3 Project </title>
        {/* <!-- Primary Meta Tags --> */}

        <meta name="title" content="D3 Project" />
        <meta
          name="description"
          content="Powerful, Beautiful, Easy Data Visiulation."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inolitix-d3.vercel.app/" />
        <meta property="og:title" content="D3 Project" />
        <meta
          property="og:description"
          content="Powerful, Beautiful, Easy Data Visiulation."
        />
        <meta property="og:image" content="/ino-d3.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://inolitix-d3.vercel.app/"
        />
        <meta property="twitter:title" content="D3 Project" />
        <meta
          property="twitter:description"
          content="Powerful, Beautiful, Easy Data Visiulation."
        />
        <meta property="twitter:image" content="/ino-d3.jpg" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
