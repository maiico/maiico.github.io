import React from 'react';
import './BackDrop.css';

function backDrop(props) {

    const handleClick = (show) => {
        props.setShowBackDrop(show)
        props.setShowInfo(show)
    }

    return ( 
        <div className="backdrop" onClick={() => {handleClick(false)}}/>
     );
}

export default backDrop;
