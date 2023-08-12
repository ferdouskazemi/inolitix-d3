import type { AppProps } from 'next/app';
import Head from 'next/head';


require( '../styles/globals.css');
function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full w-full" id="app-wrapper">
      <Head>
        <title>D3 Project </title>
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
