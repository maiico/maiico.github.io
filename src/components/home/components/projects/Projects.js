import React, { useState, useEffect } from 'react';
import './Projects.css';
import axios from 'axios';
import Project from './project/Project';
import Loading from '../../../loading/Loading';
import Config from '../../../../Config.json';

function Projects(props) {

const [projectStats, setProjectStats] = useState([]);
const [lastEvaluatedKey, setLastEvaluatedKey] = useState("startQuery");
const [loading, setLoading ] = useState(false);

// handle scrolling for infinity load

const handleScroll = event => {

    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;


// remove 0.5px from scrollTop for the table headers border-width
    if((scrollHeight - (scrollTop - 0.5)) === clientHeight) {
        setLoading(true)

        //make api call here

        

    }

}

//get collection stats from ME

useEffect(() => {

const fetchData = async () => {
    try {

        const res = await axios.get(Config.apis.magicEden.collectionStats + lastEvaluatedKey)

        if(typeof res.data.data.lastEvaluatedKey === "undefined") {
            setLastEvaluatedKey("startQuery");
        } else {
            setLastEvaluatedKey(res.data.data.lastEvaluatedKey);
        }

        let projects = res.data.data;


        // sort projects in descending order
        projects.sort((a, b) => parseFloat(b.floorPrice) - parseFloat(a.floorPrice))

        setProjectStats(projects)


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
                    key={index}
                    solPriceUsd={props.solPriceUsd}
                />
            ))
        )
    }
    
}

    return (
        <div className="projects">
            <div className="projects-chart-headers">
                <div className="projects-chart-stat-wrapper">
                    <p className="projects-headers-txt">Project</p>
                </div>
                <div className="projects-chart-stat-wrapper">
                    <p className="projects-headers-txt">Floor</p>
                </div>
                <div className="projects-chart-stat-wrapper">
                    <p className="projects-headers-txt">Value (USD)</p>
                </div>
                <div className="projects-chart-stat-wrapper">
                    <p className="projects-headers-txt">Score</p>
                </div>
                <div className="projects-chart-stat-wrapper">
                    <p className="projects-headers-txt">Analyst</p>
                </div>
            </div>
                <div className="projects-list-container" onScroll={handleScroll}>
                    {renderProject()}
                </div>
                {/* add loading in when pagination is required */}
                {/* {loading ? <Loading /> : null} */}
        </div>
    );
}

export default Projects;