import React from 'react';
import './ContactPopup.css';

function ContactPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:sharmayuvraj1404@gmail.com">sharmayuvraj1404@gmail.com</a></p>
        <p>
          LinkedIn: 
          <a href="https://www.linkedin.com/in/theyuvrajsharma/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="linkedin-icon"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPopup;
