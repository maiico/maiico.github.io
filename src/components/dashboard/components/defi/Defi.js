import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Defi.css';
import Raydium from '../../../images/raydium.png';
import Orca from '../../../images/orca.png';
import Config from '../../../../Config.json';
import FormatLargeNumbers from '../helperFunctions/FormatLargeNumbers';
import Loading from '../../../loading/Loading';

function Defi(props) {

const [raydiumPuffUsdc, setRaydiumPuffUsdc] = useState({
    liquidity: 0,
    volume7d: 0,
    fee7d: 0,
    apr7d: 0
})
const [orcaPuffSol, setOrcaPuffSol] = useState({
    liquidity: 0,
    volume_7d: 0,
    fee7d: 0,
    apy_7d: 0
})
const [raydiumAllSol, setRaydiumAllSol] = useState({
    liquidity: 0,
    volume7d: 0,
    fee7d: 0,
    apr7d: 0
})
const [raydiumPuffUsdcFarm, setRaydiumPuffUsdcFarm] = useState({
    liquidity_locked: 0,
    apy: 0,
})

useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await axios.get(Config.apis.defi.stats)
            const raydiumPairs = res.data.raydiumPairs
            const orcaPairs = res.data.orcaPairs
            const raydiumFarms = res.data.raydiumFarms

            //loop through raydium pairs and set the appropriate objects in state
            for(let i = 0; i < raydiumPairs.length; i++) {
                if(raydiumPairs[i].name === "PUFF-USDC") {
                    setRaydiumPuffUsdc(raydiumPairs[i])
                } else if (raydiumPairs[i].name === "$ALL-SOL") {
                    setRaydiumAllSol(raydiumPairs[i])
                }
            }

            //loop through orca pairs and set the appropriate value in state
            for(let i = 0; i < orcaPairs.length; i++) {
                if(orcaPairs[i].name2 === "PUFF/SOL") {
                    setOrcaPuffSol(orcaPairs[i])
                }
            }

            //loop through raydium farms and set the appropriate value in state
            for(let i = 0; i < raydiumFarms.length; i++) {
                if(raydiumFarms[i].identifier === "PUFF-USDC") {
                    setRaydiumPuffUsdcFarm(raydiumFarms[i])
                }
            }

        } catch(err) {
            console.log(err)
        }
    }

    fetchData();
}, [])


if(raydiumPuffUsdc.liquidity === 0) {
    return (
        <div className="defi">
            <h1 className="defi-heading">DeFi</h1>
            <Loading />
        </div>
    )
} else {
    return ( 
        <div className="defi">
                <h1 className="defi-heading">DeFi</h1>
                        <h2 className="defi-subheading">Liquidity Pools</h2>
                    <div className="liquidity-pools">
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <p className="defi-subheading">Pair</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="defi-subheading">TVL</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="defi-subheading">Vol (7D)</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="defi-subheading">Fees (7D)</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="defi-subheading">APR (7D)</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <img src={Raydium} className="defi-logo" alt="raydium"/>
                                <p className="dex-txt">PUFF-USDC</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers((raydiumPuffUsdc.liquidity))}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers(raydiumPuffUsdc.volume7d)}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers(raydiumPuffUsdc.fee7d)}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">{raydiumPuffUsdc.apr7d}%</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <img src={Orca} className="defi-logo" alt="Orca"/>
                                <p className="dex-txt">PUFF-SOL</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers((orcaPuffSol.liquidity))}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers((orcaPuffSol.volume_7d))}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">-</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">{orcaPuffSol.apy_7d.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}%</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="defi-heading-wrapper">
                                <img src={Raydium} className="defi-logo" alt="raydium"/>
                                <p className="dex-txt">ALL-SOL</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers(raydiumAllSol.liquidity)}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers(raydiumAllSol.volume7d)}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">${(FormatLargeNumbers(raydiumAllSol.fee7d)).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                            <div className="defi-stat-wrapper">
                                <p className="dex-txt">{raydiumAllSol.apr7d}%</p>
                            </div>
                        </div>
                    </div>
                        <h2 className="defi-subheading">Farms</h2>
                    <div className="liquidity-pools">
                        <div className="dex-headings-wrapper">
                            <div className="farms-heading-wrapper">
                                <p className="defi-subheading">Pair</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="defi-subheading">TVL</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="defi-subheading">APR</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="farms-heading-wrapper">
                                <img src={Raydium} className="defi-logo" alt="raydium"/>
                                <p className="dex-txt">PUFF-USDC</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="dex-txt">${FormatLargeNumbers(raydiumPuffUsdcFarm.liquidity_locked)}</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="dex-txt">{raydiumPuffUsdcFarm.apy}%</p>
                            </div>
                        </div>
                        <div className="dex-headings-wrapper">
                            <div className="farms-heading-wrapper">
                                <img src={Orca} className="defi-logo" alt="Orca"/>
                                <p className="dex-txt">SOL-USDC</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="dex-txt">-</p>
                            </div>
                            <div className="farms-stat-wrapper">
                                <p className="dex-txt">-</p>
                            </div>
                        </div>
                    </div>
        </div>
     );
}


}

export default Defi;