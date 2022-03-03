import React from 'react';
import './Loading.css';

function Loading() {
    return ( 
        <div className="loading-wrapper">
            <div className="loader"></div>
            <p className="loading-text">Loading...</p>
        </div>
     );
}

export default Loading;