import React from 'react';
import './MarketStats.css';

function MarketStats(props) {

    const percentChangeClass = (percent) => {
        if(percent >= 0) {
            return "market-stats-green"
        } else {
            return "market-stats-red"
        }
    }

    return ( 
        <div className="market-stats">
            <h1 className="token-income-heading">Market Stats</h1>   
            <div className="market-stats-wrapper">
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">Price</p>
                    <p className="floor-prices-txt">${props.puffPriceUsd} USD</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">Market Cap</p>
                    <p className="floor-prices-txt">-</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">Circulating Supply</p>
                    <p className="floor-prices-txt">-</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">$PUFF Burned</p>
                    <p className="floor-prices-txt">-</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">Volume</p>
                    <p className="floor-prices-txt">{props.puffVolume.toLocaleString()}</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">24h High</p>
                    <p className="floor-prices-txt">${props.puff24High.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">24h Low</p>
                    <p className="floor-prices-txt">${props.puff24Low.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">ATH</p>
                    <p className="floor-prices-txt">${props.puffAth.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">% from ATH</p>
                    <p className={percentChangeClass(props.puffAthChangePercent)}>{props.puffAthChangePercent.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">ATL</p>
                    <p className="floor-prices-txt">${props.puffAtl.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6})} USD</p>
                </div>
                <div className="market-stat-wrapper">
                    <p className="floor-prices-txt">% from ATL</p>
                    <p className={percentChangeClass(props.puffAtlChangePercent)}>{props.puffAtlChangePercent.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%</p>
                </div>
            </div>     
        </div>
     );
}

export default MarketStats;