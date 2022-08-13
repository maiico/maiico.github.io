import React from 'react';
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
        <div className="flex flex-row w-[full] mx-auto md:mx-0 my-auto">
            <p className="text-md md:text-lg text-green-400 font-normal">Avg Daily Vol. {mean.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} SOL</p>
        </div>
     );
}

export default MeanVolume;