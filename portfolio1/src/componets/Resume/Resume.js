import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggle = () => setShowResume(!showResume);

  return (
    <div className="resume-section" id="Resume">
      <h2 className="resume-title">Resume</h2>
      <button className="resume-toggle-btn" onClick={handleToggle}>
        {showResume ? 'Hide Resume' : 'Show Resume'}
      </button>

      {showResume && (
        <div className="resume-content">
          <img
            src="/resume.jpg"
            alt="Yuvraj Resume"
            className="resume-image"
          />
          <a href="/resume-2025.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Resume;
