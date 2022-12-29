import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../Style/AddTeamMember.css'
const AddTeamMemer = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("https://manufacturer-website.vercel.app/add-team", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('AccessToken')}`

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Team Member added Successfully')
                console.log(data)
                reset();
            })
    }
    return (
        <div className='flex  justify-center align-middle my-12'>
            <div class="card lg:w-[450px] w-96 bg-[#25316D] shadow-xl ">
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
                                <span className="label-text text-xl font-bold text-white">person Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Input Person Name'
                                className="input input-bordered w-full max-w-xs "
                                {...register("personName")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">Designation</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Input Person Name'
                                className="input input-bordered w-full max-w-xs"
                                {...register("designation")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder='Input Person Name'
                                className="input input-bordered w-full max-w-xs"
                                {...register("email")}
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
                        <input className='btn w-full max-w-xs mt-5 btn-primary' type="submit" value="Add Team Member" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeamMemer;