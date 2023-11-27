import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './ProjectPage.css'; // Make sure to import the CSS file

function ProjectPage() {
  const { projectId } = useParams(); // Assuming you're using URL params
  const project = getProjectDetails(projectId); // Implement this function based on how you fetch project data

  return (
    <div>
      <div className="project-page-header">
        <h1>{project.title}</h1>
      </div>
      <div className="project-page-content">
        <div className="project-page-description">
          {project.description}
          <a
            href={project.projectLink}
            className="project-page-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
        <div className="project-page-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      </div>
    </div>
  );
}

// Dummy function - replace with your actual data fetching logic
function getProjectDetails(projectId) {
  // Fetch project details based on projectId
  // Return an object with title, description, imageUrl
  switch (projectId) {
    case 'sonoma_hazard':
      return {
        title: 'Sonoma County Hazard Scoring',
        description: (
          <div>
            This project analyzes the risks posed by earthquakes, floods,
            landslides, and wildfires to the various areas of Sonoma County.
            Using GIS and spatial analysis, I created a hazard score for each
            risk factor and assembled a cumulative "risk score" using map
            algebra. The scores were then used to categorize cities average
            risks withing their boundaries, as well as individual risk scores
            for buildings.
          </div>
        ),
        imageUrl: 'sonoma2.png',
        projectLink: 'projects/Memon_Final_Assignment.pdf',
      };
    case 'sonoma_earthquake':
      return {
        title: 'Sonoma Earthquake Hazard 3D View',
        description: (
          <div>
            This project uses the{' '}
            <a href="https://plugins.qgis.org/plugins/Qgis2threejs/">
              Qgis2threejs
            </a>{' '}
            plugin to create an interactive 3D web model for visualizing the
            earthquake risks across Sonoma county. It focuses on the risks posed
            by the San Andreas, Maacama, and Rodgers Creeks faults' respective
            shaking zones and the community buildings that fall within them.
          </div>
        ),
        imageUrl: 'earthquake2.png',
        projectLink: 'projects/Sonoma_Web_View/index.html',
      };
    case 'riverside':
      return {
        title: 'Fire Hazard in Riverside County',
        description: 'Project 2 Description...',
        imageUrl: 'riverside3.png',
      };
    case 'atlas':
      return {
        title: 'Drinking Water Contaminants Atlas',
        description: 'Project 3 Description...',
        imageUrl: 'atlas2.png',
      };
    case 'viewshed':
      return {
        title: 'Cell Tower Viewshed Analysis',
        description: 'Project 4 Description...',
        imageUrl: 'viewshed2.png',
      };
    case 'sffilmstory':
      return {
        title: 'Storybook: Film Locations of San Francisco',
        description: 'Project 6 Description...',
        imageUrl: 'film2.png',
      };
    default:
      return {
        title: 'Not Found',
        description: 'Oops! Project not found.',
        imageUrl: 'headshot.jpg',
      };
  }
}

export default ProjectPage;
