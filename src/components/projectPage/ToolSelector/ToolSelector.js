import React from "react";

function ToolSelector(props) {

    const selectedStyle = "flex flex-col justify-center border-b border-b-slate-200 border-b-4 mx-4"
    const unselectedStyle = "flex flex-col justify-center mx-4"

    const selectedIconStyleChart = "fa-solid fa-chart-line fa-xl text-slate-200 mx-auto my-2"
    const unselectedIconStyleChart = "fa-solid fa-chart-line fa-xl text-slate-600 mx-auto my-2"
    const selectedIconStyleInsights = "fa-solid fa-magnifying-glass-chart fa-xl text-slate-200 mx-auto my-2"
    const unselectedIconStyleInsights = "fa-solid fa-magnifying-glass-chart fa-xl text-slate-600 mx-auto my-2"

    const selectedHeaderStyle = "text-center text-sm md:text-xl font-semibold  text-slate-200 py-2"
    const unselectedHeaderStyle = "text-center text-sm md:text-xl font-semibold  text-slate-600 py-2"

    return ( 
        <div className="flex justify-center py-4">
            <button className={props.market ? selectedStyle : unselectedStyle} onClick={() => props.pageSelector("market")}>
                <i className={props.market ? selectedIconStyleChart: unselectedIconStyleChart}></i>
                <h2 className={props.market ? selectedHeaderStyle : unselectedHeaderStyle}>Market</h2>
            </button>
            <button className={props.insights ? selectedStyle : unselectedStyle} onClick={() => props.pageSelector("insights")}>
                <i className={props.insights ? selectedIconStyleInsights: unselectedIconStyleInsights}></i>
                <h2 className={props.insights ? selectedHeaderStyle : unselectedHeaderStyle}>Insights</h2>
            </button>
        </div>
     );
}

export default ToolSelector;