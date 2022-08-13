import React from 'react';
import Loading from '../../loading/Loading';
import HistoricalCharts from './HistoricalCharts/HistoricalCharts';

function Market(props) {

    // render stat or loading based on stat name
    const renderStat = ((statName, stat) => {
        
        let statComponent;

        switch(statName) {
            case "floor":
                statComponent =     
                // floor price              
                <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Floor</h2>
                    <p className="text-slate-200 text-md md:text-lg font-semibold mx-auto py-1">{props.floorPrice} SOL</p>
                    <p className="text-slate-400 text-sm md:text-md font-normal mx-auto py-1 ">${(props.floorPrice * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "volume":
                statComponent = 
                // total volume
                <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Total Volume</h2>
                    <p className="text-slate-200 text-md md:text-lg font-semibold mx-auto py-1">{props.volumeAll.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} SOL</p>
                    <p className="text-slate-400 text-sm md:text-md font-normal mx-auto py-1 ">${(props.volumeAll * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "salePrice":
                statComponent = 
                // avg sale price
                <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Avg Sale Price</h2>
                    <p className="text-slate-200 text-md md:text-lg font-semibold mx-auto py-1">{props.avgPrice24hr.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} SOL</p>
                    <p className="text-slate-400 text-sm md:text-md font-normal mx-auto py-1 ">${(props.avgPrice24hr * props.solPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} USD</p>
                </div>
                break;
            case "totalListed":
                statComponent =
                //total listed
                <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">Total Listed</h2>
                    <p className="text-slate-200 text-md md:text-lg font-semibold mx-auto py-1">{props.listedCount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2}) +  " / " + props.collectionCount.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</p>
                    <p className="text-slate-400 text-sm md:text-md font-normal mx-auto py-1 ">{((props.listedCount / props.collectionCount) * 100).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} %</p>
                </div>
                break;
            default:
                statComponent = 
                    <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                        <Loading />
                    </div>

        }

        if(stat === 0) {
            statComponent =
                <div className="flex flex-col justify-center w-full h-[130px] bg-[#0e1111] p-4 mx-auto rounded-lg">
                    <Loading />
                </div>
        } else {
            return statComponent
        }

        return statComponent;
    })

    return ( 
        <div className="flex flex-col justify-center w-full bg-black px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center w-full max-w-7xl mx-auto">
                {renderStat("floor", props.floorPrice)}
                {renderStat("volume", props.volumeAll)}
                {renderStat("salePrice", props.avgPrice24hr)}
                {renderStat("totalListed", props.listedCount)}
            </div>
            <div className="flex flex-col justify-center w-full bg-black">
                <HistoricalCharts 
                    symbol={props.symbol}
                    floorPrice={props.floorPrice}
                    avgPrice24hr={props.avgPrice24hr}
                    listedCount={props.listedCount}
                />
            </div>
        </div>
     );
}

export default Market;