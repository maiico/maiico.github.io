import React from 'react';
import MarketMetricsImg from '../../../images/market-metrics.png';
import InsightsImg from '../../../images/insights.png'
import ScoreImg from '../../../images/puffalytics-score.png';

function Features() {
    return ( 
        <div className="flex flex-col w-full bg-black">
            <div className="flex w-full bg-[#080a0a]">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16">
                    <img src={MarketMetricsImg} className="w-[600px] mx-auto my-6" alt="Market Metrics"/>
                    <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-8">
                        <i className="fa-solid fa-chart-line fa-2xl text-slate-600 my-6"></i>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-2xl md:text-3xl py-2">Market Performance Metrics</h1>
                        <p className="text-slate-200 text-md sm:text-lg md:xl font-medium py-2 leading-loose">
                            See how your favourite NFT projects are performing in the market with our Market Performance Metrics (MPM).
                            Track and analyze Floor Price, Daily Volume, Total Listed and Average Sale Price to see how they perform over time.
                        </p>
                        <button className="flex w-[210px] text-sky-400 font-bold text-left justify-between p-1 mx-auto md:mx-0">
                            Learn More About MPM
                            <i className="fa-solid fa-arrow-right-long my-auto"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-black">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16">
                    <img src={InsightsImg} className="w-[600px] mx-auto my-6 md:order-last" alt="Market Metrics"/>
                    <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-8">
                        <i className="fa-solid fa-magnifying-glass-chart fa-2xl text-slate-600 my-6"></i>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-2xl md:text-3xl py-2">Analyst Insights and Research</h1>
                        <p className="text-slate-200 text-md sm:text-lg md:xl font-medium py-2 leading-loose">
                            Kickstart DYOR with our analyst insights that look into five main qualities of a top-rated NFT project: Artwork, Tokenomics, Team, Community, and Utility. 
                            Our analysts provide unbiased commentary on these key qualities and give you a no BS summary.
                        </p>
                        <button className="flex w-[235px] text-sky-400 font-bold text-left justify-between p-1 mx-auto md:mx-0">
                            Learn More About Insights
                            <i className="fa-solid fa-arrow-right-long my-auto"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-[#080a0a]">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16">
                    <img src={ScoreImg} className="w-[400px] mx-auto my-6" alt="Market Metrics"/>
                    <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-8">
                        <i className="fa-solid fa-cloud fa-2xl text-slate-600 my-6"></i>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#12c2e9] to-[#c471ed] text-2xl md:text-3xl py-2">Puffalytics Score</h1>
                        <p className="text-slate-200 text-md sm:text-lg md:xl font-medium py-2 leading-loose">
                            Every project listed on Puffalytics is given a rating out of five using an algorithm that scores the five main qualities of a blue-chip NFT project. 
                            This makes it easier for you to quickly find top-rated NFT projects. 
                            If you're feeling a little degen, you can look at projects with a lower or unrated Puffalytics score.
                        </p>
                        <button className="flex w-[310px] text-sky-400 font-bold text-left justify-between p-1 mx-auto md:mx-0">
                            Learn More About Puffalytics Score
                            <i className="fa-solid fa-arrow-right-long my-auto"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Features;