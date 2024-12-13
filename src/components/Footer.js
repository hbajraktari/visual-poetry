import React from "react";
import "../styles/components/_footer.css";
import images from "../assets/assets";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={images.footerIcon} alt="Main Logo" className="fter-logo" />
        </div>
        <div className="footer-column">
          <h5>Solutions</h5>
          <ul>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Resources</h5>
          <ul>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Request Demo</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 VerseVisions. All rights reserved.</p>
        <ul className="footer-links">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
