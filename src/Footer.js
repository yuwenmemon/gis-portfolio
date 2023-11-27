import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="linkedin-icon.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="github-icon.svg" alt="GitHub" />
      </a>
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="instagram-icon.svg" alt="Instagram" />
      </a>
    </footer>
  );
}

export default Footer;
