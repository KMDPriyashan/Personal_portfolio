import React, { useState, useEffect } from 'react';
import socialLinks from '../../config/socialLinks';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">K.M.D<span>Priyashan</span></span>
          </a>
        </div>

        <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenu(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenu(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMobileMenu(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setMobileMenu(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setMobileMenu(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a></li>
        </ul>

        {/* Social Media Icons - Fixed */}
        <div className="header-social">
          {socialLinks.linkedin && socialLinks.linkedin !== '#' && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {socialLinks.github && socialLinks.github !== '#' && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialLinks.facebook && socialLinks.facebook !== '#' && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {socialLinks.twitter && socialLinks.twitter !== '#' && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks.instagram && socialLinks.instagram !== '#' && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>

        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;