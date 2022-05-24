import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';
import AdminRow from './AdminRow';

const ManageProducts = () => {
    // const [user] = useAuthState(auth);
    const { data: tools, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/tools`, {
        method: 'GET',
        headers: {
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log('res', res);
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
                    {/* <th>img</th> */}
                    <th>Name</th>
                    <th>Minimum Order</th>
                    <th>Available Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                
                <tbody>
                {
                    tools.map((tool,index) => < AdminRow
                    key={tool._id}
                        tool={tool}
                        index={index}
                        refetch={refetch}
                    ></AdminRow>)
                }
                
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;