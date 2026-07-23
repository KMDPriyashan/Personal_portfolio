import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Skills.css';

const Skills = () => {
  const categories = {
    Frontend: personalInfo.skills.filter(s => s.category === 'Frontend'),
    Backend: personalInfo.skills.filter(s => s.category === 'Backend'),
    Mobile: personalInfo.skills.filter(s => s.category === 'Mobile'),
    Cloud: personalInfo.skills.filter(s => s.category === 'Cloud'),
    DevOps: personalInfo.skills.filter(s => s.category === 'DevOps'),
    Database: personalInfo.skills.filter(s => s.category === 'Database'),
    Language: personalInfo.skills.filter(s => s.category === 'Language')
  };

  
  const topSkills = personalInfo.skills.filter(s => s.level >= 85);


  const getLevelDistribution = () => {
    const levels = {
      'Expert (90-100%)': 0,
      'Advanced (80-89%)': 0,
      'Intermediate (70-79%)': 0,
      'Beginner (0-69%)': 0
    };
    personalInfo.skills.forEach(skill => {
      if (skill.level >= 90) levels['Expert (90-100%)']++;
      else if (skill.level >= 80) levels['Advanced (80-89%)']++;
      else if (skill.level >= 70) levels['Intermediate (70-79%)']++;
      else levels['Beginner (0-69%)']++;
    });
    return levels;
  };

  const distribution = getLevelDistribution();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-overview">
          <div className="overview-card">
            <div className="overview-icon">🚀</div>
            <div className="overview-number">{personalInfo.skills.length}+</div>
            <div className="overview-label">Technologies</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">⭐</div>
            <div className="overview-number">{topSkills.length}</div>
            <div className="overview-label">Expert Skills</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">📅</div>
            <div className="overview-number">4+</div>
            <div className="overview-label">Years Experience</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🎓</div>
            <div className="overview-number">{personalInfo.certifications?.length || 0}</div>
            <div className="overview-label">Certifications</div>
          </div>
        </div>

        <h3 className="subsection-title">💻 Skills by Category</h3>
        <div className="skills-categories">
          {Object.entries(categories).map(([category, skills]) => (
            skills.length > 0 && (
              <div key={category} className="category-section">
                <h4 className="category-title">{category}</h4>
                <div className="category-skills">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <i className={skill.icon}></i>
                        </div>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-experience">{skill.experience}</span>
                        </div>
                        <span className="skill-level-badge">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="progress-glow"></div>
                        </div>
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <h3 className="subsection-title">🛠️ Tools & Technologies</h3>
        <div className="tools-grid">
          {personalInfo.tools?.map((tool, index) => (
            <div key={index} className="tool-item">
              <i className={tool.icon}></i>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">🎓 Certifications</h3>
        <div className="certifications-grid">
          {personalInfo.certifications?.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <p>{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;