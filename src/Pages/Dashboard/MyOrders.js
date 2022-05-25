import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import MyorderRow from './MyorderRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrder] = useState([])
    console.log(orders)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl'>Total My Order:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyorderRow
                                key={user._id}
                                order={order}
                            ></MyorderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;