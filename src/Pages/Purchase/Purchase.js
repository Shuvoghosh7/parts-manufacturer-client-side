import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams()
    const [parts, setParts] = useState([])
    // console.log(parts)
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/get-parts/${purchaseId}`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    
    
 
    const onSubmit = (data) => {
        fetch("http://localhost:5000/add-orders",{
            method:"Post",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
    }
    return (
        <div>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={parts.picture} />
                    <div>
                        <h1 class="text-5xl font-bold">{parts.name}</h1>
                        <p className='py-2'><span className='text-success font-bold text-lg'>Description:</span>{parts.description}</p>
                        <p class="py-2"><span className='text-success font-bold text-lg'>minimumQuantity:</span> {parts.minimum_order_quantity}</p>
                        <p class="py-2"><span className='text-success font-bold text-lg'>Available Quantity:</span> {parts.available_quantity}</p>
                        <p class="py-6"><span className='text-success font-bold text-lg'>price per unit:</span>{parts.price_per_unit}</p>

                        <p>{user.displayName}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className='flex h-screen justify-center items-center my-6'>
                <div class="card w-96 bg-info shadow-xl">
                    <div class="card-body items-center text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input
                                    type="name"
                                    value={user?.displayName}
                                    readOnly
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name")}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input
                                    type="Email"
                                    value={user?.email}
                                    readOnly
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email")}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address")}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("number")}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity")}
                                />

                            </div>

                            <input className='btn w-full max-w-xs mt-5' type="submit" value="complete the purchase" />

                        
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;