import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0hWCDu4I2uHR4DpnxPO6LUdEl9Ek43sD78cHMnu2wyiKtiNetsFXakgW3ljI2n8ncmZEBCfbuB6iKhy9O1QBJ100nVvqXQpG');
const Payment = () => {
    const { id } = useParams()
    const url = `https://agile-eyrie-75679.herokuapp.com/order/${id}`
    const { data: order, isLoading } = useQuery(['profile', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className='text-center  my-12'>
                <div class="card w-96 bg-base-100 lg:text-left shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Customer:{order.name}</h2>
                        <p>Order Product:{order.pname}</p>
                        <p>Order quantity:{order.quantity}</p>
                        <p>price per unit:{order.price_per_unit}</p>
                        <p>Price:${order.quantity * order.price_per_unit}</p>

                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;