import React from 'react';

import HomeHooks from './HomeHooks/HomeHooks';
import HomeAbout from './HomeAbout/HomeAbout';
import Divider from '../Divider/Divider';

import './HomePage.css';

// TODO: move API call here, pass data to components

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <HomeAbout />
      <Divider />
      <img src={`${process.env.PUBLIC_URL}/skyline.jpg`} className="hero-img" />
    </div>
  );
};

export default HomePage;
