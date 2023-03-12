import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Payment = ({ products, bannerData }) => (
  <div className={styles.container}>
      <Head>
        <title>Payment | Hand Stitches</title>
        <meta name="description" content="Learn about the payment options and policies for Hand Stitches products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>
          Payment Options
        </h2>

        <p className={styles.description}>
          We accept a variety of payment options to suit your needs. You can pay with any major credit or debit card, including Visa, Mastercard, American Express, and Discover. We also accept payments through PayPal and Apple Pay.
        </p>

        <h2 className={styles.subtitle}>
          Payment Policy
        </h2>

        <p className={styles.description}>
          All payments are processed securely through our payment processor. We do not store any credit card or payment information on our servers. Once your payment has been processed, you will receive a confirmation email with your order details. Please note that your order will not be shipped until payment has been received in full.
        </p>

        <h2 className={styles.subtitle}>
          Refunds and Returns
        </h2>

        <p className={styles.description}>
          We offer refunds and returns on all products within 30 days of purchase. If you are not satisfied with your purchase for any reason, please contact us to initiate the return process. Refunds will be issued to the original payment method used to make the purchase.
        </p>

      </main>


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

export default Payment;
