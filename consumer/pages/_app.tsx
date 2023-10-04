import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import Head from "next/head";
import * as React from "react";
import { Toaster } from "react-hot-toast";
import "react-multi-carousel/lib/styles.css";
import { ThemeContext } from "../../@core/theme/frontendTheme/ThemeComponent";

import createEmotionCache from "../../@core/utils/create-emotion-cache";
import Layout from "../../@core/layouts/frontend";
import { store } from "../../@store";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeContext>
          <CssBaseline />
          <Layout>
            {/*  /!*<NextNProgress />*!/*/}
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </ThemeContext>
      </CacheProvider>
    </Provider>
  );
}
