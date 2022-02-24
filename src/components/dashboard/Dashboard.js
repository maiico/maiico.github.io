import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import config from '../../Config.json';
import axios from 'axios';
import TokenPrices from './components/tokenPrices/TokenPrices';
import TokenIncome from './components/tokenIncome/TokenIncome';
import FloorPrices from './components/floorPrices/FloorPrices';
import RescueMissions from './components/rescueMissions/RescueMissions';
import OwnedApes from './components/ownedApes/OwnedApes';

function Dashboard() {

    //token prices
    const [solPriceUsd, setSolPriceUsd] = useState(0)
    const [puffPriceUsd, setPuffPriceUsd] = useState(0)
    const [fiatCurrency, setFiatCurrency] = useState('usd')

    //floor prices
    const [solPriceCad, setSolPriceCad] = useState(0)
    const [puffPriceCad, setPuffPriceCad] = useState(0)
    const [sacFloorPrice, setSacFloorPrice] = useState(0)
    const [sacTotalListed, setSacTotalListed] = useState(0)
    const [nacFloorPrice, setNacFloorPrice] = useState(0)
    const [nacTotalListed, setNacTotalListed] = useState(0)

    //puff income
    const [puffIncome, setPuffIncome] = useState(0)

    
    useEffect(() => {
        // fetch token prices
        const fetchTokenPrices = async () => {
            try {
                const res = await axios.get(config.apis.coinGecko.url)
                setSolPriceUsd(res.data.solana.usd)
                setSolPriceCad(res.data.solana.cad)
                setPuffPriceUsd(res.data.puff.usd)
                setPuffPriceCad(res.data.puff.cad)
            } catch(err) {
                console.log(err)
            }
        };

        //fetch floor prices
        const fetchFloorPrices = async () => {
            try {
                let res = await axios.get(config.apis.magicEden.sac)
                setSacFloorPrice(res.data.results.floorPrice)
                setSacTotalListed(res.data.results.listedCount)

                res = await axios.get(config.apis.magicEden.nac)
                setNacFloorPrice(res.data.results.floorPrice)
                setNacTotalListed(res.data.results.listedCount)

            } catch(err) {
                console.log(err)
            }
        }

        fetchTokenPrices();
        fetchFloorPrices();

    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-row">
                <OwnedApes 
                    setPuffIncome={setPuffIncome}
                />
            </div>
            <div className="dashboard-row">
                <div className="dashboard-col">
                    <TokenPrices 
                        solPriceUsd={solPriceUsd}
                        solPriceCad={solPriceCad}
                        puffPriceUsd={puffPriceUsd}
                        puffPriceCad={puffPriceCad}
                    />
                    <TokenIncome 
                        puffIncome={puffIncome}
                        puffPriceUsd={puffPriceUsd}
                        puffPriceCad={puffPriceCad}
                        fiatCurrency={'USD'}
                    />
                </div>
                <div className="dashboard-col">
                    <FloorPrices 
                        sacFloorPrice={sacFloorPrice}
                        sacTotalListed={sacTotalListed}
                        nacFloorPrice={nacFloorPrice}
                        nacTotalListed={nacTotalListed}
                        solPriceUsd={solPriceUsd}
                        solPriceCad={solPriceCad}
                        puffPriceUsd={puffPriceUsd}
                        puffPriceCad={puffPriceCad}
                    />
                </div>
            </div>
            <div className="dashboard-row">
                <RescueMissions 
                    nacFloorPrice={nacFloorPrice}
                    solPriceUsd={solPriceUsd}
                    solPriceCad={solPriceCad}
                    puffPriceUsd={puffPriceUsd}
                    puffPriceCad={puffPriceCad}
                />
            </div>
        </div>
    );
}

export default Dashboard;