import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

interface OutletContextType {
  resizeNeeded: boolean;
  setResizeNeeded: (val: boolean) => void;
}

interface PageDimensions {
  pageWidth: number;
  pageHeight: number;
}

export default function App() {

  const [pageDimensions, setPageDimensions] = useState({} as PageDimensions);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [resizeNeeded, setResizeNeeded] = useState(false);

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
  }, [pageDimensions, resizeNeeded, scrollHeight])

  return (
    <section className="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={pageDimensions.pageWidth} windowY={pageDimensions.pageHeight} />
        <Menu />
        <Outlet context={{ resizeNeeded, setResizeNeeded }} />
        <Footer />
    </section>
  );
};

export const useSetResizeNeeded = () => {
  return useOutletContext<OutletContextType>();
}