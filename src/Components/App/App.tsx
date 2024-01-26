import React from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <section className="app-container">
        <ParticleCanvas />
        <Menu />
        <Outlet />
        <Footer />
    </section>
  );
};

export default App;