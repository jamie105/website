// frontend/src/scripts/LoadAttributes.js

import React, { useState, useEffect } from 'react';

const LoadAttributes = ({ currentTheme }) => {
  useEffect(() => {
  }, []);

  //check LoadTheme

  return (
    <>
        <link rel="stylesheet" href="css/themes/themes.css"></link>
        <link rel="stylesheet" href={currentTheme}></link>
    </>
  );
};

export default LoadAttributes;
