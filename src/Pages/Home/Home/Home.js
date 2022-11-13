import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq/Faq';
import MostOrderCountries from './MostOrderCountries';
import Process from './Process/Process';
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
            <Process/>
            <Faq/>

        </div>
    );
};

export default Home;