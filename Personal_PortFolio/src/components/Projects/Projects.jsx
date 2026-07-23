import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Projects.css';
// Import project images
import projectImage1 from '../../assets/eduvista.png';
import projectImage2 from '../../assets/hero.png';
import projectImage3 from '../../assets/hero.png';
import projectImage4 from '../../assets/hero.png';

// Create an array of imported images
const projectImages = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {personalInfo.projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image at the top of the card */}
              <div className="project-image-container">
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;