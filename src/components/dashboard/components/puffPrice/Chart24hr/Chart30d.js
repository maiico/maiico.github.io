import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../../Config.json';
import MutateChartData from '../../../../helperFunctions/MutateChartData';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import CustomToolTip from '../CustomToolTip/CustomToolTip';
import moment from 'moment'
import Loading from '../../../../loading/Loading';

function Chart30d(props) {

    //chart data
    const [chartData, setChartData] = useState([]);

    //format date for y-axis
    const dateFormatter = (timeStamp) => {

        const output = moment(timeStamp).format("MMM DD");

        return output;
    }

    //format price
    const priceFormatter = (price) => {
        const formattedPrice = price.toFixed(2)

        return formattedPrice;
    }

    //one minute in milliseconds for timer
    const minuteMs = 60000;

    useEffect(() => {
        //fetch data
        const fetchData = async () => {
            try{
                const res = await axios.get(config.apis.coinGecko.chartData30d)
                const data = MutateChartData(res.data.prices)
                setChartData(data)

                props.setHistoricalPrice30d(data[0].price)

            } catch(err) {
                console.log(err)
            }
        }

        //timer for fetching data every minute
        const interval = setInterval(() => {
            fetchData();
        }, minuteMs)

        fetchData();
        
        //clear timer on unmount
        return () => clearInterval(interval);

    }, [])

    if(chartData.length <= 0) {
        return <Loading />
    } else {
        return ( 
            <ResponsiveContainer 
            >   
                <AreaChart 
                    data={chartData}
                    margin={ {top: 0, right: 0, bottom: 0, left: 0 }}
                >
                     <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9945ff" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="timeStamp" 
                        type="number" 
                        domain={['dataMin', 'dataMax']} 
                        tickFormatter={dateFormatter} 
                        tickCount={5} 
                        tickSize={3}
                        interval={"preserveStartEnd"} 
                        stroke={"#353839"}
                    />
                    <YAxis 
                        dataKey="price" 
                        orientation={"right"} 
                        type="number" 
                        domain={['dataMin - 0.05', 'dataMax + 0.01']} 
                        tickFormatter={priceFormatter} 
                        interval={"preserveStartEnd"} 
                        tickCount={5} 
                        tickSize={3}
                        padding={{ top: 20, bottom: 20 }}
                        stroke={"#353839"}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#9945ff" 
                        strokeWidth="2"
                        fillOpacity={1} 
                        fill="url(#colorUv)" />
                    <Tooltip
                        content={<CustomToolTip />}
                     />
                </AreaChart>
            </ResponsiveContainer>
     );
    }
}

export default Chart30d;

