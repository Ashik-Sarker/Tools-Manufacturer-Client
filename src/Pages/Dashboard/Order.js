import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order,index,refetch }) => {
    const {
        _id,
        address,
        email,
        phone,
        productImg,
        productName,
        productPrice,
        quantity,
        paid,
        transactionId
    } = order;
    console.log(_id, address);

    const deleteOne = () => {
        const url = `https://pacific-depths-36150.herokuapp.com/myOrder/${_id}`;
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
                {
                    (productPrice && !paid) ?
                    <Link to={`/dashboard/payment/${_id}`}>
                        <button class="btn bg-accent btn-sm ">pay</button>
                        </Link>
                        :
                        <>
                            <button disabled className='border text-primary border-accent px-12 font-bold rounded-lg'>PAID </button>
                            <p className='text-orange-400'>Transaction Id: <br />{transactionId}</p>
                        </>
                }
                
            </th>
            <th>
            {
                !paid && <button onClick={deleteOne} class="btn bg-red-700 border-0 btn-sm ">cancel</button>
            }
            </th>       
        </tr>
    );
};

export default Order;