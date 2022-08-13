import React, { useState }from 'react';

function TImePeriodSelector(props) {

    //set current historical view 
    const [currentHistoricalView, setCurrentHistoricalView] = useState("7d")

    const handleClick = (historicalView) => {
        setCurrentHistoricalView(historicalView)
        props.setCurrentView(historicalView)
    }

    return ( 
        <div className="flex flex-row w-[200px] justify-between bg-[#181a18] rounded-full mx-auto md:mx-0 my-2 p-1 px-2">
            <p className={currentHistoricalView == "7d" ? "text-m text-slate-200 my-auto font-semibold" : "text-m text-gray-600 my-auto font-normal"} onClick={() => {handleClick("7d")}}>7D</p>
            <p className={currentHistoricalView == "14d" ? "text-m text-slate-200 my-auto font-semibold" : "text-m text-gray-600 my-auto font-normal"} onClick={() => {handleClick("14d")}}>14D</p>
            <p className={currentHistoricalView == "30d" ? "text-m text-slate-200 my-auto font-semibold" : "text-m text-gray-600 my-auto font-normal"} onClick={() => {handleClick("30d")}}>30D</p>
        </div>
     );
}

export default TImePeriodSelector;
