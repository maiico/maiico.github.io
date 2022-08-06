import React from 'react';
import './PercentChange.css';
import LamportsToSol from '../../../../helperFunctions/LamportsToSol';

function MeanVolume(props) {

    // set past value based on the current view selected

    let dataSet;
    let sum = 0;
    let mean;

    switch(props.currentView) {
        case "7d":
            dataSet = props.data7d
            break;
        case "14d":
            dataSet = props.data14d
            break;
        case "30d":
            dataSet = props.data30d
            break;
        default:
            dataSet = props.data7d
            break;
    }


    // calculate the median volume

    for (let i = 0; i < dataSet.length; i++) {
        sum = sum + dataSet[i][1];
    }

    mean = LamportsToSol(sum / dataSet.length)



    return ( 
        <div className="percent-change">
            <p className="percent-change-txt-green">Avg Daily Vol. {mean.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        </div>
     );
}

export default MeanVolume;