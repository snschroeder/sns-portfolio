import React from 'react';

import HomeAbout from './HomeAbout/HomeAbout';
import Divider from '../Divider/Divider';

import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <HomeAbout />
      <Divider
        angle='skew(-20deg)'
        width='100px'
        height='100vh'
        top='0%'
        left='45%'
        flexDirection='column'
        position='absolute'
        accentAngle='skew(20deg)'
      />
    </div>
  );
};

export default HomePage;
