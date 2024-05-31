import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;
