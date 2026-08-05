import React from 'react';

// Simple Spinner component for displaying loading state
function Spinner() {
  return (
    <div className="spinner-box">
      <div className="spinner-ring"></div>
      <p>Loading GitHub Repositories...</p>
    </div>
  );
}

export default Spinner;
