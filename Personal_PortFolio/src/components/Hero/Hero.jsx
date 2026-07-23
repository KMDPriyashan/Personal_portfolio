import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Hero.css';
import profileImage from '../../assets/profile-placeholder.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">Welcome to my Portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">
            Building robust software solutions and turning ideas into seamless mobile experiences. Passionate about modern development frameworks and innovative problem-solving.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#projects" className="btn-secondary">
              <i className="fas fa-arrow-right"></i> View My Work
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <img 
              src={profileImage} 
              alt={personalInfo.name} 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;