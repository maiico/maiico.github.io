import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../Config.json';
import Loading from '../loading/Loading';
import ProjectTableRow from './ProjectTableRow';

function Discover(props) {

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
    
            const res = await axios.get(config.apis.magicEden.collectionStats + lastEvaluatedKey)
    
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

    // render project table row based on data
    const renderProjectRow = () => {
            return (
                projectStats.map((project, index) => (
                    <ProjectTableRow
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

    const renderLoad = () => {
        if(projectStats.length <= 0) {
            return (
                <div className="bg-[#0e1111] w-full max-w-7xl min-h-[800px] mx-auto rounded-md py-10">
                    <Loading />
                </div>
            )
        } else {
            return (
            <div className="bg-[#0e1111] w-full max-w-7xl min-h-[800px] max-h-[800px] mx-auto rounded-lg px-1 sm:px-2 md:px-4 pb-4 overflow-scroll">
                <table className="table-fixed bg-[#0e1111] w-full max-w-7xl min-h-[800px] mx-auto">
                    <thead className="sticky top-0">
                        <tr className="text-left">
                            <th className="bg-[#0e1111] text-slate-400 w-[125px] sm:w-[250px] md:w-[450px] pl-4 py-4 border-b-2 border-solid border-neutral-800 text-left text-xs sm:text-sm md:text-lg z-50">Project</th>
                            <th className="bg-[#0e1111] text-slate-400 py-4 border-b-2 border-solid border-neutral-800 text-xs sm:text-sm md:text-lg">Floor</th>
                            <th className="bg-[#0e1111] text-slate-400 py-4 border-b-2 border-solid border-neutral-800 text-xs sm:text-sm md:text-lg">Floor (USD)</th>
                            <th className="bg-[#0e1111] text-slate-400 py-4 border-b-2 border-solid border-neutral-800 text-xs sm:text-sm md:text-lg">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderProjectRow()}
                    </tbody>
                </table>
            </div>
            )
        }
    }

    return ( 
        <div className="flex flex-col w-full justify-center text-center bg-black py-20">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] font-bold text-3xl md:text-5xl py-10">Discover Top-Rated NFTs</h1>
            {renderLoad()}
        </div>
     );
}

export default Discover;