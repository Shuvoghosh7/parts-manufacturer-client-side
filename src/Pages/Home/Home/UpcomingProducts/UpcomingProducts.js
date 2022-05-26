import React from 'react';
import GamingCase from '../../../../images/Upcoming/Computer-Gaming-Case.png'
import GamingKeyboard from '../../../../images/Upcoming/Gaming-Keyboard.png'
import SolidStateDrice from '../../../../images/Upcoming/Solid-State-Drice.png'
import WirelessKeyboard from '../../../../images/Upcoming/Wireless Bluetooth Keyboard.png'
const UpcomingProducts = () => {
    return (
        <div className='my-16'>
            <h1 className='text-2xl font-bold my-6'>Upcoming products our Production :</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-16'>
                <div>
                    <img src={GamingCase} alt="" />
                    <p className='font-bold'>Computer-Gaming-Case</p>
                </div>
                <div>
                    <img src={GamingKeyboard} alt="" />
                    <p className='font-bold'>Gaming-Keyboard</p>
                </div>
                <div>
                    <img src={SolidStateDrice} alt="" />
                    <p className='font-bold'>Solid State Drice</p>
                </div>
                <div>
                    <img src={WirelessKeyboard} alt="" />
                    <p className='font-bold'>Wireless Keyboard</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProducts;