import React, { useState, useEffect } from 'react';
import './Floor.css';
import axios from 'axios';
import Project from './project/Project';
import Loading from '../../../loading/Loading';
import Config from '../../../../Config.json';
import AllBlue from '../../../images/all-logo.png';

function Floor(props) {

const [projectStats, setProjectStats] = useState([])

//one minute in milliseconds for timer
const minuteMs = 60000;

//get collection stats from ME

useEffect(() => {

const fetchData = async () => {
    try {
        const res = await axios.get(Config.apis.magicEden.collectionStats)

        setProjectStats(res.data.data)

    } catch(err) {
        console.log(err)
    }
}

//timer for fetching data every minute
const interval = setInterval(() => {
        fetchData()
    }, minuteMs)

       fetchData()

        //clear timer on unmount
        return () => clearInterval(interval);

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
                    floorPrice={project.floorPrice}
                    avgPrice24hr={project.avgPrice24hr}
                    listedCount={project.listedCount}
                    volumeAll={project.volumeAll}
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
                <img src={AllBlue} className="floor-logo" alt="All Blue" />
                <h1 className="floor-heading">ALLBLUE</h1>
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
                    <p className="floor-headers-txt">Listed</p>
                </div>
                <div className="floor-chart-stat-wrapper">
                    <p className="floor-headers-txt">Vol (SOL)</p>
                </div>
            </div>
            {renderProject()}
        </div>
    );
}

export default Floor;