// frontend/src/pages/HomePage.js

import React, { useState, useEffect } from 'react';

import CommentArray from '../components/CommentArray.js';
import ClearScripts from '../scripts/ClearScripts.js';
import './css/homepage.css';

const HomePage = ({ currentPage }) => {

  //fix comments array

  return (
    <>
    <ClearScripts/>
    <title>SirYakStudios - HOME</title>
    <div className="content">                   
        <div className="profile">
            <div className="logo"><img></img>Logo</div>
            <div className="title"><h1>SirYakStudios</h1></div>
            <div className="description"><p>A small development company specialising in backend and discord bots. Founded early 2020, their projects range from Minecraft server cores and texturepacks, to advanced modular discord bots with integration between an multitude of services. </p></div>
            <CommentArray currentPage={currentPage}/>
            <div className="links">
                <button className="link-button" onClick={() => window.open("https://discord.com", '_blank')}>
                    <img src="images/icons/discord_64.png"></img>
                </button>
                <button className="link-button" onClick={() => window.open("https://youtube.com", '_blank')}>
                    <img src="images/icons/youtube_64.png"></img>
                </button>
                <button className="link-button" onClick={() => window.open("https://twitter.com", '_blank')}>
                    <img src="images/icons/twitter_64.png"></img>
                </button>
                <button className="link-button" onClick={() => window.open("https://github.com", '_blank')}>
                    <img src="images/icons/github_64.png"></img>
                </button>
            </div>
        </div>
    </div>
    </>
  );
};

export default HomePage;