import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MostOrderCountries from './MostOrderCountries';
import ProductFreture from './ProductFreture';

import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummary/>
            <ProductFreture/> 
            <Tools/>
            <Reviews/>

        </div>
    );
};

export default Home;