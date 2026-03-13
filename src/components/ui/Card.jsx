import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  return (
    <div 
      className={`card card-${variant} card-padding-${padding} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
