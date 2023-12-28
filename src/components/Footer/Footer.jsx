import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="main-container">
        <div className="services">
          <div className="title">About</div>
          <div className="service-list">
            <span>Contact us</span>
            <span>About us</span>
            <span>Cozy cub wholesale</span>
            <span>Press</span>
          </div>
        </div>
        <div className="support">
          <div className="title">Help</div>
          <div className="support-list">
            <span>Payment</span>
            <span>Shopping</span>
            <span>Cancelation and return </span>
            <span>FAQ</span>
          </div>
        </div>
        <div className="company">
          <div className="title">Company</div>
          <div className="company-list">
            <span>About</span>
            <span>Blog</span>
            <span>Join Us</span>
          </div>
        </div>
        <div className="legal">
          <div className="title">Legal</div>
          <div className="legal-list">
            <span>Claim</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
        <div className="newsletter">
          <div className="title">Subscribe to our newsletter</div>
          <div className="newsletter-content">
            <span>
              Subscribe to our newsletter to get updated about discount and offers.
            </span>
            <div className="email">
              <input
                type="email"
                className="email-input"
                placeholder="Your email address…"
              />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
