import React, { useState } from 'react';

// About component with useState #1 (Toggle UI visibility)
function About() {
  // useState #1: State variable to toggle visibility of extra student details
  const [showMore, setShowMore] = useState(false);

  // Function to handle toggle button click
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <h2>About Me</h2>
      
      <p className="about-text">
        Hello! My name is Krish Mendapara, and I am currently pursuing my B.Tech 
        in Computer Science and Engineering from CSPIT, CHARUSAT. I am passionate 
        about web development and eager to learn modern frontend technologies.
      </p>

      {/* Button for toggling UI visibility */}
      <button className="btn" onClick={handleToggle}>
        {showMore ? "Hide Extra Details" : "Show Extra Details"}
      </button>

      {/* Conditional rendering based on showMore state */}
      {showMore && (
        <ul className="info-list" style={{ marginTop: '15px' }}>
          <li><strong>Name:</strong> Krish Mendapara</li>
          <li><strong>Enrollment No:</strong> 24CS054</li>
          <li><strong>Department:</strong> Computer Science & Engineering (CSE)</li>
          <li><strong>Semester:</strong> 5th Semester</li>
          <li><strong>College:</strong> CSPIT, CHARUSAT</li>
          <li><strong>Course:</strong> Advanced Web Development Frameworks (AWDF)</li>
          <li><strong>Interests:</strong> Frontend Web Development, Problem Solving</li>
        </ul>
      )}
    </div>
  );
}

export default About;
