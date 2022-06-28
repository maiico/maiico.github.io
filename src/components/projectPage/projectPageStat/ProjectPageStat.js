import React from 'react';
import './ProjectPageStat.css';
import Loading from '../../loading/Loading';

function ProjectPageStat(props) {

    if(props.firstStat === 0) {
        return (
            <div className="project-page-stat">
                <h2 className="project-page-stat-heading">{props.heading}</h2>
                <Loading />
            </div>
        )
    } 
    // if no stats
    else if (props.firstStat === null) {
        return  (
            <div className="project-page-stat">
                <h2 className="project-page-stat-heading">{props.heading}</h2>
                <p className="project-page-stat-txt">-</p>
            </div>
        )          
    }
    else {
        return ( 
            <div className="project-page-stat">
                <h2 className="project-page-stat-heading">{props.heading}</h2>
                <p className="project-page-stat-txt">{props.firstStat.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}{props.currency}</p>
                <p className="project-page-stat-txt">{props.secondStatPreSymbol + props.secondStat.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2}) + props.secondStatPostSymbol}</p>
            </div>
         );
    }

}

export default ProjectPageStat;