import React from 'react';
import { User, Briefcase, Award, ChevronRight, Mail } from 'lucide-react';
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <h1 className="about-main-title">About Us</h1>
        <p className="about-main-tagline">Innovating for a Better Tomorrow</p>
      </section>

      {/* Who We Are Section */}
      <section className="about-who-we-are">
        <h2 className="about-section-subtitle">Who We Are</h2>
        <p className="about-description-text">
          We are a team of passionate professionals dedicated to providing the best services in the industry.
          With years of experience, our mission is to transform the way our clients experience business, 
          delivering innovative and high-quality solutions.
        </p>
        <div className="about-team-stats">
          <div className="about-stat-item">
            <User size={24} />
            <span>50+ Experts</span>
          </div>
          <div className="about-stat-item">
            <Briefcase size={24} />
            <span>200+ Projects</span>
          </div>
          <div className="about-stat-item">
            <Award size={24} />
            <span>15+ Awards</span>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-mission-vision">
        <div className="about-mission">
          <h2 className="about-section-subtitle">Our Mission</h2>
          <p className="about-description-text">
            To create exceptional experiences and solutions that exceed expectations, fostering growth and success for 
            our clients, partners, and community.
          </p>
        </div>
        <div className="about-vision">
          <h2 className="about-section-subtitle">Our Vision</h2>
          <p className="about-description-text">
            We aspire to be the leading provider of innovative solutions, creating a positive impact and shaping a better 
            future for our industry and clients.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <h2 className="about-section-subtitle">Our Values</h2>
        <div className="about-values-cards">
          <div className="about-value-card">
            <h3 className="about-value-title">Integrity</h3>
            <p className="about-value-description">We believe in honesty, transparency, and doing the right thing, always.</p>
          </div>
          <div className="about-value-card">
            <h3 className="about-value-title">Innovation</h3>
            <p className="about-value-description">Our commitment to creativity drives us to push boundaries and develop cutting-edge solutions.</p>
          </div>
          <div className="about-value-card">
            <h3 className="about-value-title">Excellence</h3>
            <p className="about-value-description">We strive for perfection, delivering high-quality results in everything we do.</p>
          </div>
          <div className="about-value-card">
            <h3 className="about-value-title">Collaboration</h3>
            <p className="about-value-description">We believe in the power of teamwork, working together to achieve remarkable outcomes.</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="about-journey-section">
        <h2 className="about-section-subtitle">Our Journey</h2>
        <div className="about-timeline">
          <div className="about-timeline-item">
            <div className="about-year">2010</div>
            <div className="about-event">Founded with a vision to revolutionize the industry</div>
          </div>
          <div className="about-timeline-item">
            <div className="about-year">2015</div>
            <div className="about-event">Expanded operations globally, opening offices in 5 countries</div>
          </div>
          <div className="about-timeline-item">
            <div className="about-year">2020</div>
            <div className="about-event">Launched groundbreaking AI-powered solutions</div>
          </div>
          <div className="about-timeline-item">
            <div className="about-year">2023</div>
            <div className="about-event">Achieved carbon neutrality and committed to sustainable practices</div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="about-cta-section">
        <h2 className="about-section-subtitle">Join Our Journey</h2>
        <p className="about-description-text">
          We're always looking for talented individuals to join our team. If you're passionate about innovation and making a difference, we'd love to hear from you.
        </p>
        <a href="/careers" className="about-cta-button">
          Explore Careers <ChevronRight size={20} />
        </a>
      </section>

      {/* Contact Section */}
      <section className="about-contact-section">
        <h2 className="about-section-subtitle">Get in Touch</h2>
        <p className="about-description-text">
          Have questions or want to learn more about our services? We'd love to hear from you!
        </p>
        <a href="mailto:info@company.com" className="about-contact-button">
          <Mail size={20} /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
