import React from 'react';

const ManageAllOrdersRow = ({ order, index }) => {
    const { name, email, pname,transactionId
    } = order

    const handealOrderStatus = (event) => {
        event.preventDefault();
        console.log("all set")
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{pname}</th>
            <th>{transactionId?<p className='text-success'>{transactionId}</p>:<p className='text-red-400'>Payment Not Complete</p>}</th>
            
        </tr>
    );
};

export default ManageAllOrdersRow;