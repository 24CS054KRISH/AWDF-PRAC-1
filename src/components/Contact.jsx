import React, { useState } from 'react';

// Contact component with useState #2 (Controlled input handling)
function Contact() {
  // useState #2: Controlled input state for user message
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  // Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(message);
    setMessage('');
  };

  return (
    <div className="card">
      <h2>Contact Me</h2>
      
      <p style={{ marginBottom: '15px', fontSize: '15px' }}>
        <strong>Email:</strong> 24cs054@gmail.com
      </p>

      {/* Controlled input form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="userMsg" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', fontSize: '14px' }}>
          Send a Message:
        </label>
        
        <input
          type="text"
          id="userMsg"
          className="form-input"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="btn" style={{ marginTop: '10px' }}>
          Submit Message
        </button>
      </form>

      {/* Displaying submitted message below the form */}
      {submittedMessage && (
        <div className="submitted-box">
          <p><strong>Submitted Message:</strong></p>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
