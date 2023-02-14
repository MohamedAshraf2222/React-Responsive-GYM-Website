import React from "react";
import Exercise from "../../ui/home/exercise/Exercise";
import Hero from "../../ui/home/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Start from "../../ui/home/start/Start";
import Pricing from "../../ui/home/pricing/Pricing";
import Testimonials from "../../ui/home/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Exercise />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;
