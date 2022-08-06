import React, { useEffect, useState, createRef} from 'react';
import './Home.css';
import Projects from './components/projects/Projects';
import Team from './components/team/Team'
import config from '../../Config.json';
import axios from 'axios';
import FirstHeroImg from '../images/hero-img-1.png';
import SecondHeroImg from '../images/hero-img-2.png';

function Home() {

    const [solPriceUsd, setSolPriceUsd] = useState(0);
    const scrollDiv = createRef();

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
                    <div className="home-txt-container">
                        <h1 className="home-heading">We like JPEGS.</h1>
                        <h2 className="home-subheading">Get quick analytics and insights on top-rated NFT projects on Solana.</h2>
                        <h3 className="home-subheading-2">Fast-track DYOR by discovering all you need to know about an NFT project. All in one place.</h3>
                        <button className="discover-button"           
                            onClick={() => {scrollDiv.current.scrollIntoView({ behavior: 'smooth' })}}>Discover Top-Rated NFTs</button>
                    </div>
                    <div className="hero-img-container">
                        <img src={FirstHeroImg} className="hero-img-1" alt="charts" />
                        <img src={SecondHeroImg} className="hero-img-2" alt="charts" />
                    </div>
                </div>
            </div>
            <div className="discover-nfts-container" ref={scrollDiv}>
                <h1 className="home-subheading-gradient">Discover Top-Rated NFTs</h1>
                <Projects solPriceUsd={solPriceUsd}/>
            </div>
            <div className="team">
                <Team />
            </div>
        </div>
     );
}

export default Home;