import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import MyorderRow from './MyorderRow';
import SectionTitle from "../../Pages/Shared/SectionTitle/SectionTitle";
const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrder] = useState([])
    console.log(orders)
    useEffect(() => {
        if (user) {
            fetch(`https://vertex-technology.onrender.com/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])
    return (
        <div className='mt-5'>
            <SectionTitle>
                hi <span className="text-green-500">{user?.displayName}</span>, Here is
                your orders
            </SectionTitle>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>User Name</th>
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