import React from 'react';

// Header component receiving student name via props from App.jsx
function Header(props) {
  return (
    <div className="header-box">
      {/* Rendering name prop dynamically */}
      <h1>{props.name}'s Student Portfolio</h1>
      <p>Enrollment No: 24CS054 | Branch: CSE (5th Sem)</p>
      <p>CSPIT, CHARUSAT University</p>
    </div>
  );
}

export default Header;
