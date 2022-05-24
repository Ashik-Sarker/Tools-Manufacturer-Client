import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/users?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        // console.log('res', res);
        return res.json()
    }))

    if (isLoading) {
        return <LoadingSpinner/>
    }
    
    // console.log(users);

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                
                <tbody>
                {
                    users.map((user,index) => < AdminRow
                    key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                    ></AdminRow>)
                }
                
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;