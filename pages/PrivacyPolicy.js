import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Terms = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Hand Stitches</title>
        <meta name="description" content="Learn about the data collection and usage policies for Hand Stitches." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Privacy Policy
        </h1>

        <p className={styles.description}>
          At Hand Stitches, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and share your personal information. By using our website, you consent to our privacy policy.
        </p>

        <h2 className={styles.subtitle}>
          Data Collection and Usage
        </h2>

        <p className={styles.description}>
          We collect personal information from you when you make a purchase, sign up for our newsletter, or contact us through our website. This may include your name, email address, phone number, and shipping address. We use this information to process your orders, send you updates and promotions, and respond to your inquiries. We do not share your information with third parties for marketing purposes.
        </p>

        <h2 className={styles.subtitle}>
          Data Security
        </h2>

        <p className={styles.description}>
          We take the security of your personal information seriously. We use industry-standard encryption technologies to protect your data when it is being transmitted over the internet. We also use secure servers to store your data. However, no method of data transmission or storage can be completely secure, so we cannot guarantee the absolute security of your data.
        </p>

        <h2 className={styles.subtitle}>
          Cookies
        </h2>

        <p className={styles.description}>
          We use cookies to enhance your user experience and to track website usage. Cookies are small text files that are stored on your device when you visit our website. You can disable cookies in your web browser settings, but this may limit some features of our website.
        </p>

        <h2 className={styles.subtitle}>
          Updates to Privacy Policy
        </h2>

        <p className={styles.description}>
          We may update our privacy policy from time to time. We will post the updated policy on our website and notify you of any material changes. Your continued use of our website after the changes take effect will signify your acceptance of the updated policy.
        </p>

      </main>

      <footer className={styles.footer}>
        <p>Hand Stitches &copy; 2023</p>
      </footer>
    </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Terms;
