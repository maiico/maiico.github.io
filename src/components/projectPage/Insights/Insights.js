import React from 'react';
import ProjectAnalysis from './ProjectAnalysis/ProjectAnalysis';

function Insights(props) {
    return ( 
        <div className="flex flex-col justify-center w-full bg-black px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto pb-4">
                <ProjectAnalysis 
                    heading={"Artwork"}
                    content={props.artTxt}
                    score={props.artScore}
                />
                <ProjectAnalysis 
                    heading={"Tokenomics"}
                    content={props.tokenomicsTxt}
                    score={props.tokenomicsScore}
                />
                <ProjectAnalysis 
                    heading={"Team"}
                    content={props.teamTxt}
                    score={props.teamScore}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto pb-4">
                <ProjectAnalysis 
                    heading={"Community"}
                    content={props.communityTxt}
                    score={props.communityScore}
                />
                <ProjectAnalysis 
                    heading={"Utility"}
                    content={props.utilityTxt}
                    score={props.utilityScore}
                />
                <ProjectAnalysis 
                    heading={"Insights"}
                    content={props.insightsTxt}
                    score={props.insightsScore}
                />
            </div>
        </div>
     );
}

export default Insights;