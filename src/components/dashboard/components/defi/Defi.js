import React from 'react';
import './Defi.css';
import Raydium from '../../../images/raydium.png';
import Puff from '../../../images/puff-logo.jpeg';
import Orca from '../../../images/orca.png';
 
function Defi() {
    return ( 
        <div className="defi">
                <h1 className="defi-heading">DeFi</h1>
                    {/* <div className="token-name-wrapper">
                        <img src={Puff} className="token-logo" alt="solana"/>
                        <p className="token-prices-txt">$PUFF</p>
                    </div> */}
                    {/* <h2 className="defi-subheading">Liquidity Pools / Farms</h2> */}
                    <div className="liquidity-pools">
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <img src={Raydium} className="defi-logo" alt="raydium" />
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">TVL</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">Vol</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">Fees</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">APR</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <p className="dex-txt">PUFF-USDC</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">545 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">45 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">5.5 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">35%</p>
                            </div>
                        </div>
                    </div>
                    <div className="liquidity-pools">
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <img src={Orca} className="defi-logo" alt="raydium" />
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">TVL</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">Vol</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">Fees</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-heading-txt">APR</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <p className="dex-txt">PUFF-USDC</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">545 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">45 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">5.5 K</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">35%</p>
                            </div>
                        </div>
                    </div>
        </div>
     );
}

export default Defi;