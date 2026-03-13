import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      <div className="theme-toggle-icons">
        <i className={`fas fa-sun ${!isDark ? 'active' : ''}`}></i>
        <i className={`fas fa-moon ${isDark ? 'active' : ''}`}></i>
      </div>
      <div className="theme-toggle-slider">
        <div className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
