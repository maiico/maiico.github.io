import React, { useState }from 'react';
import './TimePeriodSelector.css';

function TImePeriodSelector(props) {

    //set current historical view 
    const [currentHistoricalView, setCurrentHistoricalView] = useState("7d")

    const handleClick = (historicalView) => {
        setCurrentHistoricalView(historicalView)
        props.setCurrentView(historicalView)
    }

    return ( 
        <div className="time-period">
            <p className={currentHistoricalView == "7d" ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick("7d")}}>7D</p>
            <p className={currentHistoricalView == "14d" ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick("14d")}}>14D</p>
            <p className={currentHistoricalView == "30d" ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick("30d")}}>30D</p>
        </div>
     );
}

export default TImePeriodSelector;
