import React, { useState, useEffect } from 'react';
import './FloorPrices.css';
import LamportsToSol from '../helperFunctions/LamportsToSol';
import SAC from '../../../images/sac.png';
import NAC from '../../../images/nac.png';



function FloorPrices(props) {

    return (
        <div className="floor-prices">
            <h1 className="token-prices-heading">Floor Price</h1>
            <div className="collection-wrapper">
                <div className="collection-heading-wrapper">
                    <img src={SAC} className="collection-img" alt="Stoned Ape Crew" />
                    <h2 className="collection-subheader">SAC</h2>
                </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Floor (SOL)</p>
                        <p className="floor-prices-txt">
                            {(LamportsToSol(props.sacFloorPrice))
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} sol
                        </p>
                    </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Floor (USD)</p>
                        <p className="floor-prices-txt">
                            ${(LamportsToSol(props.sacFloorPrice)*props.solPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD
                        </p>
                    </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Total Listed</p>
                        <p className="floor-prices-txt">{props.sacTotalListed} / 4200</p>
                    </div>
            </div>
            <div className="collection-wrapper">
                <div className="collection-heading-wrapper">
                    <img src={NAC} className="collection-img" alt="Nuked Ape Crew" />
                    <h2 className="collection-subheader">NAC</h2>
                </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Floor (SOL)</p>
                        <p className="floor-prices-txt">
                            {(LamportsToSol(props.nacFloorPrice))
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} sol
                        </p>
                    </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Floor (USD)</p>
                        <p className="floor-prices-txt">
                            ${(LamportsToSol(props.nacFloorPrice)*props.solPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD
                        </p>
                    </div>
                    <div className="collection-stat-wrapper">
                        <p className="floor-prices-txt">Total Listed</p>
                        <p className="floor-prices-txt">{props.nacTotalListed} / 4200</p>
                    </div>
            </div>
        </div>
    );
}

export default FloorPrices;