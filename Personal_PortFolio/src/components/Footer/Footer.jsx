import React from 'react';
import socialLinks from '../../config/socialLinks';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  // Check if social links exist
  const hasSocialLinks = () => {
    return Object.values(socialLinks).some(link => link && link !== '#');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>K.M.D<span>Priyashan</span></h3>
            <p>Engineer & Mobile Application Developer</p>
          </div>
          
          {/* Social Media Icons - Fixed */}
          <div className="footer-social">
            {socialLinks.linkedin && socialLinks.linkedin !== '#' && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            
            {socialLinks.github && socialLinks.github !== '#' && (
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-link github"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            
            {socialLinks.facebook && socialLinks.facebook !== '#' && (
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            
            {socialLinks.twitter && socialLinks.twitter !== '#' && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="social-link twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            
            {socialLinks.instagram && socialLinks.instagram !== '#' && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} K.M.D Priyashan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;