import React from 'react';

const Profileinfo = ({ info }) => {
    const { education, location, phoneNumber, LinkedInLink } = info
    return (
        <div>
            <p ><span className='font-bold'>Education</span>{education}</p>
            <p ><span className='font-bold'>Location</span>{location}</p>
            <p ><span className='font-bold'>Phone Number</span>{phoneNumber}</p>
            <p ><span className='font-bold'>LinkedIn Link</span>{LinkedInLink} </p>
        </div>
    );
};

export default Profileinfo;