import React, { useState, useEffect } from 'react';
import './Floor.css';
import axios from 'axios';
import Project from '../../../home/components/projects/project/Project';
import Loading from '../../../loading/Loading';
import Config from '../../../../Config.json';
import puffalyticsLogo from '../../../images/puffalytics-logo-only.png';

function Floor(props) {

const [projectStats, setProjectStats] = useState([])

//one minute in milliseconds for timer
const minuteMs = 60000;

//get collection stats from ME

useEffect(() => {

const fetchData = async () => {
    try {
        const res = await axios.get(Config.apis.magicEden.collectionStats)

        setProjectStats(res.data)


    } catch(err) {
        console.log(err)
    }
}

       fetchData()

}, [])

//render project based on data
const renderProject = () => {
    if(projectStats.length <= 0) {
        return <Loading />
    } else {
        return (
            projectStats.map((project, index) => (
                <Project
                    symbol={project.symbol}
                    name={project.name}
                    image={project.image}
                    floorPrice={project.floorPrice}
                    overallScore={project.overallScore}
                    analyst={project.analyst}
                    key ={index}
                    solPriceUsd={props.solPriceUsd}
                />
            ))
        )
    }
    
}

    return (
        <div className="floor">
            <div className="floor-heading-wrapper">
                <img src={puffalyticsLogo} className="floor-logo" alt="Puffalytics" />
                <h1 className="floor-heading">Research</h1>
            </div>
            <div className="floor-chart-headers">
                <div className="floor-chart-project-wrapper">
                    <p className="floor-headers-txt">Project</p>
                </div>
                <div className="floor-chart-stat-wrapper">
                    <p className="floor-headers-txt">Floor (SOL)</p>
                </div>
                <div className="floor-chart-stat-wrapper">
                    <p className="floor-headers-txt">Value (USD)</p>
                </div>
                <div className="floor-chart-stat-wrapper">
                    <p className="floor-headers-txt">Score</p>
                </div>
                <div className="floor-chart-stat-wrapper">
                    <p className="floor-headers-txt">Analyst</p>
                </div>
            </div>
            {renderProject()}
        </div>
    );
}

export default Floor;