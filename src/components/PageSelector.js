// frontend/src/components/PageSelector.js

import React, { useState, useEffect } from 'react';

import ThemeSelector from './ThemeSelector';

const PageSelector = ({ setCurrentPage, setCurrentTheme, currentTheme }) => {

    function toggleChangeTheme(){
        document.getElementById('themeSelector').hidden = !document.getElementById('themeSelector').hidden;
    };

  return (
    <>
        <div className="page-selector">
            <button className="page-selector-button" onClick={() => setCurrentPage("HomePage")}>Home</button>
            <button className="page-selector-button" onClick={() => setCurrentPage("HistoryPage")}>History</button>
            <button className="page-selector-button" onClick={() => setCurrentPage("MembersPage")}>Members</button>
            <button className="page-selector-button" onClick={() => setCurrentPage("ProjectsPage")}>Projects</button>
            <button className="page-selector-button" onClick={() => setCurrentPage("PartnersPage")}>Partners</button>
            <button className="page-selector-button" onClick={() => setCurrentPage("ContactPage")}>Contact</button>
            <button className="page-selector-button" onClick={toggleChangeTheme}>Theme</button>
            <ThemeSelector setCurrentTheme={setCurrentTheme} currentTheme={currentTheme}/>
        </div>
    </>
  );
};

export default PageSelector;
