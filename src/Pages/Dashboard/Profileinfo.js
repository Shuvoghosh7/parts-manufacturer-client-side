import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const Profileinfo = ({ info }) => {
    const { education, location, phoneNumber, LinkedInLink, _id } = info
    const [user] = useAuthState(auth)
    const updateProfile = (event) => {
        event.preventDefault();
        const education = event.target.education.value
        const location = event.target.location.value
        const phoneNumber = event.target.phoneNumber.value
        const LinkedInLink = event.target.LinkedInLink.value

        fetch(`https://agile-eyrie-75679.herokuapp.com/update-profile/${_id}`, {
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

    }
    return (
        <div>
            <p><span className='font-bold text-[#FD841F]'>Education: </span>{education}</p>
            <p className='mt-3' ><span className='font-bold text-[#FD841F]'>Location: </span>{location}</p>
            <p className='mt-3'><span className='font-bold text-[#FD841F]'>Phone Number: </span>{phoneNumber}</p>
            <p className='mt-3'><span className='font-bold text-[#FD841F]'>LinkedIn Link: </span>{LinkedInLink} </p>
            <div>
                <div>
                    <label for="my-modal-3" class="btn modal-button bg-transparent hover:bg-gradient-to-r from-secondary to-primary btn-primary card-button mt-12 text-white text-center">Update Profile</label>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal mt-12">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div className='login-container'>
                                <form onSubmit={updateProfile}>
                                    <div className='input-field'>
                                        <input type="text" defaultValue={education} name="education" id="" />
                                    </div>
                                    <div className='input-field'>
                                        <input type="text" defaultValue={location} name="location" id="" />
                                    </div>
                                    <div className='input-field'>
                                        <input type="text" defaultValue={phoneNumber} name="phoneNumber" id="" />
                                    </div>
                                    <div className='input-field'>
                                        <input type="text" defaultValue={LinkedInLink} name="LinkedInLink" id="" />
                                    </div>
                                    <input className='submit-button' type="submit" value="Update Profile" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profileinfo;