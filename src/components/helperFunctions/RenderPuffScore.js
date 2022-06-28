import React from 'react';
import puffIcon from '../images/puff-icon.png';
import puffIconDark from '../images/puff-icon-dark.png';

function RenderPuffScore(score) {

    let puffScoreDiv;

    const divStyle = {
        display: "flex",
        flexDirection: "row",
        height: "auto",
        width: "auto",
    }

    const puffIconStyle = {
        height: "auto",
        width: "25px",
        margin: "auto",
        marginRight: "5px"
    }

    switch(Math.round(score)) {
        case 5:
            puffScoreDiv = 
                <div style={divStyle}>
                    <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                </div>
            break;
        case 4:
            puffScoreDiv = 
            <div className="puff-score-wrapper">
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
            </div>
            break;
        case 3:
            puffScoreDiv = 
            <div className="puff-score-wrapper">
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
            </div>
            break;
        case 2:
            puffScoreDiv = 
            <div className="puff-score-wrapper">
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
            </div>
            break;
        case 1:
            puffScoreDiv = 
            <div className="puff-score-wrapper">
                <img src={puffIcon} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
            </div>
            break;
        default:
                puffScoreDiv = 
                <div className="puff-score-wrapper">
                    <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                    <img src={puffIconDark} style={puffIconStyle} alt="puff"></img>
                </div>
            break;
    }

    return ( 
        puffScoreDiv
     );

}

export default RenderPuffScore;