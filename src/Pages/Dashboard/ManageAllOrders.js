import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';



const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://agile-eyrie-75679.herokuapp.com/get-order', {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Product Name</th>
                        <th>TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <ManageAllOrdersRow
                            key={order._id}
                            order={order}
                            index={index}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;