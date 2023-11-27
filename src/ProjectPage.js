import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css'; // Make sure to import the CSS file

function ProjectPage() {
  const { projectId } = useParams(); // Assuming you're using URL params
  const project = getProjectDetails(projectId); // Implement this function based on how you fetch project data

  return (
    <div>
      <div className="small-header">
        <h2>{project.title}</h2>
      </div>
      <div className="project-content">
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <div className="project-image">
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
  return {
    title: "Project Title",
    description: "Project Description...",
    imageUrl: "path_to_project_image.jpg"
  };
}

export default ProjectPage;
