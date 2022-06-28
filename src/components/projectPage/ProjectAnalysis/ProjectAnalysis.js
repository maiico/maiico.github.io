import React from 'react';
import './ProjectAnalysis.css';
import RenderPuffScore from '../../helperFunctions/RenderPuffScore';
import Loading from '../../loading/Loading';

function ProjectAnalysis(props) {

    //render appropriate category icon
    let categoryIcon;

    switch(props.heading) {
        case "Artwork":
            categoryIcon = <i className="fa-solid fa-palette fa-xl analysis-icon"></i>
            break;
        case "Tokenomics":
            categoryIcon = <i className="fa-solid fa-coins fa-xl analysis-icon"></i>
            break;
        case "Team":
            categoryIcon = <i className="fa-solid fa-users-line fa-xl analysis-icon"></i>
            break;
        case "Community":
            categoryIcon = <i className="fa-solid fa-handshake-simple fa-xl analysis-icon"></i>
            break;
        case "Utility":
            categoryIcon = <i className="fa-solid fa-screwdriver-wrench fa-xl analysis-icon"></i>
            break;
        case "Insights":
            categoryIcon = <i className="fa-solid fa-comment-dots fa-xl analysis-icon"></i>
            break;
        default:
            categoryIcon = <i className="fa-solid fa-face-sad-cry fa-xl analysis-icon"></i>
            break;
    }

    //check to see if content is utility or not
    let content;

    if(props.content.constructor === Array) {
        
       content =  props.content.map((utility, i) => {
            return <li className="project-analysis-list" key={i}>{utility}</li>
        })

    } else {
        content =  <p className="project-analysis-txt">{props.content}</p>
    }

    if(props.content === "loading") {
        return (
            <div className="project-analysis">
                {categoryIcon}
                <h2 className="project-analysis-heading">{props.heading}</h2>
                <Loading />
            </div>
        )
    } else {
        return ( 
            <div className="project-analysis">
                {categoryIcon}
                <h2 className="project-analysis-heading">{props.heading}</h2>
                <div className="analysis-puff-score-container">
                    <p className="puffalytics-score-txt">Score {props.score}/5</p>
                    {RenderPuffScore(props.score)}
                </div>
                {content}
            </div>
         );
    }
}

export default ProjectAnalysis;