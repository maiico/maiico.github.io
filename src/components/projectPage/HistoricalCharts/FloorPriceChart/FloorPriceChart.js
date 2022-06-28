import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import moment from 'moment';
import CustomToolTipFloor from './CustomToolTipFloor';
import Loading from '../../../loading/Loading';


function FloorPriceChart(props) {

    //format date for y-axis
    const dateFormatter = (timeStamp) => {

        const output = moment(timeStamp).format("DD");

        return output;
    }

    //format price
    const priceFormatter = (price) => {
        const formattedPrice = (price * 0.000000001).toFixed(2)

        return formattedPrice;
    }

    if(props.chartData.length === 0) {
        return <Loading />;
    } else {
        return ( 
            <ResponsiveContainer height={"100%"} width={"100%"}>
            <AreaChart
              data={props.chartData}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c471ed" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
              <XAxis
                dataKey="timeStamp" 
                tickFormatter={dateFormatter} 
                axisLine={false}
                tickLine={false}
                padding={{ right: 20 }}
                stroke={"#353839"}
               />
              <YAxis 
                dataKey="floor" 
                orientation={"right"} 
                type="number" 
                domain={["auto", "auto"]} 
                tickFormatter={priceFormatter} 
                axisLine={false}
                tickLine={false}
                stroke={"#353839"}
              />
              <Tooltip 
                content={<CustomToolTipFloor />}
              />
              <Area 
                type="monotone" 
                dataKey="floor" 
                stroke="#c471ed" 
                strokeWidth="2"
                fillOpacity={1} 
                fill="url(#colorUv)" 
              />
              <CartesianGrid 
                vertical={false}
                opacity={0.05}
              />
            </AreaChart>
            </ResponsiveContainer>
         );
    }
}

export default FloorPriceChart;
