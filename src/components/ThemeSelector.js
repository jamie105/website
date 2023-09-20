// frontend/src/components/ThemeSelector.js

import React, { useState, useEffect } from 'react';

import SaveTheme from '../scripts/SaveTheme';

const ThemeSelector = ({setCurrentTheme, currentTheme}) => {
    
  useEffect(() => {
    //savetheme
  }, [currentTheme]);

  return (
    <>
    <div className="theme-selector" id="themeSelector" hidden>
        <button className="theme-selector-button gunmetal-theme-button" onClick={() => setCurrentTheme('./css/themes/gunmetal.css')}></button>
        <button className="theme-selector-button horizon-theme-button" onClick={() => setCurrentTheme('./css/themes/horizon.css')}></button>
        <button className="theme-selector-button galaxy-theme-button" onClick={() => setCurrentTheme('./css/themes/galaxy.css')}></button>
        <button className="theme-selector-button poison-theme-button" onClick={() => setCurrentTheme('./css/themes/poison.css')}></button>
        <button className="theme-selector-button ocean-theme-button" onClick={() => setCurrentTheme('./css/themes/ocean.css')}></button>
    </div>
    </>
  );
};

export default ThemeSelector;
