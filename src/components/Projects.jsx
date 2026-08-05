import React from 'react';

// Projects component displaying student project cards
function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Student Portfolio Application",
      description: "A React + Vite application created for AWDF Practical 1 & 2 featuring reusable components, React Router navigation, and useState hooks.",
      tech: "React, Vite, CSS"
    },
    {
      id: 2,
      title: "Basic Calculator Web App",
      description: "A responsive web calculator built with HTML, CSS, and JavaScript to perform basic arithmetic operations.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      id: 3,
      title: "To-Do List Application",
      description: "A simple task management application to add, complete, and track daily tasks.",
      tech: "JavaScript, LocalStorage"
    }
  ];

  return (
    <div>
      <div className="card">
        <h2>My Projects</h2>
        <p>Here are some of the web development projects I have built during my studies:</p>
      </div>

      {projectList.map((project) => (
        <div key={project.id} className="card">
          <h3 style={{ color: '#1e3a8a', marginBottom: '8px', fontSize: '18px' }}>
            {project.title}
          </h3>
          <p style={{ marginBottom: '12px', fontSize: '14px', color: '#444444' }}>
            {project.description}
          </p>
          <span className="skill-item">{project.tech}</span>
        </div>
      ))}
    </div>
  );
}

export default Projects;
