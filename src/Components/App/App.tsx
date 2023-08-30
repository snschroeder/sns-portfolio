import React from 'react';

import Header from '../Header/Header';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';

import './App.css';

function App() {
  return (
    <section className="app-container">
      <Header />
      <About />
      <ContactForm />
    </section>
  );
}

export default App;
