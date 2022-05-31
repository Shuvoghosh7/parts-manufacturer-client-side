import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MostOrderCountries from './MostOrderCountries';

import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Banner/>
            <Tools/>
            <BusinessSummary/>
            <MostOrderCountries/>
            
            <Reviews/>
            
        </div>
    );
};

export default Home;