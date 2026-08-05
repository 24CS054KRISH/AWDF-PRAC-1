import React from 'react';

// Skills component rendering skillList prop dynamically using map()
function Skills(props) {
  return (
    <div className="card">
      <h2>My Skills</h2>
      
      {/* Rendering array items using map() */}
      <div className="skills-container">
        {props.skillList.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
