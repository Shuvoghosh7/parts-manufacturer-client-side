import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import Loading from "../Shared/Loading/Loading";

import Profileinfo from './Profileinfo';
const Myprofile = () => {
    const [user] = useAuthState(auth)
    const [isEdit, setIsEdit] = useState(null);
    const [modal, setModal] = useState(false)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();


    const { data: profile, isLoading } = useQuery('profile', () => fetch(`https://manufacturer-website.vercel.app/get-profile?email=${user.email}`).then(res => res.json()))

    const onSubmit = (data) => {
        const profileData = {
            ...data,
            email: user?.email
        };
        fetch("https://manufacturer-website.vercel.app/profile", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('AccessToken')}`

            },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(' added my profile Information')
                console.log(data)
                reset();
            })
        reset()
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="container w-full mx-auto p-5 lg:p-10 mb-40 mt-5">
            <div className="md:flex w-full no-wrap md:-mx-2 ">
                <div className="w-full lg:w-1/3 md:mx-2 lg:mt-1 p-3">
                    <div className="bg-white p-5 rounded-br-lg rounded-bl-lg border-t-4 border-[#125f82]">
                        <div className="image overflow-hidden">
                            <img
                                className="h-auto w-full mx-auto"
                                src={`${user ? user.photoURL
                                    : "https://i.ibb.co/T1D3tqN/images.png"
                                    }`}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                            {user ? user.displayName : "- - -"}
                        </h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">
                            {user ? user.email : "- - -"}
                        </h3>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">

                        </ul>
                    </div>
                </div>

                {
                    profile.map(info => <Profileinfo
                        key={info._id}
                        info={info}
                    ></Profileinfo>)
                }

            </div>
            <label
                htmlFor="my-modal-6"
                onClick={() => setIsEdit(true)}
                className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
                Add Profile Info
            </label>
            <div
                className={`${isEdit ? "block" : "hidden"
                    } bg-white w-full border-t-4 border-[#125f82] mx-auto p-5 my-5 mt-16 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm relative`}
            >
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span class="text-green-500">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </span>
                    <span className="tracking-wide">Edit</span>
                    <button
                        onClick={() => setIsEdit(false)}
                        className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </button>
                </div>
                <div className="text-gray-700 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                        <div className="flex gap-5 -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Education
                                </label>
                                <input
                                    {...register("education")}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Education"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Contact No.
                                </label>
                                <input
                                    {...register
                                        ("phoneNumber")}

                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Contact No."
                                />
                            </div>
                        </div>
                        <div className="flex  gap-5 -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Address
                                </label>
                                <input
                                    {...register("location")}
                                    defaultValue={user?.data?.address && user?.data?.address}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    LinkedIn profile link
                                </label>
                                <input
                                    {...register("LinkedInLink")}

                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="LinkedIn profile link"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Myprofile;