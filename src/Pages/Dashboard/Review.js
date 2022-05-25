import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("https://agile-eyrie-75679.herokuapp.com/review", {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review added Successfully')
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
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                type="number"
                                min={1} max={5}
                                placeholder="Click for give your rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("ratings")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description")}
                            />

                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;