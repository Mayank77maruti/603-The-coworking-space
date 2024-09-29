import React from 'react';

const Services = () => {
  return (
    <div>
      <section className="section service bg-black-10 text-center" aria-label="services">
        <div className="container">
          <p className="section-subtitle label-2">Our Services</p>
          <h2 className="headline-1 section-title">We Provide The Best</h2>
          <p className="section-text">
            Explore our range of top-quality services designed to meet all your office space needs.
          </p>

          <ul className="grid-list">
            {/* Service Item 1 */}
            <li>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img
                      src="./images/service1.avif"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Meeting Room Design"
                      className="img-cover"
                    />
                  </figure>
                </a>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Office Interior Design</a>
                  </h3>
                  <p>Transform your workspace with our custom interior design services.</p>
                  <a href="#" className="btn-text hover-underline label-2">Learn More</a>
                </div>
              </div>
            </li>

            {/* Service Item 2 */}
            <li>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img
                      src="./images/service2.avif"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Furniture Installation"
                      className="img-cover"
                    />
                  </figure>
                </a>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Furniture & Fixture Setup</a>
                  </h3>
                  <p>High-quality furniture installation tailored to your office requirements.</p>
                  <a href="#" className="btn-text hover-underline label-2">Learn More</a>
                </div>
              </div>
            </li>

            {/* Service Item 3 */}
            <li>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img
                      src="./images/service3.avif"
                      width="285"
                      height="336"
                      loading="lazy"
                      alt="Conference Room Setup"
                      className="img-cover"
                    />
                  </figure>
                </a>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">Conference Room Setup</a>
                  </h3>
                  <p>State-of-the-art conference room solutions for all your business meetings.</p>
                  <a href="#" className="btn-text hover-underline label-2">Learn More</a>
                </div>
              </div>
            </li>

            {/* Add more service items as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
