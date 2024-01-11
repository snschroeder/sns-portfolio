import React from 'react';

import './HomePage.css';

const HomePage: React.FC = () => {
  return (
        <section className="home-container">
            <h1 className="home-h1">Hi there! My name is Scott</h1>
            <h2 className="home-h2">Welcome to my portfolio. Please feel free to look around if you would like to see what I've been working on.</h2>
            <h2 className="home-h2-dust">Oh, and please don't mind the dust, I can't figure out how to get rid of it.</h2>
            <h3 className="home-h3">Don't worry, though! Our tests have confirmed it is 73% asbestos free!</h3>
        </section>
  );
};

export default HomePage;
