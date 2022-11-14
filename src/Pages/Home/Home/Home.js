import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact/Contact';
import Faq from './Faq/Faq';
import MostOrderCountries from './MostOrderCountries';
import OurClient from './OurClient/OurClient';
import OurServices from './OurServices/OurServices';
import Process from './Process/Process';
import ProductFreture from './ProductFreture';

import Reviews from './Reviews';
import Tools from './Tools';
import UpcomingProducts from './UpcomingProducts/UpcomingProducts';


const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummary/>
            <ProductFreture/> 
            <Tools/>
            <OurServices/>
            <OurClient/>
            <Process/>
            <UpcomingProducts/>
            <Reviews/>
            <Faq/>
            <Contact/>

        </div>
    );
};

export default Home;