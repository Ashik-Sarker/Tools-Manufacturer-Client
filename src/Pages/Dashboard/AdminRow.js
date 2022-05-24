import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('How dare you !')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast('Successfully create admin')
                }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin'
                ? <button onClick={makeAdmin} className='btn btn-primary btn-sm'>Make Admin</button>
                : <button  className='px-4 py-1 text-white font-bold rounded-lg bg-accent'>Admin</button>
            }</td>
            <td><button className='btn btn-primary btn-sm'>Delete User</button></td>
        </tr>
    );
};

export default AdminRow;