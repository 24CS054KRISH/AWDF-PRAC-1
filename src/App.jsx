import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Navigation Bar and Page Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Navigation Bar visible across all routes */}
        <NavBar />

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
