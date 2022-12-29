import React from 'react';
import '../Style/WellcomeDashboard.css'
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import SectionTitle from "../../Pages/Shared/SectionTitle/SectionTitle";
const WellcomeDashboard = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://manufacturer-website.vercel.app/get-parts').then(res => res.json()))

    const { data: reviews } = useQuery('review', () => fetch('https://manufacturer-website.vercel.app/get-review').then(res => res.json()))

    const { data: users } = useQuery('users', () => fetch('https://manufacturer-website.vercel.app/user', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    return (
        <>
            <div className='mt-10'>
                <SectionTitle>WellCome Deshboard</SectionTitle>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2 lg:mx-12 md:mx-12  mt-5'>
                <div className='card-contant'>
                    <div className='icon-container'>
                        <MdProductionQuantityLimits className='icon' />
                    </div>
                    <div className='card-text'>
                        <p>Total Products</p>
                        <p>{parts?.length}</p>
                        <div className='progress'>
                            <div class="progress-bar"></div>
                        </div>
                        <p>45% Increase</p>
                    </div>
                </div>
                <div className='card-contant2'>
                    <div className='icon-container'>
                        <FaUserAlt className='icon' />
                    </div>
                    <div className='card-text'>
                        <p>Total Users</p>
                        <p>{users?.length}</p>
                        <div className='progress'>
                            <div class="progress-bar2"></div>
                        </div>
                        <p>70% Increase</p>
                    </div>
                </div>
                <div className='card-contant3'>
                    <div className='icon-container'>
                        <AiFillRead className='icon' />
                    </div>
                    <div className='card-text'>
                        <p>Total Review</p>
                        <p>{reviews ? reviews.length : 10}</p>
                        <div className='progress'>
                            <div class="progress-bar3"></div>
                        </div>
                        <p>80% Increase</p>
                    </div>
                </div>


            </div>

        </>
    );
};

export default WellcomeDashboard;