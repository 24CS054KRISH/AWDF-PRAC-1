import React from 'react';

// Importing child components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // Student Name variable passed as prop to Header component
  const studentName = "Krish Mendapara";

  // Skills array passed as prop to Skills component
  const skillsArray = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "React.js Basics",
    "Vite Build Tool",
    "C / C++ Programming",
    "Git & GitHub"
  ];

  return (
    <div className="container">
      {/* Passing name prop to Header */}
      <Header name={studentName} />

      {/* About section component */}
      <About />

      {/* Passing skillList prop array to Skills */}
      <Skills skillList={skillsArray} />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
