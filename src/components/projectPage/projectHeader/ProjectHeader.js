import React from 'react';
import './ProjectHeader.css';
import RenderPuffScore from '../../helperFunctions/RenderPuffScore';
import RenderAnalyst from '../../helperFunctions/RenderAnalyst';

function ProjectHeader(props) {
    return ( 
        <div className="project-header">
            <img src={props.image} className="project-header-img" alt={props.name}></img>
                <div className="project-heading-container">
                    <h1 className="project-header-heading">{props.name}</h1>
                    <div className="puff-score-container">
                        <p className="puff-score-label">Puffalytics Score ({props.overallScore}/5)  </p>
                        {RenderPuffScore(props.overallScore)}
                    </div>
                </div>
                <div className="project-description-container">
                    <p className="project-header-txt">{props.description}</p>
                </div>
                <div className="links-analyst-container">
                    <div className="project-links-container">
                        <a href={props.twitter} target="_blank" rel="noreferrer nofollow" className="anchor-tag">
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </a>
                        <a href={props.discord} target="_blank" rel="noreferrer nofollow" className="anchor-tag">
                            <i className="fa-brands fa-discord fa-xl"></i>
                        </a>
                        <a href={props.website} target="_blank" rel="noreferrer nofollow" className="anchor-tag">
                            <i className="fa-solid fa-globe fa-xl"></i>
                        </a>
                    </div>
                    <p className="project-header-txt">Analyst:</p>
                    <div className="analyst-container">
                        {RenderAnalyst(props.analyst)}
                    </div>
                </div>
        </div>
     );
}

export default ProjectHeader