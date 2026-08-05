import React from 'react';

// ErrorMessage component for displaying fetch failure details via props
function ErrorMessage(props) {
  return (
    <div className="error-box">
      <p><strong>Error:</strong> {props.message}</p>
    </div>
  );
}

export default ErrorMessage;
