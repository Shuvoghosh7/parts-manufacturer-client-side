import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://agile-eyrie-75679.herokuapp.com/user', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
        }
    })
        .then(res => res.json()))
   
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mx-5 my-5'>
            <h2 className='text-2xl'>All User:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;