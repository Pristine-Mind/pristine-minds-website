import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ClientSatisfaction from './components/ClientSatisfaction';
import Values from './components/Values';
import StrategicExpansion from './components/StrategicExpansion';
import DevelopmentFocus from './components/DevelopmentFocus';
import Team from './components/Team';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <ClientSatisfaction />
      <Values />
      <StrategicExpansion />
      <DevelopmentFocus />
      <Team />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
