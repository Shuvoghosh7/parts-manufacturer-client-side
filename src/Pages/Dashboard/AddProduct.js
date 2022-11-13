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
        <div className='flex  justify-center align-middle my-12'>
            <div class="card lg:w-[450px] w-96 bg-[#25316D] shadow-xl">
                <div class="card-body items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">Picture Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="image url"
                                className="input input-bordered lg:w-96 w-full max-w-xs"
                                {...register("picture")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">Product Name</span>
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
                                <span className="label-text text-xl font-bold text-white">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder='write product description'
                                className="input input-bordered w-full max-w-xs h-24"
                                {...register("description")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">minimum order quantity</span>
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
                                <span className="label-text text-xl font-bold text-white">Available Quantity</span>
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
                                <span className="label-text text-xl font-bold text-white">Price Per unit</span>
                            </label>
                            <input
                                type="number"
                                placeholder='price'
                                className="input input-bordered w-full max-w-xs"
                                {...register("price_per_unit")}
                            />

                        </div>
                        <input className='btn w-full max-w-xs mt-5 btn-primary' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;