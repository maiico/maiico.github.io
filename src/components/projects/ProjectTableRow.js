import React from 'react';
import { useNavigate } from 'react-router-dom';
import LamportsToSol from '../helperFunctions/LamportsToSol';

function ProjectTableRow(props) {

        let navigate = useNavigate();

    return ( 
            <tr className="text-left h-[75px] border-b-2 border-solid border-neutral-900 hover:bg-zinc-900 hover:cursor-pointer" onClick={() => {navigate('/project/' + props.symbol)}}>
                    <td className="flex flex-col md:flex-row pl-4 py-5 text-xs sm:text-m md:text-xl text-purple-400 font-semibold">
                        <img src={props.image} className="w-[35px] my-auto mr-2 rounded-full" alt={props.name}/>
                        {props.name}
                    </td>    
                    <td className="text-xs sm:text-m md:text-lg text-slate-200 font-normal">{LamportsToSol(props.floorPrice).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})} SOL</td>
                    <td className="text-xs sm:text-m md:text-lg text-slate-200 font-normal">${(LamportsToSol(props.floorPrice) * props.solPriceUsd).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</td>
                    <td className="text-xs sm:text-m md:text-lg text-green-400 font-normal">{props.overallScore} / 5</td>
            </tr>
     );
}

export default ProjectTableRow;