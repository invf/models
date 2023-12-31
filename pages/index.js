import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
// import ReactGA from 'react-ga';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

const Home = ({ products, bannerData }) => {


  const TRACKING_ID = 'G-PSTTCVGEK6'
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Custom Title" });

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className="products-heading">
        <h2>OUR ONLYFANS MODELS</h2>
        <h4>Share your desires with our incredible girls, they're here to listen to your fantasies</h4>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};

export default Home;
