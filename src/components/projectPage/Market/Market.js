import React from 'react';
import Loading from '../../loading/Loading';
import HistoricalCharts from './HistoricalCharts/HistoricalCharts';
import './Market.css';

function Analytics(props) {

    // render stat or loading based on stat name
    const renderStat = ((statName, stat) => {
        
        let statComponent;

        switch(statName) {
            case "floor":
                statComponent =     
                // floor price              
                <div className="project-stat">
                    <h2 className="project-page-stat-heading">Floor</h2>
                    <p className="project-page-stat-txt">{props.floorPrice} SOL</p>
                    <p className="project-page-stat-txt">${(props.floorPrice * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "volume":
                statComponent = 
                // total volume
                <div className="project-stat">
                    <h2 className="project-page-stat-heading">Total Volume</h2>
                    <p className="project-page-stat-txt">{props.volumeAll.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} SOL</p>
                    <p className="project-page-stat-txt">${(props.volumeAll * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "salePrice":
                statComponent = 
                // avg sale price
                <div className="project-stat">
                    <h2 className="project-page-stat-heading">Avg Sale Price</h2>
                    <p className="project-page-stat-txt">{props.avgPrice24hr.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} SOL</p>
                    <p className="project-page-stat-txt">${(props.avgPrice24hr * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "totalListed":
                statComponent =
                //total listed
                <div className="project-stat">
                    <h2 className="project-page-stat-heading">Total Listed</h2>
                    <p className="project-page-stat-txt">{props.listedCount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2}) +  " / " + props.collectionCount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                    <p className="project-page-stat-txt">{((props.listedCount / props.collectionCount) * 100).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} %</p>
                </div>
                break;
            default:
                statComponent = 
                    <div className="project-stat">
                        <Loading />
                    </div>

        }

        if(stat === 0) {
            statComponent =
                <div className="project-stat">
                    <Loading />
                </div>
        } else {
            return statComponent
        }

        return statComponent;
    })

    return ( 
        <div className="market">
            <div className="project-stats-container">
                <div className="project-stats-row">
                    {renderStat("floor", props.floorPrice)}
                    {renderStat("volume", props.volumeAll)}
                    {renderStat("salePrice", props.avgPrice24hr)}
                    {renderStat("totalListed", props.listedCount)}
                </div>
            </div>
            <div className="historical-charts-container">
                <HistoricalCharts 
                    symbol={props.symbol}
                    floorPrice={props.floorPrice}
                    avgPrice24hr={props.avgPrice24hr}
                    listedCount={props.listedCount}
                />
            </div>
        </div>
     );
}

export default Analytics;