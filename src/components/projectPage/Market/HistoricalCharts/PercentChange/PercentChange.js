import React from 'react';
import './PercentChange.css';
import LamportsToSol from '../../../../helperFunctions/LamportsToSol';

function PercentChange(props) {

    // set past value based on the current view selected

    let pastValue;

    switch(props.currentView) {
        case "7d":
            pastValue = props.data7d
            break;
        case "14d":
            pastValue = props.data14d
            break;
        case "30d":
            pastValue = props.data30d
            break;
        default:
            pastValue = props.data7d
            break;
    }

    // calculate the difference and percent change

    const difference = props.currentData - LamportsToSol(pastValue);
    const percentChange = ((props.currentData - LamportsToSol(pastValue)) / LamportsToSol(pastValue)) * 100

    // render styling based on values

    const renderDifference = ((difference) => {
        if(difference >= 0) {
            return <p className="percent-change-txt-green">+{difference.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        } if(difference < 0) {
            return <p className="percent-change-txt-red">{difference.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        } else {
            return <p className="percent-change-txt">-</p>
        }
    })

    const  renderPercentChange = ((percentChange) => {
        if(percentChange >= 0) {
            return <p className="percent-change-txt-green">(+{percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} %)</p>
        } if(percentChange < 0) {
            return <p className="percent-change-txt-red">({percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} %)</p>
        } else {
            return <p className="percent-change-txt">-</p>
        }
    })



    return ( 
        <div className="percent-change">
            {renderDifference(difference)}
            {renderPercentChange(percentChange)}
        </div>
     );
}

export default PercentChange;