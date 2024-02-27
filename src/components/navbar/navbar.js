// navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarroute.css';


const Navbar = () => {
  return (
    <nav>
      
      <ul>
      <div className='logo'></div>


        <li><NavLinkWithLineAnimation to="/" label="Home" /></li>
        <li><NavLinkWithLineAnimation to="/about" label="About" /></li>
        <li><NavLinkWithLineAnimation to="/experience" label="Experience" /></li>
        <li><NavLinkWithLineAnimation to="/projects" label="Projects" /></li>
        <li><NavLinkWithLineAnimation to="/blog" label="Blog" /></li>
        <li><NavLinkWithLineAnimation to="/contact" label="Contact" /></li>
      </ul>
    </nav>
  );
};

const NavLinkWithLineAnimation = ({ to, label }) => {
  return (
    <Link to={to} className="nav-link">
      <span>{label}</span>
      <div className="line"></div>
    </Link>
  );
};

export default Navbar;
