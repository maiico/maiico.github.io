import React, { useState, useEffect } from 'react';
import './Converter.css';

function Converter(props) {

    //set currencies for converter
    const [fromCurrency, setFromCurrency] = useState("PUFF")
    const [fromCurrencyAmt, setFromCurrencyAmt] = useState(0)
    const [toCurrency, setToCurrency] = useState("usd")
    const [toCurrencyAmt, setToCurrencyAmt] = useState(0)

    //list of fiat currencies
    const options = [
        {
            label: "USD",
            value: "usd"
        },
        {
            label: "EUR",
            value: "eur"
        },
        {
            label: "JPY",
            value: "jpy"
        },
        {
            label: "GBP",
            value: "gbp"
        },
        {
            label: "CHF",
            value: "chf"
        },
        {
            label: "CAD",
            value: "cad"
        },
        {
            label: "AUD",
            value: "aud"
        },
        {
            label: "ZAR",
            value: "zar"
        }
    ]

    //handle converter swap
    const handleSwap = () => {
        setFromCurrency(toCurrency)
        setFromCurrencyAmt(0)
        setToCurrency(fromCurrency)
        setToCurrencyAmt(0)
    }

    //set to and from currencies based on the swap positions
    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value)
        setToCurrencyAmt(props.puffPrices[e.target.value] * fromCurrencyAmt)
    }

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value)
        setToCurrencyAmt(fromCurrencyAmt / props.puffPrices[e.target.value])
    }

    const handleFromCurrencyInputChange = (e) => {
        setFromCurrencyAmt(e.target.value)
        if(fromCurrency == "PUFF") {
            setToCurrencyAmt(e.target.value * props.puffPrices[toCurrency])
        } else {
            setToCurrencyAmt(e.target.value / props.puffPrices[fromCurrency])
        }
        
    }

    //render the form based on from/to value
    const renderForm = () => {
        if(fromCurrency == "PUFF") {
            return (
                <form className="converter-form">
                    <label className="converter-form-label">
                        {fromCurrency}
                        <input className="converter-input" type="number" name="amount" value={displayValue(fromCurrencyAmt)} onChange={e => handleFromCurrencyInputChange(e)} />
                     </label>
                    <i className="fa-solid fa-right-left fa-2xl swap-icon" onClick={() => handleSwap()}></i>
                    <label className="converter-form-label">
                        <div className="converter-input">
                            {displayValue(toCurrencyAmt.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}))}
                        </div>
                        <select className="currency-select" value={toCurrency} onChange={handleToCurrencyChange}>
                            {options.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                </form>
            )
        } else {
            return (
                <form className="converter-form">
                    <label className="converter-form-label">
                        <select className="currency-select" value={fromCurrency} onChange={handleFromCurrencyChange}>
                            {options.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <input className="converter-input" type="number" name="amount" value={displayValue(fromCurrencyAmt)} onChange={e => handleFromCurrencyInputChange(e)} />
                    </label>
                    <i className="fa-solid fa-right-left fa-2xl swap-icon" onClick={() => handleSwap()}></i>
                    <label className="converter-form-label">
                        <div className="converter-input">
                            {displayValue(toCurrencyAmt.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 6}))}
                        </div>
                        {toCurrency}
                     </label>
                </form>
            )
        }
    }

    //do not show value is 0
    const displayValue = (amount) => {
        if(amount <= 0) {
            return ""
        } else {
            return amount
        }
    }

    return ( 
        <div className="converter">
            <h1 className="token-income-heading">Converter</h1>
            {renderForm()}
        </div>
     );
}

export default Converter;