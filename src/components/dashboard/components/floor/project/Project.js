import React, { useState } from 'react';
import './Project.css';
import SAC from '../../../../images/sac.png';
import NAC from '../../../../images/nac.png';
import BB from '../../../../images/best-buds.png';
import MJ from '../../../../images/mary-janes.png';
import Bongheads from '../../../../images/bongheads.png';
import LamportsToSol from '../../helperFunctions/LamportsToSol';


function Project(props) {


const renderProjectImg = (project) => {

    let projectImg;

    switch(project) {
        case "stoned_apes":
            projectImg = SAC
            break;
        case "nuked_apes":
            projectImg = NAC
            break;
        case "best_buds":
            projectImg = BB
            break;
        case "mary_janes":
            projectImg = MJ
            break;
        case "bongheads":
            projectImg = Bongheads
            break;
        default:
            projectImg = SAC

    }

    return projectImg
        
}
    return (
        <div className="project">
            <div className="project-chart-headers">
                <div className="project-chart-wrapper">
                    <div className="project-name-wrapper">
                        <img src={renderProjectImg(props.symbol)} className="project-img" alt="project"/>
                        <h2 className="project-heading">{props.name}</h2>
                    </div>
                </div>
                <div className="project-chart-stat-wrapper">
                    <p className="project-prices-txt">{LamportsToSol(props.floorPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                </div>
                <div className="project-chart-stat-wrapper">
                    <p className="project-prices-txt">${(LamportsToSol(props.floorPrice)*props.solPriceUsd).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                </div>
                <div className="project-chart-stat-wrapper">
                    <p className="project-prices-txt">{props.listedCount}</p>
                </div>
                <div className="project-chart-stat-wrapper">
                    <p className="project-prices-txt">{LamportsToSol(props.volumeAll).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;