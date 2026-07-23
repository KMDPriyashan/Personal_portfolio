import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import heroImage from '../../assets/hero.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">{personalInfo.about}</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">📧 Email:</span>
                <span className="detail-value">dpkonarauni2001@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Location:</span>
                <span className="detail-value">Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎓 Education:</span>
                <span className="detail-value">{personalInfo.university}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🚩 Address:</span>
                <span className="detail-value">{personalInfo.Address}</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-card">
              <i className="fas fa-code"></i>
              <img 
                src={heroImage} 
                alt="Cloud & Data Enthusiast" 
                className="about-hero-image"
              />
              <h3>Assoicate Software Engineer</h3>
              <p>Building the future with scalable software architectures and intelligent applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;