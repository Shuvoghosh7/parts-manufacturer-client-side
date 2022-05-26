import React from 'react';

const ManageAllOrdersRow = ({ order, index }) => {
    const { name, email, pname, paid } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{email}</th>
            <th>{pname}</th>
            <th>
            <li className='dropdown dropdown-hover dropdown-end'>
                                <label tabindex="0" class="btn btn-outline btn-primary rounded-lg  ">Status </label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button className='btn btn-success btn-sm'>Paid</button></li>
                                    <li className='my-3'><button className='btn btn-success btn-sm'>Panding</button></li>
                                   
                                </ul>
                            </li>
            </th>


        </tr>
    );
};

export default ManageAllOrdersRow;