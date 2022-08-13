import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../Config.json';
import MutateFloorChartData from '../../../helperFunctions/MutateFloorChartData';
import MutateVolumeChartData from '../../../helperFunctions/MutateVolumeChartData';
import MutateListedChartData from '../../../helperFunctions/MutateListedChartData';
import MutateAvgSalePriceChartData from '../../../helperFunctions/MutateAvgSalePriceChartData';
import FloorPriceChart from './FloorPriceChart/FloorPriceChart';
import VolumeChart from './VolumeChart/VolumeChart';
import ListedChart from './ListedChart/ListedChart';
import AvgSalePriceChart from './AvgSalePriceChart/AvgSalePriceChart';
import TimePeriodSelector from './TimePeriodSelector/TimePeriodSelector';
import PercentChange from './PercentChange/PercentChange';
import PercentChangeListed from './PercentChange/PercentChangeListed';
import MeanVolume from './PercentChange/MeanVolume';

function HistoricalCharts(props) {

    const [chartData, setChartData] = useState({
        floorPrice7d: [[]],
        floorPrice14d: [[]],
        floorPrice30d: [[]],
        listedCount7d: [[]],
        listedCount14d: [[]],
        listedCount30d: [[]],
        averageSalePrice7d: [[]],
        averageSalePrice14d: [[]],
        averageSalePrice30d: [[]],
        volumeDaily7d: [[]],
        volumeDaily14d: [[]],
        volumeDaily30d: [[]],
    })

    // current chart views
    const [currentFloorPriceView, setCurrentFloorPriceView] = useState("7d")
    const [currentVolumeDailyView, setCurrentVolumeDailyView] = useState("7d")
    const [currentListedCountView, setCurrentListedCountView] = useState("7d")
    const [currentAvgSalePriceView, setCurrentAvgSalePriceView] = useState("7d")


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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full max-w-7xl mx-auto py-4">
                <div className="flex flex-col w-full h-[475px] justify-center bg-[#0e1111] rounded-lg p-6">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Floor</h2>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between pb-4">
                        <TimePeriodSelector 
                            setCurrentView={setCurrentFloorPriceView}
                        />
                        <PercentChange 
                            currentView={currentFloorPriceView}
                            data7d={chartData.floorPrice7d[0][1]}
                            data14d={chartData.floorPrice14d[0][1]}
                            data30d={chartData.floorPrice30d[0][1]}
                            currentData={props.floorPrice}
                        />
                    </div>
                    <FloorPriceChart 
                        currentView={currentFloorPriceView}
                        floorPrice7d={MutateFloorChartData(chartData.floorPrice7d, props.floorPrice)}
                        floorPrice14d={MutateFloorChartData(chartData.floorPrice14d, props.floorPrice)}
                        floorPrice30d={MutateFloorChartData(chartData.floorPrice30d, props.floorPrice)}
                    />
                </div>
                <div className="flex flex-col w-full h-[475px] justify-center bg-[#0e1111] rounded-lg p-6">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Daily Volume</h2>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between pb-4">
                        <TimePeriodSelector 
                            setCurrentView={setCurrentVolumeDailyView}
                        />
                        <MeanVolume 
                            currentView={currentVolumeDailyView}
                            data7d={chartData.volumeDaily7d}
                            data14d={chartData.volumeDaily14d}
                            data30d={chartData.volumeDaily30d}
                        />
                    </div>
                    <VolumeChart 
                        currentView={currentVolumeDailyView}
                        volumeDaily7d={MutateVolumeChartData(chartData.volumeDaily7d)}
                        volumeDaily14d={MutateVolumeChartData(chartData.volumeDaily14d)}
                        volumeDaily30d={MutateVolumeChartData(chartData.volumeDaily30d)}
                    />
                </div>
                <div className="flex flex-col w-full h-[475px] justify-center bg-[#0e1111] rounded-lg p-6">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Total Listed</h2>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between pb-4">
                        <TimePeriodSelector 
                                setCurrentView={setCurrentListedCountView}
                        />
                        <PercentChangeListed
                            currentView={currentListedCountView}
                            data7d={chartData.listedCount7d[0][1]}
                            data14d={chartData.listedCount14d[0][1]}
                            data30d={chartData.listedCount30d[0][1]}
                            currentData={props.listedCount}
                        />
                    </div>
                    <ListedChart 
                        currentView={currentListedCountView}
                        listedCount7d={MutateListedChartData(chartData.listedCount7d, props.listedCount)}
                        listedCount14d={MutateListedChartData(chartData.listedCount14d, props.listedCount)}
                        listedCount30d={MutateListedChartData(chartData.listedCount30d, props.listedCount)}
                    />
                </div>
                <div className="flex flex-col w-full h-[475px] justify-center bg-[#0e1111] rounded-lg p-6">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Avg Sale Price</h2>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between pb-4">
                        <TimePeriodSelector 
                            setCurrentView={setCurrentAvgSalePriceView}
                        />
                        <PercentChange
                            currentView={currentAvgSalePriceView}
                            data7d={chartData.averageSalePrice7d[0][1]}
                            data14d={chartData.averageSalePrice14d[0][1]}
                            data30d={chartData.averageSalePrice30d[0][1]}
                            currentData={props.avgPrice24hr}
                        />
                    </div>
                    <AvgSalePriceChart 
                        currentView={currentAvgSalePriceView}
                        avgSalePrice7d={MutateAvgSalePriceChartData(chartData.averageSalePrice7d, props.avgPrice24hr)}
                        avgSalePrice14d={MutateAvgSalePriceChartData(chartData.averageSalePrice14d, props.avgPrice24hr)}
                        avgSalePrice30d={MutateAvgSalePriceChartData(chartData.averageSalePrice30d, props.avgPrice24hr)}
                    />
                </div>
        </div>
     );
}

export default HistoricalCharts;