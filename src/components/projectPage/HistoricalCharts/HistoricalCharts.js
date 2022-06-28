import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../Config.json';
import MutateFloorChartData from '../../helperFunctions/MutateFloorChartData';
import MutateVolumeChartData from '../../helperFunctions/MutateVolumeChartData';
import MutateListedChartData from '../../helperFunctions/MutateListedChartData';
import MutateAvgSalePriceChartData from '../../helperFunctions/MutateAvgSalePriceChartData';
import FloorPriceChart from './FloorPriceChart/FloorPriceChart';
import VolumeChart from './VolumeChart/VolumeChart';
import ListedChart from './ListedChart/ListedChart';
import AvgSalePriceChart from './AvgSalePriceChart/AvgSalePriceChart';
import './HistoricalCharts.css';

function HistoricalCharts(props) {

    const [chartData, setChartData] = useState({
        floorPrice7d: [],
        listedCount7d: [],
        averageSalePrice7d: [],
        volumeDaily7d: []
    })


    useEffect(() => {

        //fetch data
        const fetchData = async () => {
            try {

                const res = await axios.get(config.apis.puffalytics.collectionHistoricalStats + props.symbol)

                setChartData(res.data)

            } catch(err) {
                console.log(err)
            }
        }

        fetchData();

    }, [])

    return ( 
        <div className="historical-charts">
            <div className="historical-charts-row">
                <div className="historical-chart-container">
                    <h2 className="historical-charts-heading">Floor</h2>
                    <FloorPriceChart chartData={MutateFloorChartData(chartData.floorPrice7d, props.floorPrice)}/>
                </div>
                <div className="historical-chart-container">
                    <h2 className="historical-charts-heading">Daily Volume</h2>
                    <VolumeChart chartData={MutateVolumeChartData(chartData.volumeDaily7d)}/>
                </div>
            </div>
            <div className="historical-charts-row">
                <div className="historical-chart-container">
                    <h2 className="historical-charts-heading">Total Listed</h2>
                    <ListedChart chartData={MutateListedChartData(chartData.listedCount7d, props.listedCount)}/>
                </div>
                <div className="historical-chart-container">
                    <h2 className="historical-charts-heading">Avg Sale Price</h2>
                    <AvgSalePriceChart chartData={MutateAvgSalePriceChartData(chartData.averageSalePrice7d, props.avgPrice24hr)}/>
                </div>
            </div>
        </div>
     );
}

export default HistoricalCharts;