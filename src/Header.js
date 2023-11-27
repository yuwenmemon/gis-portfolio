import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'; // Ensure you import the CSS file

function Header() {
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/project/');

    const headerClass = isProjectPage ? "project-header" : "header";
    
  return (
    <header>
        <div className="header-background">
            <div className={`${headerClass}-content`}>
                {!isProjectPage && <img src="headshot.jpg" alt="Yuwen Memon" />}
                <h2>Yuwen Memon</h2>
                {!isProjectPage && <p>GIS Developer</p>}
            </div>
        </div>
      <nav className="header-nav">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;