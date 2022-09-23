import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import ShowTools from './ShowTools';

const Tools = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-parts').then(res => res.json()))

    const navigate = useNavigate()
    const Allproduct= () => {
        navigate('/products')
    }
    if(isLoading){
        <Loading/>
    }
    return (
        <div className='bg-accent'>
            <h1 className='text-2xl font-bold my-12 text-center text-success'>Available Products:</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-16'>
                {
                    parts?.slice(0, 6).map(part => <ShowTools
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
            <div className='text-center my-12 pb-5'>
                <button className='btn bg-transparent hover:bg-gradient-to-r from-secondary to-primary btn-primary card-button ' onClick={Allproduct}>See More</button>
            </div>
        </div>
    );
};

export default Tools;