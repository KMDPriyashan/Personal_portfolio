import React, { useState, useEffect } from 'react';
import socialLinks from '../../config/socialLinks';
import './Header.css';

const Header = ({ activeSection, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">K.M.D<span>Priyashan</span></span>
          </a>
        </div>

        <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={activeSection === link.id ? 'active' : ''}
                onClick={() => setMobileMenu(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header-actions">
          {/* Social Media Icons */}
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
            {socialLinks.twitter && socialLinks.twitter !== '#' && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
            <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
            <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
            <span className={`bar ${mobileMenu ? 'active' : ''}`}></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;