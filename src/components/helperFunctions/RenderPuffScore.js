import React from 'react';
import puffIcon from '../images/puff-icon.png';
import puffIconDark from '../images/puff-icon-dark.png';

function RenderPuffScore(score) {

    let puffScoreDiv;

    switch(Math.round(score)) {
        case 5:
            puffScoreDiv = 
                <div className="flex justify-center mx-auto pb-2">
                    <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                </div>
            break;
        case 4:
            puffScoreDiv = 
            <div className="flex justify-center mx-auto pb-2">
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
            </div>
            break;
        case 3:
            puffScoreDiv = 
            <div className="flex justify-center mx-auto pb-2">
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
            </div>
            break;
        case 2:
            puffScoreDiv = 
            <div className="flex justify-center mx-auto pb-2">
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
            </div>
            break;
        case 1:
            puffScoreDiv = 
            <div className="flex justify-center mx-auto pb-2">
                <img src={puffIcon} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
            </div>
            break;
        default:
                puffScoreDiv = 
                <div className="flex justify-center mx-auto pb-2">
                    <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                    <img src={puffIconDark} className="w-[25px] mx-auto mr-1" alt="puff"></img>
                </div>
            break;
    }

    return ( 
        puffScoreDiv
     );

}

export default RenderPuffScore;