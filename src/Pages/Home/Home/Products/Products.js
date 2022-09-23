import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Allproducts from './Allproducts';

const Products = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-parts').then(res => res.json()))
   
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
           
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-16 my-16'>
                {
                    parts?.map(part => <Allproducts
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
           
        </div>
    );
};

export default Products;