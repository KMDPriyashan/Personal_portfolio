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
            <span className="logo-text">KMD<span>Priyashan</span></span>
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

        <div className="header-social">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
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