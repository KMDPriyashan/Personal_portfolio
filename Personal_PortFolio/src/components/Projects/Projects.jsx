import React, { useState } from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Projects.css';

// Import project images
import projectImage1 from '../../assets/eduvista.png';
import projectImage2 from '../../assets/spag.png';
import projectImage3 from '../../assets/midgreen.png';
import projectImage4 from '../../assets/clothing-dark.png';
import projectImage5 from '../../assets/tripzy.png';
import projectImage6 from '../../assets/fitfood.png';

// Create an array of imported images
const projectImages = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle keyboard escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalOpen]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the projects I've worked on. Click "Details" to learn more.
        </p>
        <div className="projects-grid">
          {personalInfo.projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image at the top of the card */}
              <div className="project-image-container">
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.project-image-fallback').style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback" style={{ display: 'none' }}>
                  <span className="project-emoji">{project.image || '📁'}</span>
                </div>
                <div className="project-image-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={() => openModal(project)}
                    aria-label={`Quick view ${project.title}`}
                  >
                    <i className="fas fa-search-plus"></i> Quick View
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description && project.description.length > 100 
                    ? `${project.description.substring(0, 100)}...` 
                    : project.description}
                </p>
                <div className="project-tech">
                  {project.tech && project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech && project.tech.length > 3 && (
                    <span className="tech-tag more">+{project.tech.length - 3}</span>
                  )}
                </div>
                <div className="project-actions">
                  <button 
                    className="project-details-btn"
                    onClick={() => openModal(project)}
                    aria-label={`View details of ${project.title}`}
                  >
                    <i className="fas fa-eye"></i> Details
                  </button>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      View Project <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================ */}
      {/* PROJECT DETAILS MODAL */}
      {/* ============================================ */}
      {modalOpen && selectedProject && (
        <div 
          className="project-modal-overlay" 
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="project-modal">
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Modal Image */}
            <div className="modal-image-container">
              <img 
                src={projectImages[personalInfo.projects.indexOf(selectedProject) % projectImages.length]} 
                alt={selectedProject.title} 
                className="modal-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="modal-content">
              <div className="modal-icon">{selectedProject.image || '📁'}</div>
              <h2 id="modal-title" className="modal-title">{selectedProject.title}</h2>
              
              <div className="modal-tech">
                {selectedProject.tech && selectedProject.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-actions">
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                  >
                    <i className="fas fa-external-link-alt"></i> View Full Project
                  </a>
                )}
                <button 
                  className="btn-secondary-modal" 
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;