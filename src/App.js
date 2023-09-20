import React, { useEffect, useState } from 'react';

//pages
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import MembersPage from './pages/MembersPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

//components
import ThemeSelector from './components/ThemeSelector';
import PageSelector from './components/PageSelector';

//functions
import PopstateManagerSet from './functions/PopstateManagerSet';
import PageManager from './functions/PageManager';

//scripts
import LoadAttributes from './scripts/LoadAttributes';
import LoadTheme from './scripts/LoadTheme';
import SaveTheme from './scripts/SaveTheme';

function App() {
    const [currentTheme, setCurrentTheme] = useState('./css/themes/gunmetal.css');
    const [currentPage, setCurrentPage] = useState(getPageFromPath);

    function getPageFromPath() {
        const path = window.location.pathname;
        if (path === '/home') {
          return 'HomePage';
        } else if (path === '/history') {
          return 'HistoryPage';
        } else if (path === '/members') {
          return 'MembersPage';
        } else if (path === '/members/siryak') {
          return 'MembersPage/SirYak';
        } else if (path === '/members/xairo') {
          return 'MembersPage/Xairo';
        }if (path === '/projects') {
          return 'ProjectsPage';
        } else if (path === '/partners') {
          return 'PartnersPage';
        } else if (path === '/contact') {
          return 'ContactPage';
        } else {
          return 'HomePage'; // Default to 'HomePage' for unknown paths
        }
      }
  return (
  <>
    <PopstateManagerSet currentPage={currentPage}/>
    <LoadAttributes currentTheme = {currentTheme} />
    <PageSelector setCurrentPage = {setCurrentPage} setCurrentTheme={setCurrentTheme} currentTheme={currentTheme}/>
    <PageManager currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  );
}

export default App;
