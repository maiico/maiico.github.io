import React from 'react';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import CallToAction from './components/callToAction/CallToAction';

function Home(props) {

    return ( 
        <div className='flex flex-col w-full justify-center'>
            <Hero/>
            <Features />
            <CallToAction />
        </div>
     );
}

export default Home;