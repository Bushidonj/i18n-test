import React from 'react';
import { useTranslation } from "react-i18next";

import Hero from '../Components/sections/Hero';
import Features from '../Components/sections/Features';
import OfferedFeatures from '../Components/sections/OfferedFeatures';
import FAQs from '../Components/sections/FAQs';

const Home = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <Hero />
      <Features />
      <OfferedFeatures />
      <FAQs />
    </>
  );
};

export default Home;
