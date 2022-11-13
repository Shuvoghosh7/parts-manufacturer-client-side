import React from 'react';
import { useForm } from 'react-hook-form';

const AddProfileInfo = ({setModal}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    return (
        <div>
            <input type="checkbox" id="add-project" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-project" className="btn btn-sm text-white btn-square absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Hi ! Create your new projects.</h3>

                    <form  className="bg-base-100 mx-auto p-5">
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Project Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Project Name"
                                className="input input-bordered bg-white w-full"
                                {...register("projectName", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Project Description</span>
                            </label>
                            <textarea
                                placeholder="Project Description"
                                className="input input-bordered bg-white w-full"
                                {...register("projectDescription")}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Invite Your Team Member</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Invite Your Team Member"
                                className="input input-bordered bg-white w-full"
                                {...register("email", {
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter valid email address'
                                    }
                                })} />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered bg-white w-full"
                                {...register("startingDate", {
                                    required: {
                                        value: true,
                                        message: "name is required"

                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">End Date</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered bg-white w-full"
                                {...register("endData", {
                                    required: {
                                        value: true,
                                        message: "name is required"

                                    }
                                })}
                            />
                        </div>

                        <div className="modal-action w-full mx-auto m-5">
                            <input className='btn btn-accent text-white w-full' type="submit" value="Add Project" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddProfileInfo;