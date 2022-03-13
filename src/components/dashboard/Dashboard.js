import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import config from '../../Config.json';
import axios from 'axios';
import PuffPrice from './components/puffPrice/PuffPrice';
import TokenPrices from './components/tokenPrices/TokenPrices';
import TokenIncome from './components/tokenIncome/TokenIncome';
import FloorPrices from './components/floorPrices/FloorPrices';
import RescueMissions from './components/rescueMissions/RescueMissions';
import OwnedApes from './components/ownedApes/OwnedApes';

function Dashboard() {

    //token prices
    const [solPriceUsd, setSolPriceUsd] = useState(0)

    //puff stats
    const [puffPrices, setPuffPrices] = useState(0)
    const [puffPriceUsd, setPuffPriceUsd] = useState(0)
    const [puffPriceChange24h, setPuffPriceChange24h] = useState(0)
    const [puffPriceChange24hPercent, setPuffPriceChange24hPercent] = useState(0)
    const [puffPriceChange7dPercent, setPuffPriceChange7dPercent] = useState(0)
    const [puffPriceChange30dPercent, setPuffPriceChange30dPercent] = useState(0)
    const [puffVolume, setPuffVolume] = useState(0)
    const [puff24High, setPuff24High] = useState(0)
    const [puff24Low, setPuff24Low] = useState(0)
    const [puffAth, setPuffAth] = useState(0)
    const [puffAthChangePercent, setPuffAthChangePercent] = useState(0)
    const [puffAtl, setPuffAtl] = useState(0)
    const [puffAtlChangePercent, setPuffAtlChangePercent] = useState(0)

    //fiat
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

    //one minute in milliseconds for timer
    const minuteMs = 60000;

    useEffect(() => {
        // fetch token prices
        const fetchPuffPrices = async () => {
            try {
                const res = await axios.get(config.apis.coinGecko.puff)
                setPuffPrices(res.data.market_data.current_price)
                setPuffPriceUsd(res.data.market_data.current_price.usd)
                setPuffPriceChange24h(res.data.market_data.price_change_24h)
                setPuffPriceChange24hPercent(res.data.market_data.price_change_percentage_24h)
                setPuffPriceChange7dPercent(res.data.market_data.price_change_percentage_7d)
                setPuffPriceChange30dPercent(res.data.market_data.price_change_percentage_30d)
                setPuffVolume(res.data.market_data.total_volume.usd)
                setPuff24High(res.data.market_data.high_24h.usd)
                setPuff24Low(res.data.market_data.low_24h.usd)
                setPuffAth(res.data.market_data.ath.usd)
                setPuffAthChangePercent(res.data.market_data.ath_change_percentage.usd)
                setPuffAtl(res.data.market_data.atl.usd)
                setPuffAtlChangePercent(res.data.market_data.atl_change_percentage.usd)
            } catch(err) {
                console.log(err)
            }
        }

        const fetchSolPrices = async () => {
            try {
                const res = await axios.get(config.apis.coinGecko.url)
                setSolPriceUsd(res.data.solana.usd)
                setSolPriceCad(res.data.solana.cad)
            } catch(err) {
                console.log(err)
            }
        };

        //fetch floor prices
        const fetchFloorPrices = async () => {
            try {

                let res = await axios.get(config.apis.magicEden.sac)
                setSacFloorPrice(res.data.floorPrice)
                setSacTotalListed(res.data.listedCount)

                res = await axios.get(config.apis.magicEden.nac)
                setNacFloorPrice(res.data.floorPrice)
                setNacTotalListed(res.data.listedCount)

            } catch(err) {
                console.log(err)
            }
        }

        //timer for fetching data every minute
        const interval = setInterval(() => {
            fetchPuffPrices();
            fetchSolPrices();
            fetchFloorPrices();
        }, minuteMs)

        fetchPuffPrices();
        fetchSolPrices();
        fetchFloorPrices();

        //clear timer on unmount
        return () => clearInterval(interval);

    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-row">
                <PuffPrice 
                    puffPrices={puffPrices}
                    puffPriceUsd={puffPriceUsd}
                    puffPriceChange24hPercent={puffPriceChange24hPercent}
                    puffPriceChange7dPercent={puffPriceChange7dPercent}
                    puffPriceChange30dPercent={puffPriceChange30dPercent}
                    puffVolume={puffVolume}
                    puff24High={puff24High}
                    puff24Low={puff24Low}
                    puffAth={puffAth}
                    puffAthChangePercent={puffAthChangePercent}
                    puffAtl={puffAtl}
                    puffAtlChangePercent={puffAtlChangePercent}
                />
            </div>
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