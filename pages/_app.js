import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import "../assets/css/reset.css";
import { createContext, useEffect } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { useRouter } from "next/router";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { navigation } = pageProps;
  const router = useRouter();

  return (
    <>
      <Head></Head>
      <GlobalContext.Provider value={{ ...navigation, query: router.query }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);

  const [navigation] = await Promise.all([
    fetchAPI("/nav"),
  ]);

  return {
    ...appProps,
    pageProps: {
      navigation: { navigation },
    },
  };
};

export default MyApp;
