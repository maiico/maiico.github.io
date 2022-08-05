import React from "react";
import './ToolSelector.css';

function ToolSelector(props) {

    return ( 
        <div className="tool-selector">
            <div className={props.market ? "selector-wrapper-selected" : "selector-wrapper-unselected"} onClick={() => props.pageSelector("market")}>
                <i className={props.market ? "fa-solid fa-chart-line fa-xl selector-icon-selected" : "fa-solid fa-chart-line fa-xl selector-icon-unselected"}></i>
                <h2 className={props.market ? "selector-heading-selected" : "selector-heading-unselected"}>Market</h2>
            </div>
            <div className={props.insights ? "selector-wrapper-selected" : "selector-wrapper-unselected"} onClick={() => props.pageSelector("insights")}>
                <i className={props.insights ? "fa-solid fa-magnifying-glass-chart fa-xl selector-icon-selected" : "fa-solid fa-magnifying-glass-chart fa-xl selector-icon-unselected"}></i>
                <h2 className={props.insights ? "selector-heading-selected" : "selector-heading-unselected"}>Insights</h2>
            </div>
        </div>
     );
}

export default ToolSelector;