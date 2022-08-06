import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import CustomToolTipVolume from './CustomToolTipVolume';
import Loading from '../../../../loading/Loading';

function VolumeChart(props) {

    let chartData;

    //dynamic chart data based on current view

    switch(props.currentView) {
      case "7d":
        chartData = props.volumeDaily7d
        break;
      case "14d":
        chartData = props.volumeDaily14d
        break;
      case "30d":
        chartData = props.volumeDaily30d
        break;
      default:
        chartData = props.floorPrice7d
    }

    //format date for y-axis
    const dateFormatter = (timeStamp) => {

        let output;

        switch(props.currentView) {
          case "7d":
            output = moment(timeStamp).format("DD");
            break;
          case "14d":
            output = moment(timeStamp).format("DD");
            break;
          default: output = moment(timeStamp).format("MMM-DD");
  
        }

        return output;
    }

    //format price
    const priceFormatter = (price) => {
        const formattedPrice = (price * 0.000000001).toFixed(0)

        return formattedPrice;
    }

    if(chartData.length === 0) {
        return (
            <Loading />
        );
    } else {
        return ( 
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={chartData}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid 
                    vertical={false}
                    opacity={0.05}
                />
                <XAxis 
                    dataKey="timeStamp" 
                    tickFormatter={dateFormatter} 
                    axisLine={false}
                    tickLine={false}
                    padding={{ right: 20 }}
                    stroke={"#353839"}
                />
                <YAxis 
                    datKey="volume"
                    orientation={"right"} 
                    type="number" 
                    domain={["auto", "auto"]} 
                    tickFormatter={priceFormatter} 
                    axisLine={false}
                    tickLine={false}
                    stroke={"#353839"}
                />
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    content={<CustomToolTipVolume />}
                />
                <Bar 
                    dataKey="volume" 
                    fill="#12c2e9" 
                />
                </BarChart>
            </ResponsiveContainer>
         );
    }
}

export default VolumeChart;