import React from "react";
import "./About.css";
import aboutImg from "../../assets/webd.webp"; // Replace with your image

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>
        <p className="about-desc">
          I’m Yuvraj Sharma — a  web developer passionate about crafting clean, responsive, and intuitive user interfaces. I combine creative vision with technical skills to design digital experiences that are both engaging and performant.<br /><br />

          Let’s work together to build something both functional and beautiful.
        </p>
      </div>

      <div className="about-right">
        <img src={aboutImg} alt="About Visual" className="about-img" />
      </div>
    </div>
  );
};

export default About;
