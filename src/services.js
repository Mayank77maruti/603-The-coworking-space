import React from 'react';
import './services.css';

const services = [
  {
    title: "Consulting",
    description: "Expert advice to help your business thrive in today's market.",
    icon: "📈",
  },
  {
    title: "Web Development",
    description: "Creating stunning and responsive websites tailored to your needs.",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description: "Innovative marketing strategies to boost your online presence.",
    icon: "📊",
  },
  {
    title: "SEO Optimization",
    description: "Optimizing your website to rank higher on search engines.",
    icon: "🔍",
  },
  {
    title: "Graphic Design",
    description: "Visually appealing designs that capture your brand's essence.",
    icon: "🎨",
  },
  {
    title: "App Development",
    description: "Building user-friendly mobile applications for Android & iOS.",
    icon: "📱",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We offer a range of services to help your business grow and succeed.</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <footer className="services-footer">
        <p>Contact us today to learn how we can help you!</p>
      </footer>
    </div>
  );
};

export default ServicesPage;
