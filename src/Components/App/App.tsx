import React, { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

const App: React.FC = () => {
  const [windowX, setWindowX] = useState(0);
  const [windowY, setWindowY] = useState(0);

  const appContainerRef: React.Ref<any> = useRef();

  const setSize = () => {
    if (appContainerRef.current) {
      console.log('updating');
      setWindowX(innerWidth);
      setWindowY(appContainerRef.current.scrollHeight);
    }
  }

  useEffect(() => {
    setSize();
    addEventListener('resize', () => setSize());
  }, []);

  return (
    <section id="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={windowX} windowY={windowY} />
        <Menu />
        <Outlet />
        {/* <Footer /> */}
    </section>
  );
};

export default App;