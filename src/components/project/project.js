import React, { useState } from 'react';
import Card from './card.js';
import './project.css';

const MyProjects = () => {
  const projectsData = [
    {
      category: 'web',
      projects: [
        {
          image: '',
          title: 'Recipe website',
          description: 'Fully functional e-commerce recipe website built with React.',
          technologies: 'HTML, CSS, JavaScript, React'
        },
        {
          image: '',
          title: 'Expense Tracker',
          description: 'Expense tracker that tracks your expenses.',
          technologies: 'HTML, CSS, JavaScript'
        }
      ]
    },
    {
      category: 'machine-learning',
      projects: [
        {
          image: '',
          title: 'Mensuration tracker app',
          description: 'The project involves the development of a user-friendly app interface that allows user to track and log their menstrual periods.',
          technologies: 'ARIMA model, Flutter, Firebase'
        },
        {
          image: '',
          title: 'Linear math word problem',
          description: 'System that solves algebraic linear math word problems by converting them into accurate mathematical equations',
          technologies: 'T5 model,RL,react,django'
        }
      ]
    },
   
  ];

  const [activeTab, setActiveTab] = useState('web');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const projects = projectsData.find((item) => item.category === activeTab).projects;

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="sub-nav">
        {projectsData.map((item) => (
          <button key={item.category} className={activeTab === item.category ? 'active' : ''} onClick={() => handleTabChange(item.category)}>
            {item.category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="slider">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
