import React from 'react';

import './HomePage.css';

const HomePage: React.FC = () => {
  return (
        <section className="home-container">
            <h1 className="home-h1">Oh, hey!</h1>
            <h2 className="home-h2">Welcome to my portfolio. Please don't mind the dust.</h2>
            <h3 className="home-h3">Our tests have confirmed it is 73% asbestos free!</h3>
        </section>
  );
};

export default HomePage;
