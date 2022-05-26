import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import Loading from "../Shared/Loading/Loading";
import Profileinfo from './Profileinfo';
const Myprofile = () => {
    const [user] = useAuthState(auth)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const profileData = {
            ...data,
            email: user?.email
        };
        fetch("https://agile-eyrie-75679.herokuapp.com/profile", {
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
    const { data: profile, isLoading } = useQuery('profile', () => fetch(`https://agile-eyrie-75679.herokuapp.com/get-profile?email=${user.email}`).then(res => res.json()))
    console.log(profile)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='lg:flex justify-around'>
            <div>
                <p ><span className='font-bold'>Name:</span>{user?.displayName}</p>
                <p ><span className='font-bold'>Email:</span>{user?.email}</p>
                <div>

                    {
                        profile.map(info => <Profileinfo
                            key={info._id}
                            info={info}
                        ></Profileinfo>)
                    }

                </div>
            </div>
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <textarea
                                type="name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">phnoe number</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phoneNumber")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">LinkedIn profile link</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                {...register("LinkedInLink")}
                            />

                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Add Profile Info" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;