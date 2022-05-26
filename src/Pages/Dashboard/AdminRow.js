import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    // console.log(email);
    const makeAdmin = () => {
        fetch(`https://pacific-depths-36150.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully make admin');
                console.log(data)
                refetch();
            })
    }
    return (
       <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {role !== 'admin'
                    ?
                    <button onClick={makeAdmin} className='btn btn-primary btn-sm'>Make Admin</button>
                    :
                    <button className='btn btn-accent btn-sm'>Admin</button>
                }   
            </td>
        </tr>
    );
};

export default AdminRow;