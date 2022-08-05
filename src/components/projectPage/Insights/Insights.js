import React from 'react';
import './Insights.css';
import ProjectAnalysis from './ProjectAnalysis/ProjectAnalysis';

function Insights(props) {
    return ( 
        <div className="insights">
            <div className="insights-row">
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
            <div className="insights-row">
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