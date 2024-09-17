import React from "react";
import {
  FaBriefcase,
  FaLightbulb,
  FaPalette,
  FaRocket,
  FaCogs,
} from "react-icons/fa";
import Accordian from "../components/Accordian";
import Accordian2 from "../components/Accordian2";
import img from "../images/Coworking.74e92a69fdb3e29e43b9.jpg";

const Aboutus = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img
              src="./images/603logo (1).avif"
              width="160"
              height="50"
              alt="Grilli - About"
            />
          </a>
          <nav className="navbar" data-navbar>
            <button
              className="close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
            <a href="#" className="logo">
              <img
                src="./images/603logo (1).avif"
                width="160"
                height="50"
                alt="Grilli - About"
              />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link hover-underline active">
                  <div className="separator"></div>
                  <span className="span">About</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#menu" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Spaces</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Images</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a
                href="mailto:booking@grilli.com"
                className="body-4 sidebar-link"
              >
                booking@grilli.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Booking Request</p>
              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>
          <a href="indexLayout.html" className="btn btn-secondary">
            <span className="text text-1">Make Your Space</span>
            <span className="text text-2" aria-hidden="true">
              Make Your Space
            </span>
          </a>
          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
          >
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
                    <img
                      src="./images/sunmill-loc_batcheditor_fotor (1).avif"
                      width="1880"
                      height="950"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <p className="label-2 section-subtitle slider-reveal">
                    Classic Elegance
                  </p>
                  <h1 className="display-1 hero-title slider-reveal">
                    Create Your Space <br />
                    that breathe creativity
                  </h1>
                  <p className="body-2 hero-text slider-reveal">
                    Best working environment that suits your business needs.
                  </p>
                  <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">Make Your Space</span>
                    <span className="text text-2" aria-hidden="true">
                      Make Your Space
                    </span>
                  </a>
                </div>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img
                    src="./images/heroLocation (1).avif"
                    width="1880"
                    height="950"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <p className="label-2 section-subtitle slider-reveal">
                  delightful experience
                </p>
                <h1 className="display-1 hero-title slider-reveal">
                  Transforming offices into <br />
                  vibrant stories
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Spaces that are occupied by Corporates and Start ups, designed
                  with your business in mind
                </p>
                <a href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">
                    Make Your Space
                  </span>
                </a>
              </li>
              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img
                    src="./images/sunshine-loc.webp"
                    width="1880"
                    height="950"
                    alt=""
                    className="img-cover"
                  />
                </div>
                <p className="label-2 section-subtitle slider-reveal">
                  amazing & elegence
                </p>
                <h1 className="display-1 hero-title slider-reveal">
                  Where Every Floor <br />
                  tells a story
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Come with your team & experience the joy of inspiring office
                  design.
                </p>
                <a href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">
                    Make Your Space
                  </span>
                </a>
              </li>
            </ul>
            <button
              className="slider-btn prev"
              aria-label="slide to previous"
              data-prev-btn
            >
              <ion-icon name="chevron-back"></ion-icon>
            </button>
            <button
              className="slider-btn next"
              aria-label="slide to next"
              data-next-btn
            >
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
            <a href="indexLayout.html" className="hero-btn has-after">
              <img
                src="./images/hero-icon.png"
                width="48"
                height="48"
                alt="booking icon"
              />
              <span className="label-2 text-center span">Book A Space</span>
            </a>
          </section>
        </article>
      </main>
      <div className="w-full bg-gray-200">
        {/* About Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 px-10 gap-x-8">
          <div className="container mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-1 md:gap-12 lg:gap-16 lg:px-8">
            {/* Text Section */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700]">
                About 603 Interiors
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                At 603 Interiors, we are passionate about creating workspaces
                that inspire and empower. As an extension of 603 The Coworking
                Space, our interior design division is built on years of
                experience in crafting innovative and functional office
                environments. Our team of skilled designers, architects, and
                project managers work closely with clients to deliver spaces
                that are not only visually stunning but also enhance
                productivity and well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-black via-gray-900 to-black px-10">
          <div className="container mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 px-6 lg:px-8">
            {/* Vision Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-full p-4 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                  <FaLightbulb className="w-8 h-8 text-primary-foreground text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-primary">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-300 text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                To revolutionize the corporate workspace by providing bespoke
                interior design solutions that cater to the evolving needs of
                businesses.
              </p>
            </div>

            {/* Mission Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-4 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                  <FaRocket className="w-8 h-8 text-secondary-foreground text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-secondary">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-300 text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                To deliver exceptional design services that combine creativity,
                functionality, and sustainability, ensuring that every office
                space we create is a true reflection of our client’s brand and
                culture.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full">
          <section className="w-full">
            <div
              className="relative w-full h-[300px] bg-fixed bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold px-6 py-2 rounded-md">
                  Why Choose Us?
                </h1>
              </div>
            </div>
            <Accordian />
            <Accordian2 />
          </section>
        </section>
      </div>
      <footer
        className="footer section has-bg-image text-center"
        style={{
          backgroundImage:
            "url('./images/fae955e3-de29-4d6b-a41a-85563f86a931.avif')",
        }}
      >
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="#" className="logo">
                <img
                  src="./images/603logo (1).avif"
                  width="160"
                  height="50"
                  loading="lazy"
                  alt="grilli home"
                />
              </a>
              <address className="body-4">
                Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra
                400052
              </address>
              <a
                href="mailto:booking@grilli.com"
                className="body-4 contact-link"
              >
                booking@grilli.com
              </a>
              <a href="tel:+88123123456" className="body-4 contact-link">
                Booking Request : +88-123-123456
              </a>
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
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Subscribe</span>
                  <span className="text text-2" aria-hidden="true">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Menus
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Our Chefs
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Google Map
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024 . All Rights Reserved | Crafted by{" "}
              <a
                href="603thecoworkingspace.com"
                target="_blank"
                className="link"
              >
                603 The Coworking Space
              </a>
            </p>
          </div>
        </div>
      </footer>
      <a
        href="#top"
        className="back-top-btn active"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <script src="./script.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Aboutus;
