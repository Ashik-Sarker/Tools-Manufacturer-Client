import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L15ZwADiiWLcPFLdl1llSEePAKVv0R6MTsrSLJ4NK0F8Y5pdgm5qMbwlHqvl8JxkySTGmXrhccm5wxe9UpDG0ck008UlzxPt0');


const Payment = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();

    const url = `http://localhost:5000/myOrder/${id}`;

    const { data, isLoading, refetch } = useQuery(['myOrder', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner/>
    }

    const subTotal = (parseInt(data.quantity) * parseInt(data.productPrice));

    return (
        <div class="grid grid-cols-1 gap-8 bg-base-100">
            <div class="card-body shadow">
                <h3 className='text-orange-600 font-bold'>Hello! {user.displayName}</h3>
                <h2 class="card-title">Pay For Your Order</h2>
                <p>Item name <span className='text-lg text-orange-500'>{data.productName}</span> Quantity <span className='text-lg text-orange-500'>{data.quantity}</span> and price for each product <span className='text-lg text-orange-500'>${data.productPrice}</span></p>
                <p>Total Price: <span className='text-lg text-orange-500'>${subTotal}</span></p>
            </div>
            <div class="card-body shadow">
                <Elements stripe={stripePromise}>
                    <CheckoutForm subTotal={subTotal} data={data}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;