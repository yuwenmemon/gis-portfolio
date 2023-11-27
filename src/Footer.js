import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/yuwenmemon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="linkedin-icon.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/yuwenmemon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="github-icon.svg" alt="GitHub" />
      </a>
      <a
        href="https://www.instagram.com/yuwenmemon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="instagram-icon.svg" alt="Instagram" />
      </a>
    </footer>
  );
}

export default Footer;
