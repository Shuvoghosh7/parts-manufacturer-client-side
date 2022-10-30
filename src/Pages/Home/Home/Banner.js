import React from 'react';
import img from '../../../images/computer-parts-from-china.jpg'
import img2 from '../../../images/banner22.jpg'

import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div className="relative">
            <img
                src={img2}
                className="absolute inset-0 object-cover w-full h-full"
                alt="banner"
            />
            <div className="relative bg-opacity-70 bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-x-0 bottom-0 border-b-0 text-white"
                    viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L40,272C80,256,160,224,240,229.3C320,235,400,277,480,282.7C560,288,640,256,720,213.3C800,171,880,117,960,112C1040,107,1120,149,1200,181.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h1 data-aos="fade-right" data-aos-duration="1000"
                                data-aos-delay="200" class="text-5xl font-bold">
                                <span className='text-white'>
                                    <Typewriter
                                        options={{
                                            strings: ['Manufacturer Products'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                <br /><span className='text-white'>of Company!</span></h1>
                            <p data-aos="fade-right" data-aos-duration="800"
                                data-aos-delay="500" class="py-6 font-bold text-xl text-white">This company basically Manufacturer different parts of computers. These companies have been producing their products for a long time with their reputation. </p>

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded pl-5 pt-4 shadow-2xl">
                                <img src={img} className='h-auto lg:h-[300px] w-auto' alt="bannerMan" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;