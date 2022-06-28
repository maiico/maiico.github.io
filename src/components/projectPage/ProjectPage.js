import React, { useEffect, useState } from 'react';
import './ProjectPage.css';
import axios from 'axios';
import config from '../../Config.json';
import { useParams } from 'react-router-dom'
import ProjectHeader from './projectHeader/ProjectHeader';
import ProjectPageStat from './projectPageStat/ProjectPageStat';
import ProjectAnalysis from './ProjectAnalysis/ProjectAnalysis';
import HistoricalCharts from './HistoricalCharts/HistoricalCharts';

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
        <div className="project-page">
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
            <div className="project-stats-container">
                <div className="project-stats-row">
                    <ProjectPageStat 
                        heading={"Floor"}
                        firstStat={currentCollectionStats.floorPrice}
                        currency={" SOL"}
                        secondStat={currentCollectionStats.floorPrice * solPrice}
                        secondStatPreSymbol={"$"}
                        secondStatPostSymbol={" USD"}
                    />
                    <ProjectPageStat 
                        heading={"Total Volume"}
                        firstStat={currentCollectionStats.volumeAll}
                        currency={" SOL"}
                        secondStat={currentCollectionStats.volumeAll * solPrice}
                        secondStatPreSymbol={"$"}
                        secondStatPostSymbol={" USD"}
                    />
                </div>
                <div className="project-stats-row">
                    <ProjectPageStat 
                        heading={"Avg Sale Price"}
                        firstStat={currentCollectionStats.avgPrice24hr}
                        currency={" SOL"}
                        secondStat={currentCollectionStats.avgPrice24hr * solPrice}
                        secondStatPreSymbol={"$"}
                        secondStatPostSymbol={" USD"}
                    />
                    <ProjectPageStat 
                        heading={"Total Listed"}
                        firstStat={currentCollectionStats.listedCount}
                        currency={" / " + projectDetails.collectionCount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}
                        secondStat={(currentCollectionStats.listedCount / projectDetails.collectionCount) * 100}
                        secondStatPreSymbol={""}
                        secondStatPostSymbol={"%"}
                    />
                </div>
            </div>
            <div className="historical-charts-container">
                <HistoricalCharts 
                    symbol={symbol.symbol}
                    floorPrice={currentCollectionStats.floorPrice}
                    avgPrice24hr={currentCollectionStats.avgPrice24hr}
                    listedCount={currentCollectionStats.listedCount}
                />
            </div>
            <div className="analysis-row">
                <ProjectAnalysis 
                    heading={"Artwork"}
                    content={projectDetails.artTxt}
                    score={projectDetails.artScore}
                />
                <ProjectAnalysis 
                    heading={"Tokenomics"}
                    content={projectDetails.tokenomicsTxt}
                    score={projectDetails.tokenomicsScore}
                />
                <ProjectAnalysis 
                    heading={"Team"}
                    content={projectDetails.teamTxt}
                    score={projectDetails.teamScore}
                />
            </div>
            <div className="analysis-row">
                <ProjectAnalysis 
                    heading={"Community"}
                    content={projectDetails.communityTxt}
                    score={projectDetails.communityScore}
                />
                <ProjectAnalysis 
                    heading={"Utility"}
                    content={projectDetails.utilityTxt}
                    score={projectDetails.utilityScore}
                />
                <ProjectAnalysis 
                    heading={"Insights"}
                    content={projectDetails.notesTxt}
                    score={projectDetails.overallScore}
                />
            </div>
        </div>
     );
}

export default ProjectPage;