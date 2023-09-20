// frontend/src/pages/MembersPage.js

import React, { useState, useEffect } from 'react';

import './css/memberspage.css'

const MembersPage = ({ setCurrentPage }) => {
  useEffect(() => {

  }, []);

  return (
    <>
        <title>SirYakStudios - MEMBERS</title>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <div className='card-container'>
            <div className="card card0" onClick={() => setCurrentPage("MembersPage/SirYak")}>
                <div className="card-border">
                    <h2 className='card-h2'>SirYak</h2>
                    <div className="card-icons">
                        <i className="fa fa-discord" aria-hidden="true" onClick={() => window.open("https://discord.com", '_blank')}> siryak105</i>
                        <i className="fa fa-youtube" aria-hidden="true" onClick={() => window.open("https://youtube.com", '_blank')}> siryak105</i>
                        <i className="fa fa-twitter" aria-hidden="true" onClick={() => window.open("https://twitter.com", '_blank')}> siryak105</i>
                        <i className="fa fa-github" aria-hidden="true" onClick={() => window.open("https://github.com", '_blank')}> jamie105</i>
                    </div>
                </div>
            </div>
            <div className="card card1" onClick={() => setCurrentPage("MembersPage/Xairo")}>
                <div className="card-border">
                    <h2 className='card-h2'>Xekvern</h2>
                    <div className="card-icons">
                        <i className="fa fa-discord" aria-hidden="true" onClick={() => window.open("https://discord.com", '_blank')}> xairo</i>
                        <i className="fa fa-youtube" aria-hidden="true" onClick={() => window.open("https://youtube.com", '_blank')}> xairo</i>
                        <i className="fa fa-twitter" aria-hidden="true" onClick={() => window.open("https://twitter.com", '_blank')}> xairo</i>
                        <i className="fa fa-github" aria-hidden="true" onClick={() => window.open("https://github.com", '_blank')}> xairo</i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default MembersPage;
