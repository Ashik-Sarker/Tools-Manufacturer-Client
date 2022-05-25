import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Common/LoadingSpinner';
import Product from './Product';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/tools`, {
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
    
    console.log(products);

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
                    products.map((tool,index) => < Product
                    key={tool._id}
                        tool={tool}
                        index={index}
                        refetch={refetch}
                    ></Product>)
                }
                
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;