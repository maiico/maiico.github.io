import './Project.css';
import LamportsToSol from '../../../../helperFunctions/LamportsToSol';
import RenderPuffScore from '../../../../helperFunctions/RenderPuffScore';
import RenderAnalyst from '../../../../helperFunctions/RenderAnalyst';
import { Link } from 'react-router-dom';

function Project(props) {

    return (
        <Link to={'project/' + props.symbol} style={{ textDecoration: 'none' }}>
            <div className="project">
                <div className="project-chart-headers">
                    <div className="project-chart-stat-wrapper">
                        <div className="project-name-wrapper">
                            <img src={props.image} className="project-img" alt="project"/>
                            <h2 className="project-heading">{props.name}</h2>
                        </div>
                    </div>
                    <div className="project-chart-stat-wrapper">
                        <p className="project-prices-txt">{LamportsToSol(props.floorPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                    </div>
                    <div className="project-chart-stat-wrapper">
                        <p className="project-prices-txt">${(LamportsToSol(props.floorPrice)*props.solPriceUsd).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                    </div>
                    <div className="project-score-mobile-wrapper">
                        <p className="project-prices-txt">{props.overallScore}/5</p>
                    </div>
                    <div className="project-score-wrapper">
                        {RenderPuffScore(props.overallScore)}
                    </div>
                    <div className="project-chart-stat-wrapper">
                        {RenderAnalyst(props.analyst)}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Project;