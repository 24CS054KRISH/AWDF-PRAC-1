import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
