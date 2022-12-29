import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, refetch, index }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://manufacturer-website.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
                console.log(data)

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>

        </tr>
    );
};

export default MakeAdminRow;