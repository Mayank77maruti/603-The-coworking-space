import React from 'react';
import { User, Briefcase, Award, ChevronRight, Mail } from 'lucide-react';
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">Innovating for a Better Tomorrow</p>
      </section>

      <section className="who-we-are">
        <h2 className="about-subtitle">Who We Are</h2>
        <p className="about-text">
          We are a team of passionate professionals dedicated to providing the best services in the industry.
          With years of experience, our mission is to transform the way our clients experience business, 
          delivering innovative and high-quality solutions.
        </p>
        <div className="team-stats">
          <div className="stat-item">
            <User size={24} />
            <span>50+ Experts</span>
          </div>
          <div className="stat-item">
            <Briefcase size={24} />
            <span>200+ Projects</span>
          </div>
          <div className="stat-item">
            <Award size={24} />
            <span>15+ Awards</span>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-text">
            To create exceptional experiences and solutions that exceed expectations, fostering growth and success for 
            our clients, partners, and community.
          </p>
        </div>
        <div className="vision">
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-text">
            We aspire to be the leading provider of innovative solutions, creating a positive impact and shaping a better 
            future for our industry and clients.
          </p>
        </div>
      </section>

      <section className="our-values">
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
      </section>

      <section className="our-journey">
        <h2 className="about-subtitle">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="year">2010</div>
            <div className="event">Founded with a vision to revolutionize the industry</div>
          </div>
          <div className="timeline-item">
            <div className="year">2015</div>
            <div className="event">Expanded operations globally, opening offices in 5 countries</div>
          </div>
          <div className="timeline-item">
            <div className="year">2020</div>
            <div className="event">Launched groundbreaking AI-powered solutions</div>
          </div>
          <div className="timeline-item">
            <div className="year">2023</div>
            <div className="event">Achieved carbon neutrality and committed to sustainable practices</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="about-subtitle">Join Our Journey</h2>
        <p className="about-text">
          We're always looking for talented individuals to join our team. If you're passionate about innovation and making a difference, we'd love to hear from you.
        </p>
        <a href="/careers" className="cta-button">
          Explore Careers <ChevronRight size={20} />
        </a>
      </section>

      <section className="contact-section">
        <h2 className="about-subtitle">Get in Touch</h2>
        <p className="about-text">
          Have questions or want to learn more about our services? We'd love to hear from you!
        </p>
        <a href="mailto:info@company.com" className="contact-button">
          <Mail size={20} /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;