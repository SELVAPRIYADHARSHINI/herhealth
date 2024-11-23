import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '' 
}) => {
  return (
    <div className={`custom-card ${variant} ${hover ? 'hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
