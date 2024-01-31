import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

const App: React.FC = () => {
  const [windowX, setWindowX] = useState(innerWidth);
  const [windowY, setWindowY] = useState(innerHeight);

  const setSize = () => {
    setWindowX(innerWidth);
    document.body.scrollHeight > innerHeight
      ? setWindowY(document.body.scrollHeight)
      : setWindowY(innerHeight);
    
  }

  useEffect(() => {
    setSize();
    addEventListener('resize', () => setSize());
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (windowX !== innerWidth || windowY !== document.body.scrollHeight) {
        setSize();
      }
    }, 200);
  }, []);

  return (
    <section className="app-container">
        <ParticleCanvas windowX={windowX} windowY={windowY} />
        <Menu />
        <Outlet />
        <Footer />
    </section>
  );
};

export default App;