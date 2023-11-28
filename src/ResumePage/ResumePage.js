import React from 'react';
import expensifyLogo from './expensify.png';
import mastercardLogo from './mastercard.png';
import washuLogo from './washu.png';
import './ResumePage.css';

const ExperienceSection = ({ title, period, children, logo }) => (
  <div className="experience-section">
    <img src={logo} alt={`${title} logo`} className="company-logo" />
    <div>
      <h2>{title}</h2>
      <p className="period">{period}</p>
      <ul>{children}</ul>
    </div>
  </div>
);

const EducationSection = ({ title, details, logo }) => (
  <div className="education-section">
    <img src={logo} alt={`${title} logo`} className="company-logo" />
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  </div>
);

const ResumePage = () => {
  return (
    <div className="resume-container">
      <div className="pdf-download-link">
        <a
          href={process.env.PUBLIC_URL + '/YuwenMemon_Resume2023_public.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline-on-hover"
        >
          One-Page Resume (PDF)
        </a>
      </div>

      <h1>Experience</h1>

      <ExperienceSection
        title="Expensify, San Francisco, CA"
        period="Software Engineer - Senior Leader (2022 - Present), Software Engineer - Leader (2019-2022), Software Engineer (2015 - 2019)"
        logo={expensifyLogo}
      >
        <li>
          Led key projects, including user interface enhancements and pricing
          plan overhaul, contributing to revenue growth.
        </li>
        <li>
          Developed and maintained several accounting/HR integration projects.
        </li>
        <li>
          Collaborated with Sales and Support teams to create custom solutions
          for clients.
        </li>
        <li>Interviewed and mentored new employees.</li>
      </ExperienceSection>

      <ExperienceSection
        title="MasterCard Worldwide, O'Fallon, MO"
        period="Software Engineering Intern (Summer 2014)"
        logo={mastercardLogo}
      >
        <li>Automated customer onboarding documents generation.</li>
        <li>
          Developed HTTP long-polling interface for partner system integration.
        </li>
      </ExperienceSection>

      <h1>Education</h1>
      <EducationSection
        title="Washington University in St. Louis"
        details="B.S. in Computer Science (May 2015; GPA: 3.71)
                 National Merit Scholarship, Dean's List (6x), Sigma Nu Fraternity, Upsilon Phi Epsilon, Congress of the South 40, Teaching Assistant"
        logo={washuLogo}
      />

      <h1>Skills</h1>
      <div className="skills-section">
        <p>
          <strong>Advanced:</strong> Java, JavaScript, PHP, React, SQL,
          HTML/CSS, Node.js
          <br />
          <strong>Intermediate:</strong> C, Python, LaTeX, MATLAB/Simulink,
          Django, Adobe Illustrator, d3, ArcGIS Pro, QGIS
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
