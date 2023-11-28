import React from 'react';
import { Link } from 'react-router-dom';
import sonomaPreviewImg from './sonoma.png';
import earthquakePreviewImg from './earthquake.png';
import riversidePreviewImg from './riverside.png';
import atlasPreviewImg from './atlas.png';
import viewshedPreviewImg from './viewshed.png';
import filmPreviewImg from './film.png';
import './MainPage.css';

function MainPage() {
  const projects = [
    {
      id: 1,
      title: 'Sonoma County Hazard Scoring',
      previewImage: sonomaPreviewImg,
      caption: 'Click for more details >',
      link: '/project/sonoma_hazard',
    },
    {
      id: 2,
      title: 'Sonoma Earthquake Hazard 3D View',
      previewImage: earthquakePreviewImg,
      caption: 'Click for more details >',
      link: '/project/sonoma_earthquake',
    },
    {
      id: 3,
      title: 'Fire Hazard in Riverside County',
      previewImage: riversidePreviewImg,
      caption: 'Click for more details >',
      link: '/project/riverside',
    },
    {
      id: 4,
      title: 'Drinking Water Contaminants Atlas',
      previewImage: atlasPreviewImg,
      caption: 'Click for more details >',
      link: '/project/atlas',
    },
    {
      id: 5,
      title: 'Cell Tower Viewshed Analysis',
      previewImage: viewshedPreviewImg,
      caption: 'Click for more details >',
      link: '/project/viewshed',
    },
    {
      id: 6,
      title: 'Storybook: Film Locations of San Francisco',
      previewImage: filmPreviewImg,
      caption: 'Click for more details >',
      link: '/project/sffilmstory',
    },
  ];

  return (
    <div className="main-page-container">
      <div className="about-me">
        Hi! I'm a{' '}
        <a
          href="https://github.com/yuwenmemon"
          className="highlighted no-underline-on-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software Engineer
        </a>{' '}
        with an interest in{' '}
        <span className="highlighted no-underline-on-hover">GIS</span>,{' '}
        <span className="highlighted no-underline-on-hover">maps</span>, and{' '}
        <span className="highlighted no-underline-on-hover">cartography</span>.
        I currently live and work in{' '}
        <a
          href="https://maps.app.goo.gl/ccDp66nfxdoXkBMGA"
          className="highlighted no-underline-on-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Francisco, CA
        </a>
        .
      </div>
      <h2 className="portfolio-header">GIS Portfolio</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-tile">
            <Link to={project.link}>
              <div className="project-image">
                <img src={project.previewImage} alt={project.title} />
              </div>
              <div className="project-caption">{project.caption}</div>
            </Link>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
