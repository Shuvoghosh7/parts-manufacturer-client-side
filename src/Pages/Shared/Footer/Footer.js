import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer class="text-center lg:text-left bg-warning text-gray-600">
            <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                <div class="mr-12 hidden lg:block text-base-100">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div class="flex justify-center">

                    <a target="blank" href="https://www.facebook.com/"><BsFacebook className='text-3xl text-base-100 mr-5 cursor-pointer' /></a>
                    <a target="blank" href="https://www.google.com/"><AiFillGoogleCircle className='text-3xl text-base-100 mr-5 cursor-pointer' /></a>
                    <a target="blank" href="https://twitter.com/?lang=en"><AiFillTwitterCircle className='text-3xl text-base-100 mr-5 cursor-pointer' /></a>
                    <a target="blank" href="https://www.instagram.com/?hl=en"><FaInstagramSquare className='text-3xl text-base-100 mr-5 cursor-pointer' /></a>
                </div>
            </div>
            <div class="mx-6 py-10 text-center md:text-left">
                <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 ">
                    <div>
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start text-base-100">
                            About us
                        </h6>
                        <p className='mb-4 text-base-100'>
                            Our company basically Manufacturer different parts of computers. Our companies have been producing their products for a long time with their reputation.
                        </p>
                    </div>
                    <div class="text-base-100 lg:ml-24">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p class="mb-4 ">
                            <p class="text-base-100">Gaming-Case</p>
                        </p>
                        <p class="mb-4">
                            <p class="text-base-100">Motherboard</p>
                        </p>
                        <p class="mb-4">
                            <p class="text-base-100">RAM</p>
                        </p>
                        <p>
                            <p class="text-base-100">Power Supplies</p>
                        </p>
                    </div>
                    {/* <div class="">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Pricing</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Settings</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-gray-600">Help</a>
                        </p>
                    </div> */}
                    <div class="text-base-100 lg:ml-20">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <p class="flex items-center justify-center md:justify-start mb-4">

                            <GoHome className='mr-4' /> Sector-11,Road-12,House-02,uttara
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <AiOutlineMail className='mr-4' /> expression@gmail.com
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <FiPhoneCall className='mr-4' />01772385111
                        </p>
                        <p class="flex items-center justify-center md:justify-start">
                            <FiPhoneCall className='mr-4' /> 01623795232
                        </p>
                    </div>
                </div>
                <div class="text-center text-base-100 mt-6">
                    <span>Copyright &copy; {new Date().getFullYear()}</span>

                </div>
            </div>

        </footer>
    );
};

export default Footer;