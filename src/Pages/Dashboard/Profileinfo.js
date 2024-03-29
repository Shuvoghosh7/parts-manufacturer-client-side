import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const Profileinfo = ({ info }) => {
    const { education, location, phoneNumber, LinkedInLink, _id } = info
    console.log(phoneNumber)
    const [user] = useAuthState(auth)
    const [isEdit, setIsEdit] = useState(null);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const profileData = {
            ...data,
            email: user?.email
        };
        fetch("https://vertex-technology.onrender.com/profile", {
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
    /*  const updateProfile = (event) => {
         event.preventDefault();
         const education = event.target.education.value
         const location = event.target.location.value
         const phoneNumber = event.target.phoneNumber.value
         const LinkedInLink = event.target.LinkedInLink.value
 
         fetch(`https://vertex-technology.onrender.com/update-profile/${_id}`, {
             method: "PUT",
             headers: {
                 'content-type': 'application/json',
 
             },
             body: JSON.stringify({ education, location, phoneNumber, LinkedInLink })
         })
             .then(res => res.json())
             .then(data => {
 
                 console.log(data)
                 toast("Your Profile update successfully")
                 window.location.reload(false);
             })
 
     } */
    return (
        <div className="grid grid-cols-1 w-full">
            <div className="w-full my-4 h-64  border-t-4 border-[#125f82]">
                <div className="bg-white p-5 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm">
                    <div className="text-gray-700">
                        <div className="text-xs lg:text-md">
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Name</div>
                                <div className="py-2">
                                    {user ? user?.displayName : "- - -"}{" "}
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Email.</div>
                                <div className="py-2 w-[20ch]">
                                    {user ? user?.email : "- - -"}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Education</div>
                                <div className="py-2">
                                    {education}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Location</div>
                                <div className="py-2">
                                    {location}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">Phone Number</div>
                                <div className="py-2">
                                    {phoneNumber}
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="py-2 font-semibold">
                                    LinkedIn profile link
                                </div>
                                <div className="py-2">

                                    {LinkedInLink}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <label
                        htmlFor="my-modal-6"
                        onClick={() => setIsEdit(true)}
                        className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    >
                        Edit Profile
                    </label> */}
                </div>
            </div>
            <div className="my-4"></div>
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
                                    {...register("  phoneNumberk")}

                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="number"
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
                                    {...register(" location")}
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
                                    {...register(" LinkedInLink")}

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

export default Profileinfo;