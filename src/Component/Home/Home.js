import React from 'react';
import Herosection from '../Herosection/Herosection';
import Review from '../Review/Review';
import Services from '../Homeservice/Homeservice';
import Contact from '../Homecontact/Homecontact';
import Numbers from '../Number_Card/Number';

const Home = () => {
  return (
    <div>
      <Herosection />
      <Numbers />
      <Review />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
