import React, {useState} from 'react';
import './TokenPrices.css';
import Solana from '../../../images/solana-logo.png';
import Puff from '../../../images/puff-logo.jpeg';

function TokenPrices(props) {
    const [fiatCurrency, setFiatCurrency] = useState("USD")

    return (
        <div className="token-prices">
            <h1 className="token-prices-heading">Token Prices</h1>
                <div className="price-wrapper">
                    <div className="token-name-wrapper">
                        <img src={Solana} className="token-logo" alt="solana"/>
                        <p className="token-prices-txt">Solana</p>
                    </div>
                    <p className="token-prices-txt">${props.solPriceUsd.toFixed(2)}&nbsp;{fiatCurrency}</p>
                </div>
                <div className="price-wrapper">
                    <div className="token-name-wrapper">
                        <img src={Puff} className="token-logo" alt="solana"/>
                        <p className="token-prices-txt">Puff</p>
                    </div>
                    <p className="token-prices-txt">${props.puffPriceUsd.toFixed(2)}&nbsp;{fiatCurrency}</p>
                </div>
        </div>
    );
}

export default TokenPrices;