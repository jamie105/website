// frontend/src/scripts/PopstateManagerSet.js

import React, { useState, useEffect } from 'react';

const PopstateManagerSet = ({ currentPage }) => {
    useEffect(() => {
        var setpopstate = ""
        if(currentPage === "HomePage"){
            setpopstate = '/home';
        }else if(currentPage === "HistoryPage"){
            setpopstate = '/history';
        }else if(currentPage === "MembersPage"){
            setpopstate = '/members';
        }else if(currentPage === "MembersPage/SirYak"){
            setpopstate = '/members/siryak';
        }else if(currentPage === "MembersPage/Xairo"){
            setpopstate = '/members/xairo';
        }else if(currentPage === "ProjectsPage"){
            setpopstate = '/projects';
        }else if(currentPage === "PartnersPage"){
            setpopstate = '/partners';
        }else if(currentPage === "ContactPage"){
            setpopstate = '/contact';
        }
    window.history.pushState({}, '', setpopstate);
  }, [ currentPage ]);
  return null;
};

export default PopstateManagerSet;
