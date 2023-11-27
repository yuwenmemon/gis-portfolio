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
          {project.projectLink && (
            <a
              href={project.projectLink}
              className="project-page-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
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
        description: (
          <div>
            This project is an overview of the CAL FIRE identified hazard zones
            in Riverside County. It identifies which neighborhoods contain a
            high percentage of land area within a Fire Hazard Zones, as well as
            identified individual residential parcels within the hazard zone.
            Detailed attention is given to the neighborhoods of La Sierra Hills
            and Alessandro Heights, which both contain a substantial portion of
            land within the hazard zones.
          </div>
        ),
        imageUrl: 'riverside4.png',
        projectLink: 'projects/Memon_Module6_Assignment.pdf',
      };
    case 'atlas':
      return {
        title: 'Drinking Water Contaminants Atlas',
        description: (
          <div>
            This is an atlas themed around water quality in California. It takes
            a county-by-county view at both drinking water contaminant scores as
            assigned by{' '}
            <a
              href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40"
              target="_blank"
              rel="noopener noreferrer"
            >
              California OEHHA
            </a>
            , as well as the threats to groundwater posed by sites at a census
            tract level. The atlas was compiled using ArcGIS Pro's{' '}
            <a
              href="https://pro.arcgis.com/en/pro-app/latest/help/layouts/map-series.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Map Series
            </a>{' '}
            feature, which allows for the creation of a series of maps based on
            a single layout template.
          </div>
        ),
        imageUrl: 'atlas1.png',
        projectLink: 'projects/Memon Module 4 Assignment.pdf',
      };
    case 'viewshed':
      return {
        title: 'Cell Tower Viewshed Analysis',
        description: (
          <div>
            Doing a little bit of role-playing as a GIS analyst hired by
            T-Mobile, this uses ArcGIS Pro's{' '}
            <a
              href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/viewshed.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              viewshed analysis
            </a>{' '}
            capabilities to consider three scenarios by which to extend coverage
            for cell service within Los Angeles County.
          </div>
        ),
        imageUrl: 'viewshed2.png',
        projectLink: 'projects/Memon Module 3 Assignment.pdf',
      };
    case 'sffilmstory':
      return {
        title: 'Storybook: Film Locations of San Francisco',
        description: (
          <div>
            This is a fun little, film-themed storybook I created using Google
            Earth. It is a tour of San Francisco via various famous film
            locations within the city. Each location is accompanied by a clip of
            the film in which it appears. The tour is meant to be a fun way to
            explore the city, as well as a way to highlight the various great
            films that have been shot in San Francisco over the years.
          </div>
        ),
        imageUrl: 'film2.png',
        projectLink:
          'https://earth.google.com/earth/d/1VkVogKiIN75BjANd2VLD5l5F2j7L49s-?usp=sharing',
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
