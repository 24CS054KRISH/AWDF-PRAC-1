import React from 'react';

// About component displaying student biography and information list
function About() {
  return (
    <div className="card">
      <h2>About Me</h2>
      
      <p className="about-text">
        Hello! My name is Krish Mendapara, and I am currently pursuing my B.Tech 
        in Computer Science and Engineering from CSPIT, CHARUSAT. I am passionate 
        about web development and eager to learn modern frontend technologies.
      </p>

      {/* Student credentials list */}
      <ul className="info-list">
        <li><strong>Name:</strong> Krish Mendapara</li>
        <li><strong>Enrollment No:</strong> 24CS054</li>
        <li><strong>Department:</strong> Computer Science & Engineering (CSE)</li>
        <li><strong>Semester:</strong> 5th Semester</li>
        <li><strong>College:</strong> CSPIT, CHARUSAT</li>
        <li><strong>Course:</strong> Advanced Web Development Frameworks (AWDF)</li>
      </ul>
    </div>
  );
}

export default About;
