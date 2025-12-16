import React from 'react';
import './Card.css';

const Card = ({ children, className = '', title, description, interactive = false, ...props }) => {
  return (
    <div className={`card ${interactive ? 'interactive' : ''} ${className}`} {...props}>
      {(title || description) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {description && <p className="card-description">{description}</p>}
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
