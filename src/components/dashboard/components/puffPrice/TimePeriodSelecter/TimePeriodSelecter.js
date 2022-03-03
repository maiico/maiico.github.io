import React, { useState } from 'react';
import './TimePeriodSelecter.css';

function TimePeriodSelecter(props) {
    //set current historical view 
    const [currentHistoricalView, setCurrentHistoricalView] = useState(24)

    const handleClick = (historicalView) => {
        setCurrentHistoricalView(historicalView)
        props.setCurrentHistoricalView(historicalView)
    }

    return ( 
        <div className="time-period">
            <p className={currentHistoricalView == 24 ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick(24)}}>24H</p>
            <p className={currentHistoricalView == 7 ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick(7)}}>7D</p>
            <p className={currentHistoricalView == 30 ? "time-period-selected" : "time-period-txt"} onClick={() => {handleClick(30)}}>30D</p>
        </div>
     );
}

export default TimePeriodSelecter;