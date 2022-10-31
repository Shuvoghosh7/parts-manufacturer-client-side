import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import ShowTools from './ShowTools';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
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
        <div>
            <SectionTitle>Available Products:</SectionTitle>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-16 mt-5'>
                {
                    parts?.slice(0, 6).map(part => <ShowTools
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
            <div className='text-center my-12 pb-5'>
                <button className='w-3/4  lg:w-1/3 mx-auto flex justify-center mt-10 button rounded-full overflow-hidden ' onClick={Allproduct}>See More</button>
            </div>
        </div>
    );
};

export default Tools;