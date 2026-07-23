import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">🚀 Welcome to my Portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">
            Building scalable cloud solutions and turning data into insights. 
            Passionate about modern web technologies and innovative problem-solving.
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
            <div className="avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;