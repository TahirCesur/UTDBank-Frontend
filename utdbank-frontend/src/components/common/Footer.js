import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer class="footer-bg">
      <div class="container">
        <div class="footer-upper">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
              <div class="footer-content-item">
                <div class="footer-logo">
                  <Link to="/" onClick={scrollToTop}>
                    <img src="/assets/images/logo-white.png" alt="logo" />
                  </Link>
                </div>
                <div class="footer-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiisicing elit, sed
                    do eiusmod tempor inc Neque porro quisquam est qui dolorem
                    aliquam quaerat luptatem. sed do eiusmod tempor inc
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
              <div class="footer-content-list footer-content-item">
                <div class="footer-content-title">
                  <h3>Support</h3>
                </div>
                <ul class="footer-details footer-list">
                  <li>
                    <Link to="/faqs" onClick={scrollToTop}>
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={scrollToTop}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions" onClick={scrollToTop}>
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-us" onClick={scrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
              <div class="footer-content-list footer-content-item">
                <div class="footer-content-title">
                  <h3>Company</h3>
                </div>
                <ul class="footer-details footer-list">
                  <li>
                    <Link to="/about-us" onClick={scrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={scrollToTop}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={scrollToTop}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" onClick={scrollToTop}>
                      Our Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="footer-content-list footer-content-item">
                <div class="footer-content-title">
                  <h3>Address</h3>
                </div>
                <ul class="footer-details footer-list">
                  <li>
                    Address:
                    <span>456 Labisto Parkways, CA, United States</span>
                  </li>
                  <li>
                    Message:
                    <span>
                      <a href="/cdn-cgi/l/email-protection#96fff8f0f9d6f7fafff7b8f5f9fb">
                        <span
                          class="__cf_email__"
                          data-cfemail="224b4c444d62434e4b430c414d4f"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </span>
                  </li>
                  <li>
                    Phone:
                    <span>
                      <a href="tel:(+00)67834598">(+00) 678 345 98</a>
                    </span>
                  </li>
                  <li>
                    Faq: <span>+(456) 332-897-234</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-lower">
          <div class="footer-lower-item footer-copyright-text">
            <p>
              Copyright ©2021 Design & Developed by
              <a href="https://techproeducation.com" target="_blank">
                <br></br>Techpro Education
              </a>
            </p>
          </div>
          <div class="footer-lower-item footer-social-logo">
            <ul class="footer-social-list">
              <li class="social-btn social-btn-fb">
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li class="social-btn social-btn-tw">
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li class="social-btn social-btn-ins">
                <a href="#">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
              <li class="social-btn social-btn-pin">
                <a href="#">
                  <i class="bx bxl-pinterest-alt"></i>
                </a>
              </li>
              <li class="social-btn social-btn-yt">
                <a href="#">
                  <i class="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
