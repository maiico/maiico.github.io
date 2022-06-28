import React, { useEffect, useState } from 'react';
import './Home.css';
import Projects from './components/projects/Projects';
import Team from './components/team/Team'
import config from '../../Config.json';
import axios from 'axios';

function Home() {

    const [solPriceUsd, setSolPriceUsd] = useState(0);

    useEffect(() => {

        const fetchSolPrices = async () => {
            try {
                const res = await axios.get(config.apis.coinGecko.url)
                setSolPriceUsd(res.data.solana.usd)
            } catch(err) {
                console.log(err)
            }
        };

        fetchSolPrices();

    }, [])

    return ( 
        <div className='home'>
            <div className="home-hero">
                <div className="home-content-container">
                    <h1 className="home-heading">We like JPEGS.</h1>
                    <h2 className="home-subheading">We are a collective of Analysts, Developers, Holders and Degenerates providing analytics and insights into NFT projects on Solana.</h2>
                </div>
            </div>
            <div className="discover-nfts-container">
                <h1 className="home-subheading-2">Discover Top-Rated NFTs</h1>
                <Projects solPriceUsd={solPriceUsd}/>
            </div>
            <div className="team">
                <Team />
            </div>
        </div>
     );
}

export default Home;