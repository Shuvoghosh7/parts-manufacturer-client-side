import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import '../../Pages/Style/Purchase.css'
import ReactImageMagnify from 'react-image-magnify';
const Purchase = () => {
    const { purchaseId } = useParams()
    const [parts, setParts] = useState([])
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://agile-eyrie-75679.herokuapp.com/get-parts/${purchaseId}`)
            .then(res => res.json())
            .then(data => setParts(data))

    }, [])



    const onSubmit = (data) => {
        const info = {
            ...data,
            email: user?.email,
            pname: parts.pname,
            price_per_unit: parts.price_per_unit
        }
        fetch("https://agile-eyrie-75679.herokuapp.com/add-orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order added Successfully')
                console.log(data)
            })
    }
    return (
        <div className='bg-[#EEEEEE]'>
            <div class="hero  bg-[#EEEEEE]">
                <div class="hero-content flex-col lg:flex-row">
                      <img className='w-96 mr-12 mt-12' src={parts.picture} />
                    <div className='ml-12'>
                        <h1 class="text-5xl font-bold">{parts.pname}</h1>
                        <p className='py-2'><span className='text-success font-bold text-lg'>Description:</span>{parts.description}</p>
                        <p class="py-2"><span className='text-success font-bold text-lg'>minimumQuantity:</span> {parts.minimum_order_quantity}</p>
                        <p class="py-2"><span className='text-success font-bold text-lg'>Available Quantity:</span> {parts.available_quantity}</p>
                        <p class="py-6"><span className='text-success font-bold text-lg'>price per unit:</span>{parts.price_per_unit}</p>
                    </div>

                </div>

            </div>

            <div className='login-container'>
                <p className='login-title'>Confirm Your Order</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='input-field'>
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text"
                            placeholder="Write Your Address" {...register("address")} />
                    </div>
                    <div className='input-field'>
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input type="text"
                            placeholder="Write Your Number"
                            {...register("number")} />
                    </div>
                    <div className='input-field'>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="Number"
                            min={parts.minimum_order_quantity} max={parts.available_quantity}
                            defaultValue={parts.minimum_order_quantity}
                            {...register("quantity")} />
                    </div>



                    <input className='submit-button' type="submit" value="complete the purchase" />
                </form>



            </div>
        </div>
    );
};

export default Purchase;