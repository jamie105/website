// frontend/src/scripts/PageManager.js

import React, { useState, useEffect } from 'react';

//pages
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import MembersPage from '../pages/MembersPage';
import ProjectsPage from '../pages/ProjectsPage';
import PartnersPage from '../pages/PartnersPage';
import ContactPage from '../pages/ContactPage';

//members
import MembersPageSirYak from '../pages/members/SirYak/SirYak';
import MembersPageXairo from '../pages/members/Xairo/Xairo';

const PageManager = ({ currentPage, setCurrentPage }) => {
  return (
    <>  
        {currentPage === 'HomePage' ? <HomePage currentPage={currentPage}/> : null}
        {currentPage === 'HistoryPage' ? <HistoryPage /> : null}
        {currentPage === 'MembersPage' ? <MembersPage setCurrentPage={setCurrentPage}/> : null}
        {currentPage === 'MembersPage/SirYak' ? <MembersPageSirYak /> : null}
        {currentPage === 'MembersPage/Xairo' ? <MembersPageXairo /> : null}
        {currentPage === 'ProjectsPage' ? <ProjectsPage /> : null}
        {currentPage === 'PartnersPage' ? <PartnersPage /> : null}
        {currentPage === 'ContactPage' ? <ContactPage /> : null}
    </>
  );
};

export default PageManager;
