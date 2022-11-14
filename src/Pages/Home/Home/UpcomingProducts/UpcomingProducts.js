import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import './UpcomingProducts.css'
import Fade from 'react-reveal/Fade';
const UpcomingProducts = () => {
    return (
        <div className='mb-40'>
            <SectionTitle>Our Upcoming Products</SectionTitle>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 col-span-2 my-10'>
                <Fade left>
                    <div className='new-product1'>
                        <h1 className='product-name'>Phome Motherboard</h1>

                    </div>
                </Fade>
                <Fade bottom>
                    <div className='new-product2'>
                        <h1 className='product-name'>TV Display</h1>

                    </div>
                </Fade>
                <Fade right>
                    <div className='new-product3'>
                        <h1 className='product-name'>Phome Display</h1>

                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default UpcomingProducts;