import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const projects = [
    {
      id: 1,
      title: 'Sonoma County Hazard Scoring',
      imageUrl: process.env.PUBLIC_URL + '/sonoma3.png',
      caption: 'Click for more details >',
      link: '/project/sonoma_hazard',
    },
    {
      id: 2,
      title: 'Sonoma Earthquake Hazard 3D View',
      imageUrl: process.env.PUBLIC_URL + '/earthquake1.png',
      caption: 'Click for more details >',
      link: '/project/sonoma_earthquake',
    },
    {
      id: 3,
      title: 'Fire Hazard in Riverside County',
      imageUrl: process.env.PUBLIC_URL + '/riverside1.png',
      caption: 'Click for more details >',
      link: '/project/riverside',
    },
    {
      id: 4,
      title: 'Drinking Water Contaminants Atlas',
      imageUrl: process.env.PUBLIC_URL + '/atlas3.png',
      caption: 'Click for more details >',
      link: '/project/atlas',
    },
    {
      id: 5,
      title: 'Cell Tower Viewshed Analysis',
      imageUrl: process.env.PUBLIC_URL + '/viewshed1.png',
      caption: 'Click for more details >',
      link: '/project/viewshed',
    },
    {
      id: 6,
      title: 'Storybook: Film Locations of San Francisco',
      imageUrl: process.env.PUBLIC_URL + '/film1.png',
      caption: 'Click for more details >',
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
