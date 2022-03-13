import React, { useState, useEffect } from 'react';
import './PuffPrice.css';
import Chart24hr from './Chart24hr/Chart24hr';
import Chart7d from './Chart24hr/Chart7d';
import Chart30d from './Chart24hr/Chart30d';
import MarketStats from './MarketStats/MarketStats';
import Price from './Price/Price';
import TimePeriodSelecter from './TimePeriodSelecter/TimePeriodSelecter';
import Converter from './Converter/Converter';
import puffIcon from '../../../images/puff-logo.jpeg';

function PuffPrice(props) {

    //set prices for historical reference
    const [currentHistoricalView, setCurrentHistoricalView] = useState(24)
    const [historicalPrice24h, setHistoricalPrice24h] = useState(0)
    const [historicalPrice7d, setHistoricalPrice7d] = useState(0)
    const [historicalPrice30d, setHistoricalPrice30d] = useState(0)


    //set historical price to match current view

    let historicalView;

    switch (currentHistoricalView) {
        case 7:
            historicalView = historicalPrice7d
            break;
        case 30:
            historicalView = historicalPrice30d
            break;
        default:
            historicalView = historicalPrice24h
    }

    //render the appropriate chart based on the current historical view
    const renderChart = () => {
        if(currentHistoricalView == 24) {
            return  <Chart24hr setHistoricalPrice24h={setHistoricalPrice24h}/>
        } else if(currentHistoricalView == 7) {
            return  <Chart7d setHistoricalPrice7d={setHistoricalPrice7d}/>
        } else  if (currentHistoricalView === 30){
            return  <Chart30d setHistoricalPrice30d={setHistoricalPrice30d} />
        }
    }
    

    return ( 
        <div className="puff-price">
            <div className="puff-price-heading-container">
                <img src={puffIcon} className="puff-logo" alt="puff"/>
                <h1 className="token-income-heading">$PUFF</h1>
            </div>
            <div className="puff-price-content">
                <div className="price-container">
                    <div className="price-time-container">
                        <Price
                            price={props.puffPriceUsd}
                            puffPriceChange24hPercent={props.puffPriceChange24hPercent}
                            puffPriceChange7dPercent={props.puffPriceChange7dPercent}
                            puffPriceChange30dPercent={props.puffPriceChange30dPercent}
                            currentHistoricalView={currentHistoricalView}
                            historicalPrice={historicalView}
                        />
                        <TimePeriodSelecter
                            setCurrentHistoricalView={setCurrentHistoricalView}
                         />
                    </div>
                    <div className="chart-container">
                        {renderChart()}
                    </div>
                    <Converter 
                        puffPrices={props.puffPrices}
                    />
                </div>
                <MarketStats 
                    puffPriceUsd={props.puffPriceUsd}
                    puffVolume={props.puffVolume}
                    puff24High={props.puff24High}
                    puff24Low={props.puff24Low}
                    puffAth={props.puffAth}
                    puffAthChangePercent={props.puffAthChangePercent}
                    puffAtl={props.puffAtl}
                    puffAtlChangePercent={props.puffAtlChangePercent}
                />
            </div>
        </div>
     );
}

export default PuffPrice;