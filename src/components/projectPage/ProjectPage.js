import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../Config.json';
import { useParams } from 'react-router-dom'
import ProjectHeader from './projectHeader/ProjectHeader';
import ToolSelector from './ToolSelector/ToolSelector';
import Market from './Market/Market';
import Insights from './Insights/Insights';


function ProjectPage(props) {

    const [projectDetails, setProjectDetails] = useState({
        symbol: "",
        name: "",
        website: "",
        discord: "",
        twitter: "",
        collectionCount: 0,
        analyst: "",
        token: "",
        artScore: 0,
        artTxt: "loading",
        tokenomicsScore: 0,
        tokenomicsTxt: "loading",
        teamScore: 0,
        teamTxt: "loading",
        communityScore: 0,
        communityTxt: "loading",
        utilityScore: 0,
        utilityTxt: "loading",
        notesTxt: ""
    });
    const [currentCollectionStats, setCurrentCollectionStats] = useState({
        floorPrice: 0,
        volumeAll: 0,
        avgPrice24hr: 0,
        listedCount: 0
    });
    const [solPrice, setSolPrice] = useState(0);
    const [market, setMarket] = useState(true);
    const [insights, setInsights] = useState(false);

    // function to set which page is selected
   const pageSelector = ((selectedPage) => {
        {
            switch(selectedPage) {
                case "market":
                    setMarket(true)
                    setInsights(false)
                    break;
                case "insights":
                    setMarket(false)
                    setInsights(true)
                    break;
            }
        }
    })

    const symbol = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {

                let res = await axios.get(config.apis.puffalytics.collectionDetails + symbol.symbol);

                setProjectDetails(res.data.Item);

                res = await axios.get(config.apis.puffalytics.collectionCurrentStats + symbol.symbol);

                setCurrentCollectionStats(res.data)

                res = await axios.get(config.apis.coinGecko.solPriceUsd)

                setSolPrice(res.data.solana.usd)

            } catch(err) {
                console.log(err);
            }
        }

        fetchData();

    }, [])


    return ( 
        <div className="flex flex-col w-full justify-center bg-black py-[125px]">
            <ProjectHeader  
                name={projectDetails.name}
                image={projectDetails.image}
                description={projectDetails.description}
                discord={projectDetails.discord}
                twitter={projectDetails.twitter}
                website={projectDetails.website}
                overallScore={projectDetails.overallScore}
                analyst={projectDetails.analyst}
            />
            <ToolSelector
                pageSelector={pageSelector}
                market={market}
                insights={insights}
            />
            {market ?             
                <Market
                    symbol={symbol.symbol}
                    floorPrice={currentCollectionStats.floorPrice}
                    volumeAll={currentCollectionStats.volumeAll}
                    avgPrice24hr={currentCollectionStats.avgPrice24hr}
                    listedCount={currentCollectionStats.listedCount}
                    collectionCount={projectDetails.collectionCount}
                    solPrice={solPrice}
                /> :
                null}
                {insights ?
                    <Insights
                        artTxt={projectDetails.artTxt}
                        artScore={projectDetails.artScore}
                        tokenomicsTxt={projectDetails.tokenomicsTxt}
                        tokenomicsScore={projectDetails.tokenomicsScore}
                        teamTxt={projectDetails.teamTxt}
                        teamScore={projectDetails.teamScore}
                        communityTxt={projectDetails.communityTxt}
                        communityScore={projectDetails.communityScore}
                        utilityTxt={projectDetails.utilityTxt}
                        utilityScore={projectDetails.utilityScore}
                        insightsTxt={projectDetails.notesTxt}
                        insightsScore={projectDetails.overallScore} 
                    /> :
                    null}
        </div>
     );
}

export default ProjectPage;