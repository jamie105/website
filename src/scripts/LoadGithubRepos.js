// frontend/src/scripts/LoadGithubRepos.js

import React, { useState, useEffect } from 'react';
import { LoadProjectPageScript } from './LoadPageScript';

export const LoadGithubRepo = ({ }) => {
  useEffect(() => {

  }, []);

  //also get projects from siryakstudios, etc
  //rather add another project list type thing in each members profile page
  const apiUrl = `https://api.github.com/users/jamie105/repos`;

  const [repos, setRepos] = useState([]); // State to store fetched repositories

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
      });
  }, [apiUrl]);

  return (
    <>
        {repos.map((repo) => (
          <div key={repo.id} className='carousel-item' data-repo-url={repo.html_url}>
            <div className='carousel-box'>
                <div className='project-title'>{repo.name}</div>
                <div className='project-description'>{repo.description}</div>
                <img src="./images/project_image_placeholder.png" />
            </div>
          </div>
        ))}
        <LoadProjectPageScript/>
    </>
  );
};

export const LoadMemberGithubRepo = ({ }) => {

    return null;
}  