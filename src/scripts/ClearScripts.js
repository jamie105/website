// frontend/src/scripts/ClearScripts.js

import React, { useState, useEffect } from 'react';

const ClearScripts = ({  }) => {
    useEffect(() => {
        document.getElementById('page-scripts').innerHTML = "";
    }, []);


  return null;
};

export default ClearScripts;
