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
        <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
            <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                <div class="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div class="flex justify-center">
                   
                    <BsFacebook className='text-3xl' />
                    <AiFillGoogleCircle className='text-3xl' />
                    <AiFillTwitterCircle className='text-3xl' />
                    <FaInstagramSquare className='text-3xl' />
                </div>
            </div>
            <div class="mx-6 py-10 text-center md:text-left">
                <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">

                    <div class="">
                        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Gaming-Case</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Motherboard</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">RAM</a>
                        </p>
                        <p>
                            <a href="#!" class="text-gray-600">Power Supplies</a>
                        </p>
                    </div>
                    <div class="">
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
                    </div>
                    <div class="">
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
            </div>
            <div class="text-center p-6 bg-gray-200">
                <span>Copyright &copy; {new Date().getFullYear()}</span>
                
            </div>
        </footer>
    );
};

export default Footer;