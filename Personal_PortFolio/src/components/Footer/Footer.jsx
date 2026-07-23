import React from 'react';
import socialLinks from '../../config/socialLinks';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Your<span>Name</span></h3>
            <p>Cloud Computing & Big Data Specialist</p>
          </div>
          <div className="footer-social">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;