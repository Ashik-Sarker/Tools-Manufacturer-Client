import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Common/LoadingSpinner';


const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch(`https://pacific-depths-36150.herokuapp.com/allOrders`, {
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

    const shiftNow = (order) => {

        fetch(`https://pacific-depths-36150.herokuapp.com/shiftNow/${order._id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({shiftNow: true})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Successfully Update Shifting")
                    refetch()
                })
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Buyer Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Payment Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((order,index) => 
                        <tr>
                            <th>{index+1}</th>
                            <td>{order.name}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.productPrice}</td>
                            <td>{order.paid ? "Paid" : "Unpaid"}</td>
                            <td>
                            {
                            order.paid && <button
                            onClick={() => shiftNow(order)}
                            className='btn btn-accent btn-sm'>
                                {
                                    order.shiftNow ? 'Ready For Shifting' : <p className='text-orange-500'>Pending</p>
                                }
                            </button>
                            }
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;