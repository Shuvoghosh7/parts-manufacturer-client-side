import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';

const ManageAllOrders = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/get-parts').then(res => res.json()))
    console.log(parts)
    if(isLoading){
        return <Loading/>
    }
    return (
        <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((product,index) => <ManageAllOrdersRow
                            key={product._id}
                            product={product}
                            index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default ManageAllOrders;