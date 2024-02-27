// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './navbarroute.css';
import Navbar from './navbar'; 

const Home = () => <h2> Home</h2>;
const About = () => <h2>About</h2>;
const Experience = () => <h2>Experience</h2>;
const Projects = () => <h2>Projects</h2>;
const Blog = () => <h2>Blog</h2>;
const Contact = () => <h2>Contact</h2>;

const NavBarRoute = () => {
  return (
    <>

    <Router>

      <div className='navbar-align'>
        <Navbar /> 
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default NavBarRoute;
