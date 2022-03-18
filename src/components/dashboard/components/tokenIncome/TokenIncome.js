import React from 'react';
import './TokenIncome.css';
import Puff from '../../../images/puff-logo.jpeg';
import All from '../../../images/all-logo.png';

function TokenIncome(props) {
    return ( 
        <div className="token-income">
            <h1 className="token-income-heading">Token Income</h1>
            <div className="token-wrapper">
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <div className="token-name-wrapper">
                            <img src={Puff} className="token-logo" alt="solana"/>
                            <p className="token-income-txt">$PUFF</p>
                        </div>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">Amount</p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">Value</p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Day</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.puffIncome)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${(props.puffIncome*props.puffPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Week</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.puffIncome * 7)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.puffIncome * 7)
                                *props.puffPriceUsd)
                                    .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Month</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.puffIncome * 30.437)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.puffIncome * 30.437)
                                *props.puffPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Year</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.puffIncome * 365)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.puffIncome * 365)
                                *props.puffPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
            </div>        
            <div className="token-wrapper">
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <div className="token-name-wrapper">
                            <img src={All} className="token-logo" alt="solana"/>
                            <p className="token-income-txt">$ALL</p>
                        </div>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">Amount</p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">Value</p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Day</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.allIncome)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${(props.allIncome*props.allPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Week</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.allIncome * 7)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.allIncome * 7)
                                *props.allPriceUsd)
                                    .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Month</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.allIncome * 30.437)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.allIncome * 30.437)
                                *props.allPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
                <div className="token-income-wrapper">
                    <div className="token-day-wrapper">
                        <p className="token-income-txt">Year</p>
                    </div>
                    <div className="token-amount-wrapper">
                        <p className="token-income-txt">
                            {(props.allIncome * 365)
                                .toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                        </p>
                    </div>
                    <div className="token-value-wrapper">
                        <p className="token-income-txt">
                            ${((props.allIncome * 365)
                                *props.allPriceUsd)
                                .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}&nbsp;{props.fiatCurrency}
                        </p>
                    </div>
                </div>
            </div>        
        </div>
     );
}

export default TokenIncome;