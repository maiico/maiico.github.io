import React from 'react';
import RenderPuffScore from '../../../helperFunctions/RenderPuffScore';
import Loading from '../../../loading/Loading';

function ProjectAnalysis(props) {

    //render appropriate category icon
    let categoryIcon;

    switch(props.heading) {
        case "Artwork":
            categoryIcon = <i className="fa-solid fa-palette fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        case "Tokenomics":
            categoryIcon = <i className="fa-solid fa-coins fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        case "Team":
            categoryIcon = <i className="fa-solid fa-users-line fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        case "Community":
            categoryIcon = <i className="fa-solid fa-handshake-simple fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        case "Utility":
            categoryIcon = <i className="fa-solid fa-screwdriver-wrench fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        case "Insights":
            categoryIcon = <i className="fa-solid fa-comment-dots fa-xl text-slate-400 mx-auto py-4"></i>
            break;
        default:
            categoryIcon = <i className="fa-solid fa-face-sad-cry fa-xl text-slate-400 mx-auto py-4"></i>
            break;
    }

    //check to see if content is utility or not
    let content;

    if(props.content.constructor === Array) {
        
       content =  props.content.map((utility, i) => {
            return <li className="ext-md text-slate-400 font-normal text-center list-none" key={i}>{utility}</li>
        })

    } else {
        content =  <p className="text-md text-slate-400 font-normal">{props.content}</p>
    }

    if(props.content === "loading") {
        return (
            <div className="flex flex-col justify-center w-full bg-[#0e1111] rounded-lg mx-auto p-4">
                {categoryIcon}
                <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">{props.heading}</h2>
                <Loading />
            </div>
        )
    } else {
        return ( 
            <div className="flex flex-col w-full bg-[#0e1111] rounded-lg mx-auto p-4">
                {categoryIcon}
                <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-md md:text-lg font-medium mx-auto py-1">{props.heading}</h2>
                <div className="flex flex-col justify-center w-full mx-auto py-1">
                    <p className="text-md md:text-lg text-green-400 font-semibold mx-auto pb-2">Score {props.score}/5</p>
                    {RenderPuffScore(props.score)}
                </div>
                {content}
            </div>
         );
    }
}

export default ProjectAnalysis;