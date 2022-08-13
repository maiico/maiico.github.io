import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
    return ( 
        <div className="flex flex-col w-full min-h-[500px] bg-black justify-center text-center px-2 py-6">
            <h1 className="font-extra-bold text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] p-2 text-2xl sm:text-4xl md:text-5xl">Ready to look at some JPEGS?</h1>
            <p className="font-bold text-slate-100 p-2 text-lg sm:text-xl">Explore the Solana NFT space with our analytics and insights.</p>
            <Link to="/project">
                <button className="flex bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-slate-100 text-lg font-bold w-[250px] rounded-md justify-center mx-auto my-4 p-2" >
                        Discover Top-Rated NFTs
                </button>
            </Link>
        </div>
     );
}

export default CallToAction;