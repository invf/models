import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { GoogleAnalytics } from "nextjs-google-analytics";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  const TRACKING_ID = 'G-PSTTCVGEK6';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/", title: "Custom Title" });

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
