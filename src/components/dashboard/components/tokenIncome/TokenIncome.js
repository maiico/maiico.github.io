import React from 'react';
import './TokenIncome.css';
import config from '../../../../Config.json';
import Puff from '../../../images/puff-logo.jpeg';

function TokenIncome(props) {
    return ( 
        <div className="token-income">
            <h1 className="token-income-heading">Token Income</h1>
            <div className="token-income-wrapper">
                <div className="token-day-wrapper">
                    <div className="token-name-wrapper">
                        <img src={Puff} className="token-logo" alt="solana"/>
                        <p className="token-prices-txt">Puff</p>
                    </div>
                </div>
                <div className="token-amount-wrapper">
                    <p className="token-prices-txt">Amount</p>
                </div>
                <div className="token-value-wrapper">
                    <p className="token-prices-txt">Value</p>
                </div>
            </div>
            <div className="token-income-wrapper">
                <div className="token-day-wrapper">
                    <p className="token-prices-txt">Day</p>
                </div>
                <div className="token-amount-wrapper">
                    <p className="token-prices-txt">
                        {(props.puffIncome)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                    </p>
                </div>
                <div className="token-value-wrapper">
                    <p className="token-prices-txt">
                        ${(props.puffIncome*props.puffPriceUsd)
                            .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                    </p>
                </div>
            </div>
            <div className="token-income-wrapper">
                <div className="token-day-wrapper">
                    <p className="token-prices-txt">Week</p>
                </div>
                <div className="token-amount-wrapper">
                    <p className="token-prices-txt">
                        {(props.puffIncome * 7)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                    </p>
                </div>
                <div className="token-value-wrapper">
                    <p className="token-prices-txt">
                        ${((props.puffIncome * 7)
                            *props.puffPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                    </p>
                </div>
            </div>
            <div className="token-income-wrapper">
                <div className="token-day-wrapper">
                    <p className="token-prices-txt">Month</p>
                </div>
                <div className="token-amount-wrapper">
                    <p className="token-prices-txt">
                        {(props.puffIncome * 30.437)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                    </p>
                </div>
                <div className="token-value-wrapper">
                    <p className="token-prices-txt">
                        ${((props.puffIncome * 30.437)
                            *props.puffPriceUsd)
                            .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                    </p>
                </div>
            </div>
            <div className="token-income-wrapper">
                <div className="token-day-wrapper">
                    <p className="token-prices-txt">Year</p>
                </div>
                <div className="token-amount-wrapper">
                    <p className="token-prices-txt">
                        {(props.puffIncome * 365)
                            .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                    </p>
                </div>
                <div className="token-value-wrapper">
                    <p className="token-prices-txt">
                        ${((props.puffIncome * 365)
                            *props.puffPriceUsd)
                            .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                    </p>
                </div>
            </div>
        </div>
     );
}

export default TokenIncome;