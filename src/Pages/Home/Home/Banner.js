import React from 'react';
import img from '../../../images/computer-parts-from-china.jpg'
import img2 from '../../../images/banner22.jpg'
import '../../Style/Banner.css'
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <section className="banner-container bg-hero-pattern h-screen lg:h-[90vh] bg-fixed bg-no-repeat bg-cover text-white mb-16">
            <div className="banner-content">
                <h2 className="text-left text-3xl lg:text-5xl uppercase font-bold text-white">
                    <Typewriter
                        options={{
                            strings: ['Hardware  Manufacturer Company'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    {/* <span>Drilling Tools</span> */}
                </h2>
                <p className="w-[40ch] lg:w-[90ch] text-sm my-3">
                Vertex Technologies is a computer Hardware multinational IT company that provides computer ditterent Hardware parts and other access devices, imaging and printing products, as well as related technologies, solutions, and services.
                </p>
               
            </div>
        </section>
    );
};

export default Banner;