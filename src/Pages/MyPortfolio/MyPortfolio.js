import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='mx-16 my-16'>
            <h1 className='text-5xl'>Name:Shuvo Gosh</h1>
            <p className='text-2xl my-2'><span className='font-bold'>Email:</span> shuvogosh111@gmail.com</p>
            <address className='text-2xl my-2'><span className='font-bold'>Address:</span> Houe-38,Road-12,sector-11,Uttara,Dhaka</address>
            <p className='text-2xl my-2'><span className='font-bold'>Educational Background:</span> computer science and engineering</p>
            <article className='text-2xl my-2'><span className='font-bold'>Skills:</span>
                <p className='text-xl my-2'><span className='font-bold'>Expertise:</span>
                    JavaScript,ES6,React,React Router,React Hook,HTML5,CSS3,Bootstrap-5,Tailwindcss.
                </p>
                <p className='text-xl my-2'><span className='font-bold'>Comfortable:</span>
                    Noad.js,MongoDB,Rest API,Firebase,Express.js,Axios,react-query,
                </p>
                <p className='text-xl my-2'><font className='font-bold'>Familiar:</font>
                    MongosDB,SQL
                </p>
                <p className='text-xl my-2'><span className='font-bold'>Tools:</span>
                    Github,Heroku,Netlify,Postman,Figma
                </p>
            </article>
            <article>
                <p className='text-2xl font-bold my-2'>projects:</p>
                <p className='text-2xl font-bold'>Project Live Link: <span ><a className='text-blue-700' href="https://smartphone-warehouse-ebc90.web.app/" target="blank">Warehouse-management</a></span></p>
                <p className='text-xl font-bold'>Descriptions:</p>
                <p>This project is smartphone warehouse.Users can add product quantity and decrease product quantity. Users can delete product items when they user is log in.Users also add a product new items when user login.</p>
              
              
                <p className='text-2xl font-bold'>Project Live Link: <span ><a className='text-blue-700' href="https://green-bangla-tours-37d8b.web.app" target="blank">Green Bangla Tours</a></span></p>
                <p className='text-xl font-bold'>Descriptions:</p>
                <p>This project is personal Tours Guide.This project have simple navbar, banner, services,Client Review section and a footer.This system have Email and password login system.And also have Google Login System.Have Chackout component and this component protected route</p>
                <p className='text-2xl font-bold'>Project Live Link: <span ><a className='text-blue-700' href="https://dancing-lamington-1e1eb0.netlify.app/" target="blank">ORGANIC PRODUCTS SHOP</a></span></p>
                <p className='text-xl font-bold'>Descriptions:</p>
                <p>This project is ORGANIC PRODUCTS SHOP.This project like ecommerce.Hear have product picture,name,price and add to cart butto.when click add button then show order product side ver but not more the order 4 product.And have a button for select randon 1 when click button.</p>
            </article>
        </div>
    );
};

export default MyPortfolio;