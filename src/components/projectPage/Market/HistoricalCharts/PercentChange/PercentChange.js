import React from 'react';
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
            return <p className="text-md md:text-lg text-green-400 font-normal">+{difference.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        } if(difference < 0) {
            return <p className="text-md md:text-lg text-red-400 font-normal">{difference.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        } else {
            return <p className="text-md md:text-lg text-slate-400 font-normal">-</p>
        }
    })

    const  renderPercentChange = ((percentChange) => {
        if(percentChange >= 0) {
            return <p className="text-md md:text-lg text-green-400 font-normal">&nbsp;(+{percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} %)</p>
        } if(percentChange < 0) {
            return <p className="text-md md:text-lg text-red-400 font-normal">&nbsp;({percentChange.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} %)</p>
        } else {
            return <p className="text-md md:text-lg text-slate-400 font-normal">-</p>
        }
    })



    return ( 
        <div className="flex flex-row w-[full] mx-auto md:mx-0 my-auto">
            {renderDifference(difference)}
            {renderPercentChange(percentChange)}
        </div>
     );
}

export default PercentChange;