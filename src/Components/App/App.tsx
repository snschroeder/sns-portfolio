import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

interface PageDimensions {
  pageWidth: number;
  pageHeight: number;
}

export default function App() {

  const [pageDimensions, setPageDimensions] = useState({} as PageDimensions);
  const [scrollHeight, setScrollHeight] = useState(0);

  const appContainerRef: React.Ref<any> = useRef();

  const setDimensions = () => {
    const pageWidth = innerWidth;
    let pageHeight = innerHeight;

    if (scrollHeight > pageHeight) {
      pageHeight = scrollHeight;
    }
    setPageDimensions({ pageWidth, pageHeight });
  }

  useEffect(() => {
    setScrollHeight(appContainerRef.current.scrollHeight);
    setDimensions();
  }, [pageDimensions, scrollHeight])

  return (
    <section className="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={pageDimensions.pageWidth} windowY={pageDimensions.pageHeight} />
        <Menu />
        <Outlet />
        <Footer />
    </section>
  );
};
