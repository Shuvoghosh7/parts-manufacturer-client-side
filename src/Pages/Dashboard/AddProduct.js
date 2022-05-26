import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("https://agile-eyrie-75679.herokuapp.com/add-parts", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('AccessToken')}`

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Parts added Successfully')
                console.log(data)
                reset();
            })
    }
    return (
        <div className='flex  justify-center align-middle mt-12'>
            <div class="card w-96 bg-info shadow-xl">
                <div class="card-body items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="image url"
                                className="input input-bordered w-full max-w-xs"
                                {...register("picture")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Input product Name'
                                className="input input-bordered w-full max-w-xs"
                                {...register("pname")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder='write product description'
                                className="input input-bordered w-full max-w-xs"
                                {...register("description")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">minimum order quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder='Input min Quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimum_order_quantity")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder='Input available quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("available_quantity")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price Per unit</span>
                            </label>
                            <input
                                type="number"
                                placeholder='price'
                                className="input input-bordered w-full max-w-xs"
                                {...register("price_per_unit")}
                            />

                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Add Rroduct" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;