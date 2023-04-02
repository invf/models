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

        <p className={styles.description}>Dear customers,</p>

<p className={styles.description}>We regret to inform you that due to the ongoing war in Ukraine, we are currently experiencing issues with our payment system.</p>
<p className={styles.description}>Unfortunately, this means that we are unable to process payments through our usual channels, including credit cards and online payment systems.</p>

<p className={styles.description}>We understand that this may cause inconvenience, and we apologize for any delays or difficulties this may cause.</p>
<p className={styles.description}>Please be assured that we are doing everything we can to resolve the issue as quickly as possible.</p>

<p className={styles.description}>In the meantime, we would like to offer alternative payment options, including bank transfers or other offline payment methods.</p> 
<p className={styles.description}>If you would like to use one of these alternative methods, please contact us directly at our Email: handstitches.ua@gmail.com or Mobile: +380-067-506-50-75 and we will provide you with the necessary information.</p>

<p className={styles.description}>We know that many of our customers have been affected by the situation in Ukraine, and we would like to take this opportunity to extend our sympathies to everyone who has been affected.</p>
<p className={styles.description}>We hope for a speedy resolution to the conflict, and for peace and stability to be restored to the region.</p>

<p className={styles.description}>Thank you for your understanding and support during this difficult time.</p>

<p className={styles.description}>Sincerely,</p>
<p className={styles.description}>HANDSITCES STORE</p>


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
