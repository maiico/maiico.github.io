import React from 'react';
import truccosAvatar from '../images/truccos-avatar.png';
import mxtryAvatar from '../images/mxtry-avatar.png';
import nftchevAvatar from '../images/nftchev-avatar.jpeg';

function RenderAnalyst(analyst) {

    let analystDiv;

    const divStyle ={
        display: "flex",
        flexDirection: "column",
        height: "50px",
        width: "auto",
        alignItems: "center",
        justifyContent: "space-around"

    }

    const imgStyle = {
        height: "auto",
        width: "25px",
        borderRadius: "50%",
        margin: "auto",
    }

    const pStyle = {
        fontSize: "0.75rem",
        color: "darkgray",
        margin: "auto",
    }

    switch(analyst) {
        case "Truccos":
            analystDiv = <div style={divStyle}><img src={truccosAvatar} style={imgStyle}></img><p style={pStyle}>Truccos</p></div>
            break;
        case "mxtry":
            analystDiv = <div style={divStyle}><img src={mxtryAvatar} style={imgStyle}></img><p style={pStyle}>mxtry</p></div>
            break;
        case "nftchev":
            analystDiv = <div style={divStyle}><img src={nftchevAvatar} style={imgStyle}></img><p style={pStyle}>mxtry</p></div>
            break;
        default:
            break;
    }

    return ( 
        analystDiv
     );
}

export default RenderAnalyst;