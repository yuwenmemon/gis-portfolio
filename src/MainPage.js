import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Make sure to import the CSS file

function MainPage() {
  const projects = [
    {
      id: 1,
      title: 'Sonoma County Hazard Scoring',
      imageUrl: 'sonoma3.png',
      caption: 'Project 1 Description',
      link: '/project/sonoma_hazard',
    },
    {
      id: 2,
      title: 'Sonoma Earthquake Hazard 3D View',
      imageUrl: 'earthquake1.png',
      caption: 'Project 5 Description',
      link: '/project/sonoma_earthquake',
    },
    {
      id: 3,
      title: 'Fire Hazard in Riverside County',
      imageUrl: 'riverside1.png',
      caption: 'Project 2 Description',
      link: '/project/riverside',
    },
    {
      id: 4,
      title: 'Drinking Water Contaminants Atlas',
      imageUrl: 'atlas1.png',
      caption: 'Project 3 Description',
      link: '/project/atlas',
    },
    {
      id: 5,
      title: 'Cell Tower Viewshed Analysis',
      imageUrl: 'viewshed1.png',
      caption: 'Project 4 Description',
      link: '/project/viewshed',
    },
    {
      id: 6,
      title: 'Storybook: Film Locations of San Francisco',
      imageUrl: 'film1.png',
      caption: 'Project 6 Description',
      link: '/project/sffilmstory',
    },
  ];

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="project-tile">
          <Link to={project.link}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-caption">{project.caption}</div>
          </Link>
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
