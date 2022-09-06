import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
