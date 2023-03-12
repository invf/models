import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const Delivery = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Delivery | Hand Stitches</title>
        <meta name="description" content="Learn about the delivery options and policies for Hand Stitches products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Delivery Options
        </h1>

        <p className={styles.description}>
          We offer a variety of delivery options to suit your needs. Our standard delivery option is free for all orders over $50 and takes 3-5 business days to arrive. We also offer express delivery for an additional fee, which takes 1-2 business days.
        </p>

        <h2 className={styles.subtitle}>
          Delivery Policy
        </h2>

        <p className={styles.description}>
          All orders are processed within 1-2 business days. Once your order has been processed, you will receive a shipping confirmation email with tracking information. Please note that we are not responsible for any delays or issues caused by the shipping carrier. If you have any questions or concerns about your order, please don't hesitate to contact us.
        </p>

        <h2 className={styles.subtitle}>
          International Shipping
        </h2>

        <p className={styles.description}>
          We currently only offer shipping within the United States. We hope to expand our shipping options in the future to include international shipping.
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

export default Delivery;
