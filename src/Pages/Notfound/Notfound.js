import React from 'react';
import { Link } from 'react-router-dom';
import errors404 from '../../images/errors404.jpg'
const Notfound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={errors404} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-primary">Oops!</h1>
                    <p className='text-error font-bold' >The page you're looking for isn't here</p>
                    <p className="py-6 text-error font-bold">You might have the wrong address, or the page may have moved.</p>
                    <button className="btn btn-base-100"><Link className='text-decoration-none text-dark' to="/">Go To Homepage</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Notfound;