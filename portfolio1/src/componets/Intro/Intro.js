import React, { useEffect, useState } from "react";
import "./Intro.css";
import btnImg from '../../assets/hireme.png';

const texts = ["Yuvraj Sharma", "Web Developer!"];

const Intro = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showForm, setShowForm] = useState(false); // 💡 New state for popup form

  useEffect(() => {
    const currentString = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentString.substring(0, charIndex - 1)
        : currentString.substring(0, charIndex + 1);

      setCurrentText(updatedText);
      setCharIndex(prev => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="static-text1">HeLLo !</h1>
        <h1 className="static-text2"> I'm</h1>
        <h2 className="typing-line">
          <span className="typing-text">{currentText}</span>
          <span className="cursor">|</span>
        </h2>

        {/* 🚀 Hire Me Button triggers popup */}
        <button className="hirebtn" onClick={() => setShowForm(true)}>
          <img src={btnImg} alt="hireme" className="hireme" />
          Hire Me
        </button>
      </div>

      <div className="intro-right" />

      {/* 💬 Popup Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            <h2>Hire Me</h2>
            <form className="hire-form">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Contact Number" required />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
