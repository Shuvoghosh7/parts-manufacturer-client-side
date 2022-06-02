import React from 'react';
import img from '../../../images/computer-parts-from-china.jpg'

const Banner = () => {
    return (
        <div class="hero  bg-base-100 lg:my-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class=" w-[650px] rounded-lg shadow-2xl" />
                <div>
                    <h1 data-aos="fade-right"   data-aos-duration="1000"
                        data-aos-delay="200" class="text-5xl font-bold"> Manufacturer Products <br /> of Company!</h1>
                    <p data-aos="fade-right" data-aos-duration="800"
                        data-aos-delay="500" class="py-6">This company basically Manufacturer different parts of computers. These companies have been producing their products for a long time with their reputation. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;