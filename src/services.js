// src/Services.js
import React from 'react';
import { Laptop, User, Settings, Shield } from 'lucide-react';
import './services.css';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and high-performing websites.',
    icon: <Laptop />,
  },
  {
    id: 2,
    title: 'Consulting',
    description: 'Expert advice to help you achieve your business goals.',
    icon: <User />,
  },
  {
    id: 3,
    title: 'Technical Support',
    description: '24/7 support to ensure your operations run smoothly.',
    icon: <Settings />,
  },
  {
    id: 4,
    title: 'Security Services',
    description: 'Protecting your data with top-notch security solutions.',
    icon: <Shield />,
  },
];

const Services = () => {
  return (
    <main className="services-container">
      <section className="hero-section">
        <h1>Our Services</h1>
        <p>Providing exceptional solutions tailored to your needs.</p>
      </section>

      <section className="services-list">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
