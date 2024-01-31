import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

type ContextType = { setResizeNeeded: (val: boolean) => void }

export default function App() {
  const [pageWidth, setPageWidth] = useState(innerWidth);
  const [pageHeight, setPageHeight] = useState(innerHeight);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [resizeNeeded, setResizeNeeded] = useState(false);

  const appContainerRef: React.Ref<any> = useRef();


  const setSize = () => {
    setPageWidth(innerWidth);
    setScrollHeight(appContainerRef.current.scrollHeight);
    
    if (scrollHeight > pageHeight && scrollHeight !== pageHeight) {
      setPageHeight(appContainerRef.current.scrollHeight);
    }
  }

  useEffect(() => {
    setSize();
    addEventListener('resize', setSize);
  })

  useEffect(() => {
    setSize();
    setResizeNeeded(false);
  }, [pageWidth, pageHeight, scrollHeight, resizeNeeded])

  return (
    <section className="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={pageWidth} windowY={pageHeight} />
        <Menu />
        <Outlet context={{ setResizeNeeded }} />
        <Footer />
    </section>
  );
};

export const useSetResizeNeeded = () => {
  return useOutletContext<ContextType>();
}