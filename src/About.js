import React from 'react';
import "./about.css"
const aboutus = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <h2 className="about-subtitle">Who We Are</h2>
      <p className="about-text">
        We are a team of passionate professionals dedicated to providing the best services in the industry.
        With years of experience, our mission is to transform the way our clients experience business, 
        delivering innovative and high-quality solutions.
      </p>
      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-text">
        To create exceptional experiences and solutions that exceed expectations, fostering growth and success for 
        our clients, partners, and community.
      </p>
      <h2 className="about-subtitle">Our Vision</h2>
      <p className="about-text">
        We aspire to be the leading provider of innovative solutions, creating a positive impact and shaping a better 
        future for our industry and clients.
      </p>
      <h2 className="about-subtitle">Our Values</h2>
      <div className="about-values">
        <div className="value-card">
          <h3 className="value-title">Integrity</h3>
          <p className="value-text">We believe in honesty, transparency, and doing the right thing, always.</p>
        </div>
        <div className="value-card">
          <h3 className="value-title">Innovation</h3>
          <p className="value-text">Our commitment to creativity drives us to push boundaries and develop cutting-edge solutions.</p>
        </div>
        <div className="value-card">
          <h3 className="value-title">Excellence</h3>
          <p className="value-text">We strive for perfection, delivering high-quality results in everything we do.</p>
        </div>
        <div className="value-card">
          <h3 className="value-title">Collaboration</h3>
          <p className="value-text">We believe in the power of teamwork, working together to achieve remarkable outcomes.</p>
        </div>
      </div>
    </div>
  );
};

export default aboutus;