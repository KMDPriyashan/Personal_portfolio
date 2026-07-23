import React from 'react';
import { personalInfo } from '../../data/personalInfo';
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
                <span className="detail-value">your.email@gmail.com</span>
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
                <span className="detail-label">📚 Index:</span>
                <span className="detail-value">{personalInfo.index}</span>
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
              <h3>Cloud & Data Enthusiast</h3>
              <p>Building the future with cloud computing and big data technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;