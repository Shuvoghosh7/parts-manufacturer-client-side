import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import '../../Pages/Style/Purchase.css'

const Purchase = () => {
    const { purchaseId } = useParams()
    const [parts, setParts] = useState([])
    const [user] = useAuthState(auth);
    const [orderedQuantity, setOrderedQuantity] = useState(0);

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://agile-eyrie-75679.herokuapp.com/get-parts/${purchaseId}`)
            .then(res => res.json())
            .then(data => setParts(data))

    }, []) 
    const onSubmit = (orderInfo) => {
        /*   const info = {
              ...data,
              email: user?.email,
              pname: parts.pname,
              price_per_unit: parts.price_per_unit
          } */
        setOrderedQuantity(orderInfo.quantity);

        const placedOrder = {
            ...orderInfo,
            email: user?.email,
            price_per_unit: +orderInfo.quantity * parts.price_per_unit,
            pname: parts.pname,    
        }
            fetch("http://localhost:5000/add-orders", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
            },
                body: JSON.stringify(placedOrder)
        })
            .then(res => res.json())
    .then(data => {
        toast.success('Order added Successfully')
        console.log(data)
    })
    }
const orderingQuantity = watch("quantity");
useEffect(() => {
    setOrderedQuantity(+orderingQuantity);
}, [orderingQuantity]);

return (
    <div className="flex flex-col">
        <div className="overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-center items-center pt-10">
                <div className="w-full lg:w-1/3 px-10">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8 uppercase">
                        Order Information
                    </h2>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            value={user?.displayName}
                            disabled
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            className="input input-bordered w-full"
                        />
                        <div>
                            <input
                                type="text"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is required",
                                    },
                                })}
                                placeholder="Enter your address"
                                className="input input-bordered w-full"
                            />
                            {errors?.address && (
                                <p className="error">{errors.address.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="number"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone is required",
                                    },
                                    minLength: {
                                        value: 9,
                                        message: `Please Provide Valid Phone Number`,
                                    },
                                })}
                                placeholder="Enter your mobile number"
                                className="input input-bordered w-full"
                            />
                            {errors?.phone && (
                                <p className="error">{errors.phone.message}</p>
                            )}
                        </div>
                        <div>
                            <label>Order Quantity</label>
                            <div className="flex gap-5 items-center justify-between  mb-3">
                                <input
                                    type="number"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: "Quantity is required To order",
                                        },
                                    })}
                                    defaultValue={parts.minimum_order_quantity}
                                    placeholder="Input Quantity"
                                    className="input input-bordered input-primary w-full"
                                />
                                <p className="bg-secondary py-3 w-full text-center rounded-lg text-lg">
                                    Total Price :{" "}
                                    <span className="font-bold  px-3">
                                        ${(orderingQuantity || orderedQuantity) * parts.price_per_unit}
                                    </span>
                                </p>
                            </div>
                            {parts.minimum_order_quantity > orderedQuantity && (
                                <p className="error">Minimum Order Unit is {parts.minimum_order_quantity}</p>
                            )}
                            {parts.available_quantity < orderedQuantity && (
                                <p className="error">
                                    Maximum Order Unit is {parts.available_quantity}
                                </p>
                            )}
                        </div>

                        <button
                            disabled={
                                parts.minimum_order_quantity > orderedQuantity ||
                                parts.available_quantity < orderedQuantity
                            }
                            className="btn btn-primary w-full "
                            type="submit"
                        >
                            Order Now
                        </button>
                    </form>
                </div>
                <div className="flex w-1/2 flex-col items-center justify-center lg:-mt-10 mb-20">
                    <div className="w-full lg:w-2/3 z-0 my-5">
                        <img src={parts.picture} alt="" />
                    </div>
                    <div className="z-10">
                        <h2 className="font-bold py-2 text-xl lg:text-4xl uppercase">
                            {parts.pname}
                        </h2>
                        <p className="text-left">
                            Available :{" "}
                            <span className="font-bold text-lg">{parts.available_quantity}</span>{" "}
                            Pcs
                        </p>
                        <p className="text-left">
                            Minimum Order :{" "}
                            <span className="font-bold text-lg">{parts.minimum_order_quantity}</span> Pcs
                        </p>
                        <p className="text-left text-2xl uppercase font-medium mb-3">
                            price: <span className="font-bold">${parts.price_per_unit}</span>{" "}
                            <span className="text-sm">per unit</span>
                        </p>
                        <p className="w-[30ch] lg:w-[60ch] my-5 ">{parts.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Purchase;