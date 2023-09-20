// frontend/src/scripts/LoadPageScript.js

import React, { useState, useEffect } from 'react';

export const LoadProjectPageScript = ({  }) => {
  useEffect(() => {
    setTimeout(() => {
    const script = document.createElement("script");
    script.src = "./scripts/LoadProjectList.js";
    document.getElementById('page-scripts').appendChild(script);
}, 800);
  }, []);
  return null;
};

