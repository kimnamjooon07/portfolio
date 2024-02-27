import React from 'react';

const Card = ({ image, title, description, technologies }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="used-technologies">
          <strong>Used Technologies:</strong> {technologies}
        </div>
      </div>
    </div>
  );
};

export default Card;
