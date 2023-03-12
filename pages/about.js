import React from 'react';

import { client } from '../lib/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Product, FooterBanner, HeroBanner } from '../components';

const About = ({ products, bannerData }) => (
  <div className={styles.container}>
       <Head>
         <title>About Hand Stitches</title>
         <meta name="description" content="Learn about Hand Stitches and our commitment to quality handmade products." />
         <link rel="icon" href="/favicon.ico" />
       </Head>

       <main className={styles.main}>
         <h1 className={styles.title}>
           About Hand Stitches
         </h1>

         <p className={styles.description}>
           Hand Stitches is a company that specializes in handmade products, including quilts, embroidery, and other textile crafts. We are dedicated to preserving traditional crafting techniques and creating high-quality, one-of-a-kind pieces that are both beautiful and functional.
         </p>

         <h2 className={styles.subtitle}>
           Our Story
         </h2>

         <p className={styles.description}>
           Hand Stitches was founded in 2010 by Jane Doe, a lifelong crafter and textile enthusiast. Jane grew up learning traditional crafting techniques from her grandmother, and developed a deep passion for handmade products and the stories behind them. After many years of making and selling her crafts at local markets and fairs, Jane decided to start Hand Stitches to share her love of handmade products with a wider audience.
         </p>

         <h2 className={styles.subtitle}>
           Our Mission
         </h2>

         <p className={styles.description}>
           At Hand Stitches, our mission is to provide our customers with high-quality, handmade products that are both beautiful and functional. We are committed to preserving traditional crafting techniques and supporting local artisans and crafters. We believe that handmade products have a special magic that mass-produced items simply can't match, and we're passionate about sharing that magic with the world.
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

export default About;
