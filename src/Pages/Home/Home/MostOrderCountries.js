import React from 'react';
import Bangladesh from '../../../images/countries/Bangladesh.png'
import Australia from '../../../images/countries/Australia.png'
import China from '../../../images/countries/China.png'
import Zealand from '../../../images/countries/Zealand.png'

const MostOrderCountries = () => {
    return (
        <div className='my-5'>
            <h1 className='text-2xl font-bold mb-3'>Most order countries are:</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-16'>
                <div>
                    <img src={Bangladesh} alt="" />
                    <p className='font-bold'>Bangladesh</p>
                </div>
                <div>
                    <img src={Australia} alt="" />
                    <p className='font-bold'>Australia</p>
                </div>
                <div>
                    <img src={China} alt="" />
                    <p className='font-bold'>China</p>
                </div>
                <div>
                    <img src={Zealand} alt="" />
                    <p className='font-bold'>Zealand</p>
                </div>
            </div>
        </div>
    );
};

export default MostOrderCountries;