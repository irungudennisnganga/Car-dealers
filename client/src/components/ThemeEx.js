import React, { useState } from 'react';
import './ThemeEx.css'

const ThemeEx = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <div className="theme-changer">
      <label htmlFor="theme-select">Theme:</label>
      <select id="theme-select" value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeEx;