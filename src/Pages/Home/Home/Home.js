import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MostOrderCountries from './MostOrderCountries';

import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessSummary/> 
            <Reviews/>

        </div>
    );
};

export default Home;