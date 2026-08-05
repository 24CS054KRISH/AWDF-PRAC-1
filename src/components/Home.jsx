import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';

// Home Page Component assembling Header, About, and Skills
function Home() {
  const studentName = "Krish Mendapara";
  const skillsArray = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "React.js Basics",
    "React Router",
    "Vite Build Tool",
    "C / C++ Programming",
    "Git & GitHub"
  ];

  return (
    <div>
      <Header name={studentName} />
      <About />
      <Skills skillList={skillsArray} />
    </div>
  );
}

export default Home;
