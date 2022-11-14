import React from 'react';
import hardware from '../../../../images/services/cpuCase.png'
import network from '../../../../images/services/Network.png'
import phone from '../../../../images/services/phones.png'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Fade from 'react-reveal/Fade';
import './Ourservices.css'
const OurServices = () => {
    return (
        <div className='mb-12 lg:mx-28 mx-5 service' id='my-service'>
            <SectionTitle>Our Services</SectionTitle>
            <div className='grid lg:grid-cols-3 gap-16 mt-8'>

                {/*  service-1 */}
                <Fade left>
                    <div className='service-broder mb-5'>
                        <div className='service-card lg:h-[450px]'>
                            <div className='service-image'>
                                <img src={hardware} alt="" />
                            </div>
                            <div className='service-text'>
                                <h1>Manufacturing Hardware Parts</h1>
                                <p>WE Manufacturer different Hardware parts of computers. Like Motherboard, CPU, RAM, Hard drive, Graphics processing unit, Network interface card, Solid-state drive. ...</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                {/*  service-2 */}
                <Fade bottom>
                <div className='service-broder'>
                    <div className='service-card lg:h-[450px]'>
                        <div className='service-image'>
                            <img src={network} alt="" />
                        </div>
                        <div className='service-text'>
                            <h1>Manufacturing Network Accessories</h1>
                            <p>WE Manufacturer different Network parts of computers. Like Hub,Switch,Router, Bridge, Gateway, Modem, Repeater, Access Point,Cutters, Scissors, Pliers.. ...</p>
                        </div>
                    </div>
                </div>
                </Fade>
                {/*  service-3 */}
                <Fade right>
                    <div className='service-broder'>
                        <div className='service-card lg:h-[450px]'>
                            <div className='service-image'>
                                <img src={phone} alt="" />
                            </div>
                            <div className='service-text'>
                                <h1>Manufacturing Phone Accessories</h1>
                                <p>WE Manufacturer different Network parts of computers. Like Portable Chargers, Car Mounts, Selfie Sticks, Camera Lens Attachments, Gimbals,Headphone Adapter ...</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default OurServices;