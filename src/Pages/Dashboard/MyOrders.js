import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    const { data: items, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/myOrders?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        // console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
        return res.json()
    }))

    if (isLoading) {
        return <LoadingSpinner/>
    }

    // console.log(orders);

    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myOrders?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // },[user])
    
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>email</th>
                            <th>payment Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((order, index) => < Order
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;