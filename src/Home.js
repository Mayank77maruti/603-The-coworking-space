import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'
import Aboutus from './About';




const Home = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img src="https://fefevs.sirv.com/603logo%20(1).avif" width="160" height="50" alt="Grilli - Home" />
          </Link>
          <nav className="navbar" data-navbar>
            <button className="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
            <Link to="/" className="logo">
              <img src="https://fefevs.sirv.com/603logo%20(1).avif" width="160" height="50" alt="Grilli - Home" />
            // </Link>
            // <ul className="navbar-list">
            //   <li className="navbar-item">
            //     <Link to="/" className="navbar-link hover-underline active">
            //       <div className="separator"></div>
            //       <span className="span">Home</span>
            //     </Link>
            //   </li>
            //   <li className="navbar-item">
            //     <Link to="/services" className="navbar-link hover-underline">
            //       <div className="separator"></div>
            //       <span className="span">Services</span>
            //     </Link>
            //   </li>
            //   <li className="navbar-item">
            //     <Link to="/aboutus" className="navbar-link hover-underline">
            //       <div className="separator"></div>
            //       <span className="span">About</span>
            //     </Link>
            //   </li>
            //   <li className="navbar-item">
            //     <Link to="#" className="navbar-link hover-underline">
            //       <div className="separator"></div>
            //       <span className="span">Contact</span>
            //     </Link>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              
             
              <address className="body-4">
                Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
              </address>
              <a href="mailto:sales@603thecoworkingspace.com" className="body-4 contact-link">sales@603thecoworkingspace.com</a>
              <address className="body-4">Booking Request : +919136036603
/
+919920207026 </address>
              <p className="body-4">Open : 09:00 am - 01:00 pm</p>
            </div>
          </nav>
          <SignInButton>
  <button className="btn btn-secondary">
    <>
      <span className="text text-1">login</span>
      <span className="text text-2" aria-hidden="true">login</span>
    </>
  </button>
</SignInButton>
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
      <main>
        <article>
          <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
              <li className="slider-item active" data-hero-slider-item>
                <div className="container">
                  <div className="slider-bg">
                  <img src="https://fefevs.sirv.com/sunmill-loc.png" width="1880" height="950" alt="" className="img-cover" />

                  </div>
                  <p className="label-2 section-subtitle slider-reveal">Classic Elegance</p>
                  <h1 className="display-1 hero-title slider-reveal">
                    Create Your Space <br />
                    that breathe creativity
                  </h1>
                  <p className="body-2 hero-text slider-reveal">
                    Best working environment that suits your business needs.
                  </p>
                  <a href="https://layout2-xi.vercel.app/" className="btn btn-primary slider-reveal">
                       <span className="text text-1">Make Your Layout</span>
                        <span className="text text-2" aria-hidden="true">Make Your Layout</span>
                  </a>
                </div>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src="https://fefevs.sirv.com/Matulya5.JPG" width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">delightful experience</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Transforming offices into <br />
                  vibrant stories
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Spaces that are occupied by Corporates and Start ups, designed with your business in mind
                </p>
                <a href="https://layout2-xi.vercel.app/" className="btn btn-primary slider-reveal">
                       <span className="text text-1">Make Your Layout</span>
                        <span className="text text-2" aria-hidden="true">Make Your Layout</span>
                </a>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src="https://fefevs.sirv.com/Amore.JPG" width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">amazing & elegence</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Where Every Floor <br />
                  tells a story
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Come with your team & experience the joy of inspiring office design.
                </p>
                <a href="https://layout2-xi.vercel.app/" className="btn btn-primary slider-reveal">
                       <span className="text text-1">Make Your Layout</span>
                        <span className="text text-2" aria-hidden="true">Make Your Layout</span>
                </a>
              </li>
            </ul>
            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
              <ion-icon name="chevron-back"></ion-icon>
            </button>
            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
          </section>
          <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Luxurious Office Interiors</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
        We offer top-notch products designed to meet all your office space needs.
        </p>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src="https://fefevs.sirv.com/benjamin-child-0sT9YhNgSEs-unsplash.avif" width="285" height="336" loading="lazy" alt="Breakfast" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <h1>Meeting Room</h1>
                </h3>
                {/* <a href="#" className="btn-text hover-underline label-2">View Space</a> */}
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src="https://fefevs.sirv.com/aerial.jpg" width="285" height="336" loading="lazy" alt="Appetizers" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <h1>Aerial Lights</h1>
                </h3>
                {/* <a href="#" className="btn-text hover-underline label-2">View Space</a> */}
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src="https://fefevs.sirv.com/the-9th-coworking--MezGpfNBTo-unsplash.avif" width="285" height="336" loading="lazy" alt="Drinks" className="img-cover" />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <h1>Manager Desk</h1>
                </h3>
                {/* <a href="#" className="btn-text hover-underline label-2">View Space</a> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Welcome to 603 Interiors</h2>
          <p className="section-text">
          At 603 Interiors, we believe that the right workspace can transform the way you work. Our expertise in designing functional, aesthetically pleasing, and customized office spaces sets us apart. With a dedicated in-house design team that has successfully crafted inspiring environments for 603 The Coworking Space, we bring the same innovation and precision to your corporate office.
Whether you're looking to redesign your existing office or create a new space from scratch, 603 Interiors offers end-to-end solutions tailored to your business needs. Experience the perfect blend of creativity, efficiency, and functionality with 603 Interiors – where every space is designed with purpose.

          </p>
          <div className="contact-label">Book Through Call</div>
          <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+91 9136036603</a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </div>
        <figure className="about-banner">
          <img src={`${process.env.PUBLIC_URL}https://fefevs.sirv.com/Untitled20-202024-05-14T202107.959.png`} width="570" height="570" loading="lazy" alt="about banner"
            className="w-100" data-parallax-item data-parallax-speed="1" />
          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img src={`${process.env.PUBLIC_URL}/images/image-4.jpg`} width="285" height="285" loading="lazy" alt=""
              className="w-100" />
          </div>
          <div className="abs-img abs-img-2 has-before">
            <img src={`${process.env.PUBLIC_URL}/images/badge-2.png`} width="133" height="134" loading="lazy" alt="" />
          </div>
        </figure>
      </div>
    </section>
    <section className="section testi text-center has-bg-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://fefevs.sirv.com/the-knowledge-academy-offices-dubai-2-1200x800-compact.jpg)` }} aria-label="testimonials">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="quote"></div>
        <div className="glass-box">
          <p className="headline-2 testi-text" style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}>
            Creativity flows freely at 603 The Coworking Space. As a content creator, I find the ambiance truly inspiring. Being surrounded by fellow creatives has led to unexpected collaborations and projects. It's like working in a hub of innovation, and I couldn't be happier with my choice.
          </p>
          <div className="profile">
            <img src={`${process.env.PUBLIC_URL}/images/testi-avatar.jpg`} width="100" height="100" loading="lazy" alt="Sam Jhonson" className="img" />
            <p className="label-2 profile-name">Sam Jhonson</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>
        <h2 className="section-title headline-1 text-center">Upcoming Offices</h2>

        <ul className="grid-list">
          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ "--width": "350", "--height": "450" }}>
                <img
                  src="./images/copernico-p_kICQCOM4s-unsplash (1).avif"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2024-09-15">15/09/2024</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Main Office</p>
                <h3 className="card-title title-2 text-center">
                  The Main Office is the Place Which has to be designed to its best.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ "--width": "350", "--height": "450" }}>
                <img
                  src="./images/google-oc-rapt-studio-office-design-9-700x467.avif"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2024-09-08">08/09/2024</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Main Cabinete</p>
                <h3 className="card-title title-2 text-center">
                  Cabinait is the place for best productive work.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ "--width": "350", "--height": "450" }}>
                <img
                  src="./images/jose-losada-DyFjxmHt3Es-unsplash.avif"
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2024-09-03">03/09/2024</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Main Centre</p>
                <h3 className="card-title title-2 text-center">
                  Main Center is the place for best productive work.
                </h3>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">Check Out Layout</span>
          <span className="text text-2" aria-hidden="true">Check Out Layout</span>
        </a>
      </div>
    </section>
        </article>
      </main>
      <footer className="footer section has-bg-image text-center" style={{ backgroundImage: "url('https://fefevs.sirv.com/modern-room-office-black-background-ai-generated-photo.jpg')" }}>
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="#" className="logo">
                <img src="./images/603logo (1).avif" width="160" height="50" loading="lazy" alt="grilli home" />
              </a>
              <address className="body-4">
                Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
              </address>
              <a href="mailto:sales@603thecoworkingspace.com" className="body-4 contact-link">sales@603thecoworkingspace.com</a>
              <address className="body-4">Booking Request : +919136036603
/
+919920207026 </address>
              <p className="body-4">Open : 09:00 am - 01:00 pm</p>
              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>
              <p className="title-1">Get News & Offers</p>
              <p className="label-1">
                Subscribe us & Get <span className="span">25% Off.</span>
              </p>
              <form action="" className="input-wrapper">
                <div className="icon-wrapper">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                  <input type="email" name="email_address" placeholder="Your email" autoComplete="off" className="input-field" />
                </div>
                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Subscribe</span>
                  <span className="text text-2" aria-hidden="true">Subscribe</span>
                </button>
              </form>
            </div>
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Home</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Services</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">About Us</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Contact</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
              </li>
             
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024 . All Rights Reserved | Crafted by <a href="603thecoworkingspace.com" target="_blank" className="link">603 The Coworking Space</a>
            </p>
          </div>
        </div>
      </footer>
      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <script src="./script.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Home;
