import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

const App: React.FC = () => {
  const [pageWidth, setPageWidth] = useState(innerWidth);
  const [pageHeight, setPageHeight] = useState(innerHeight);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [resizeNeeded, setResizeNeeded] = useState(false);

  const appContainerRef: React.Ref<any> = useRef();

  const requestResize = () => {
    setTimeout(() => {
      setPageHeight(innerHeight);
      setScrollHeight(appContainerRef.current.scrollHeight);
      setResizeNeeded(true);
    }, 50);
  }

  const setSize = () => {
    setPageWidth(innerWidth);
    setScrollHeight(appContainerRef.current.scrollHeight);
    
    if (scrollHeight > innerHeight && scrollHeight !== pageHeight) {
      setPageHeight(appContainerRef.current.scrollHeight);
    }
  }

  useEffect(() => {
    addEventListener('resize', setSize);
  })

  useEffect(() => {
    setSize();
    setResizeNeeded(false);
  }, [pageWidth, pageHeight, scrollHeight, resizeNeeded])

  return (
    <section className="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={pageWidth} windowY={pageHeight} />
        <Menu requestResize={requestResize} />
        <Outlet />
        <Footer />
    </section>
  );
};

export default App;