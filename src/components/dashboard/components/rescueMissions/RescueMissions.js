import React from 'react';
import './RescueMissions.css';
import Puff from '../../../images/puff-logo.jpeg';
import config from '../../../../Config.json';
import LamportstoSol from '../helperFunctions/LamportsToSol';
import CalculateFees from '../helperFunctions/CalculateFees';
import CalculateProfitLoss from '../helperFunctions/CalculateProfitLoss';
import CalculateProfitLossPercent from '../helperFunctions/CalculateProfitLossPercent';

function RescueMissions(props) {
    return ( 
        <div className="rescue-missions">
            <h1 className="token-income-heading">Rescue Missions</h1>
            <div className="mission-wrapper">
                <div className="mission-cost-wrapper">
                    <div className="token-name-wrapper">
                        <img src={Puff} className="token-logo" alt="solana"/>
                        <p className="token-prices-txt">Puff</p>
                    </div>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">Value</p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">Floor (SOL)</p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">Floor (USD)</p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">Fees</p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">P/L</p>
                </div>
                <div className="mission-pl-wrapper">
                    <p className="token-prices-txt">P/L %</p>
                </div>
            </div>
            <div className="mission-wrapper">
            <div className="mission-cost-wrapper">
                    <p className="token-prices-txt">
                        {config.rescueMissions.cost}
                    </p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">
                        ${(config.rescueMissions.cost*props.puffPriceUsd)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}&nbsp;USD
                    </p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">
                        {LamportstoSol(props.nacFloorPrice)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}&nbsp;sol
                    </p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">
                        ${(LamportstoSol(props.nacFloorPrice)*props.solPriceUsd)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}&nbsp;USD
                    </p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">
                        {LamportstoSol(CalculateFees(props.nacFloorPrice))
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}&nbsp;sol
                    </p>
                </div>
                <div className="mission-value-wrapper">
                    <p className="token-prices-txt">
                        ${(CalculateProfitLoss((config.rescueMissions.cost*props.puffPriceUsd), (LamportstoSol(props.nacFloorPrice)*props.solPriceUsd)))
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}&nbsp;USD
                    </p>
                </div>
                <div className="mission-pl-wrapper">
                    <p className="token-prices-txt">
                        +{(CalculateProfitLossPercent((config.rescueMissions.cost*props.puffPriceUsd), (CalculateProfitLoss((config.rescueMissions.cost*props.puffPriceUsd), (LamportstoSol(props.nacFloorPrice)*props.solPriceUsd)))))
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}%
                    </p>
                </div>
            </div>
        </div>
     );
}

export default RescueMissions;