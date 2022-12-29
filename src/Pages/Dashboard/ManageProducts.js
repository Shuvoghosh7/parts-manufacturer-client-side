import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageProductsRow from './ManageProductsRow';



const ManageProducts = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('https://manufacturer-website.vercel.app/get-parts').then(res => res.json()))
    if (isLoading) {
        return <Loading />
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
                        parts.map((product, index) => <ManageProductsRow
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

export default ManageProducts;