import Head from "next/head";
import { Router } from "next/router";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../styles/globals.css";
import AdminLayout from "../../@core/layouts/admin";
import ThemeComponent from "../../@core/theme/adminTheme/ThemeComponent";
import { createEmotionCache } from "../../@core/utils/create-emotion-cache";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../../@core/context/settingsContext";
import themeConfig from "../../@core/configs/themeConfig";

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout =
    // @ts-ignore
    Component.getLayout ?? ((page: any) => <AdminLayout>{page}</AdminLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Admin`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta
          name="keywords"
          content="Material Design, MUI, Admin Template, React Admin Template"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {getLayout(<Component {...pageProps} />)}
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
