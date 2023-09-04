import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat';
import '@fontsource/noto-serif';
import { Provider } from '@lyket/react';
import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider apiKey="pt_1fe5e7432d627fc70f3a6d42aab895">
        <Head>
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
        </Head>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-4563670706022763"
          async
          strategy="beforeInteractive"
          onError={(e) => {
            console.error('Script failed to load', e);
          }}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <Component {...pageProps} /> <Analytics />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
