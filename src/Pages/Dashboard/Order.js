import React from 'react';

const Order = ({ order,index,refetch }) => {
    const {
        _id,
        address,
        email,
        phone,
        productImg,
        productName,
        productPrice,
        quantity
    } = order;
    console.log(_id, address);

    const deleteOne = () => {
        const url = `http://localhost:5000/myOrder/${_id}`;
        fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    return (
        <tr>
            <th>{index+1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{productPrice}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <th>
                <button class="btn bg-accent btn-xs ">pay</button>
            </th>
            <th>
                <button onClick={deleteOne} class="btn bg-red-700 border-0 btn-xs ">cancel</button>
            </th>       
        </tr>
    );
};

export default Order;