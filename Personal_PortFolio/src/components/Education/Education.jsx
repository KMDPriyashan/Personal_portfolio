import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {personalInfo.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <span className="timeline-year">{edu.year}</span>
                </div>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;