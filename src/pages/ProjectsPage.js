// frontend/src/pages/ProjectsPage.js

import React, { useState, useEffect } from 'react';
import { LoadGithubRepo } from '../scripts/LoadGithubRepos';
import './css/projectspage.css'

const ProjectsPage = ({  }) => {
  useEffect(() => {

  }, []);

  //add something else here at some point

  return (
    <>
        <title>SirYakStudios - PROJECTS</title>
        <div className='carousel'>
            <LoadGithubRepo/>
            {/* example one if need to set preset ones or smt
            <div className="carousel-item">
		        <div className="carousel-box">
                    <div className="project-title">Paris</div>
                    <div className='project-description'><p>awyad adhiuah auhd asduh auhdsa ashud uhdsa uhdsa udha uahduh uhda uadh uhdsa udsa uahds uashd uahds uahd ihdasu uahsd yqe uqhdw uhads uwqhd uahs uwdh uhdwa uwdh uwhda</p></div>
			        <img src="./images/project_image_placeholder.png" />
		        </div>
	        </div> */}
        </div>
        {/* <div className="cursor"></div>
        <div className="cursor cursor2"></div> */}
    </>
  )
};

export default ProjectsPage;