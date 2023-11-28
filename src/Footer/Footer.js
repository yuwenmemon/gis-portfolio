import React from 'react';
import instagramIcon from './instagram-icon.svg';
import githubIcon from './github-icon.svg';
import linkedinIcon from './linkedin-icon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/yuwenmemon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/yuwenmemon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://www.instagram.com/yuwenmemon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagramIcon}
          alt="Instagram"
        />
      </a>
    </footer>
  );
}

export default Footer;
