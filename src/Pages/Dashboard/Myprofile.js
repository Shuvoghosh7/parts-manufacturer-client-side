import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import Loading from "../Shared/Loading/Loading";
import AddProfileInfo from './AddProfileInfo';
import Profileinfo from './Profileinfo';
const Myprofile = () => {
    const [user] = useAuthState(auth)

    const [modal, setModal] = useState(false)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

   
    const { data: profile, isLoading } = useQuery('profile', () => fetch(`https://agile-eyrie-75679.herokuapp.com/get-profile?email=${user.email}`).then(res => res.json()))

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
                                src={`${user?user.photoURL
                                    : "https://i.ibb.co/T1D3tqN/images.png"
                                    }`}
                                alt=""
                            />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                            {user?user.displayName : "- - -"}
                        </h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">
                            {user?user.email : "- - -"}
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
                <div>
                    {
                        modal && <AddProfileInfo setModal={setModal} />
                    }
                </div>
            </div>

        </div>
    );
};

export default Myprofile;