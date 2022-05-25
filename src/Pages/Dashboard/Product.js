import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ tool, index, refetch }) => {
    const { _id } = tool;
    const makeDelete = () => {
        console.log(_id);
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success('Successfully Delete Product')
                }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool.name}</td>
            <td>{tool.minimumOrder}</td>
            <td>{tool.availableQuantity}</td>
            <td>{tool.price}</td>
            <td>
                <button onClick={makeDelete} className='btn btn-primary btn-sm'>Delete</button>
            </td>
        </tr>
    );
};

export default Product;