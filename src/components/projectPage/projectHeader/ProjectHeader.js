import React from 'react';
import RenderPuffScore from '../../helperFunctions/RenderPuffScore';
import RenderAnalyst from '../../helperFunctions/RenderAnalyst';

function ProjectHeader(props) {
    return ( 
        <div className="flex flex-col w-full max-w-[800px] justify-center mx-auto p-2 border-b-2 border-solid border-neutral-800">
            <img src={props.image} className="w-[120px] mx-auto mb-2 rounded-full " alt={props.name}></img>
            <h1 className="text-center text-slate-200 text-2xl md:text-3xl font-bold py-2">{props.name}</h1>
            <p className="text-center text-green-400 text-l md:text-xl font-normal py-2">Puffalytics Score ({props.overallScore}/5)  </p>
                {RenderPuffScore(props.overallScore)}
            <p className="text-center text-slate-300 text-sm md:text-lg font-medium py-2">{props.description}</p>
                <div className="flex w-full max-w-[280px] justify-between mx-auto py-2">
                        <a href={props.twitter} target="_blank" rel="noreferrer nofollow" className="text-slate-400 mx-auto my-auto">
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </a>
                        <a href={props.discord} target="_blank" rel="noreferrer nofollow" className="text-slate-400 mx-auto my-auto">
                            <i className="fa-brands fa-discord fa-xl"></i>
                        </a>
                        <a href={props.website} target="_blank" rel="noreferrer nofollow" className="text-slate-400 mx-auto my-auto">
                            <i className="fa-solid fa-globe fa-xl"></i>
                        </a>
                    <p className="text-slate-400 text-sm md:text-lg font-medium my-auto px-2">Analyst:</p>
                    <div className="flex justify-center px-2">
                        {RenderAnalyst(props.analyst)}
                    </div>
                </div>
        </div>
     );
}

export default ProjectHeader