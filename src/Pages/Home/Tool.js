import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const {
        _id,
        name,
        img,
        description,
        price,
        minimumOrder,
        availableQuantity
    } = tool;
    const navigate = useNavigate();
    const purchaseProduct = () => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl pt-6">
            <figure><img className='w-40' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-accent mx-auto text-3xl">{name}</h2>
                <p className='text-accent'>{description.split(" ").slice(0,9).join(" ")}...</p>
                <p className='text-accent'>Minimum Order: {minimumOrder}</p>
                <p className='text-accent'>Available Quantity: {availableQuantity}</p>
                <p className='text-accent'>Price: ${price}</p>
                <div class="card-actions justify-end">
                <button onClick={purchaseProduct} class="btn btn-primary w-full font-bold">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;