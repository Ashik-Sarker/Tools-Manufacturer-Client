import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});
    console.log(tool);
    const { availableQuantity, minimumOrder } = tool;
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    useState(() => {
        fetch(`https://pacific-depths-36150.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    },[id])

    const [quantityField, setQuantityField] = useState(0);
    // console.log(typeof (minimumOrder));
    const [disable, setDisable] = useState(false);
    
    
    const decrementQuantity = () => {

        if (parseInt(minimumOrder) < quantityField)
        {
            setQuantityField(quantityField - 1);
            setDisable(false)
        }
        else
        {
            alert('This is minimum Quantity')
            setQuantityField(quantityField - 1);
            setDisable(true)
        }
    }
    const incrementQuantity = () => {

        if (parseInt(availableQuantity) > quantityField)
        {
            setQuantityField(quantityField + 1);
            setDisable(false)
        }
        else{
            alert('Our available quantity is 110')
            setQuantityField(quantityField + 1);
            setDisable(true)
        }
    }

    const onSubmit = data => {
        const purchaseTools = {
            toolsId: id,
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            address: data.address,
            productName: tool.name,
            productPrice: tool.price,
            productImg: tool.img,
            quantity: quantityField
        }
        fetch('https://pacific-depths-36150.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(purchaseTools)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Successfully added Item")
                }
                else {
                    toast.error("already purchase this item");
                }
            // console.log(data);
        })
        reset();
    }

    return (
        <div className='w-3/4 mx-auto mb-20 mt-16 md:mt-0 h-screen flex items-center justify-center'>
            {/* <h1 className='text-4xl text-primary font-bold text-center mb-20'>Purchase Id: {id}</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' mx-12 md:mb-0 mb-12'>
                    <img style={{width:"50%"}} src={tool.img} alt="" />
                    <h1 class="text-5xl font-bold">{tool.name}</h1>
                    <p class="py-6">{tool.description}</p>
                    <p>Minimum Order: {tool.minimumOrder}</p>
                    <p>Available Quantity: {tool.availableQuantity}</p>
                    <p>Price: ${tool.price}</p>
                </div>
                <div className=' mx-12'>
                    <p className='text-white p-4 text-center text-xl mb-4 font-bold bg-primary rounded-lg w-full max-w-xs'>Fill the form</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name field */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                disabled
                                type="text"
                                class = "input input-bordered input-primary w-full max-w-xs text-lg border-primary mb-4"
                                value={user.displayName}
                            />
                        </div>
                        {/* Email Field */}
                        <div class="form-control w-full max-w-xs mb-4">
                            <input
                                disabled
                                type="email"
                                value={user.email}
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                
                            />
                        </div>
                        {/* phone number */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Type Here Your Phone no."
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone number is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.phone?.type === 'required' && <span class="label-text-alt text-red-600">{errors.phone.message}</span>}
                            </label>
                        </div>
                        {/* Address Field */}
                        <div class="form-control w-full max-w-xs">
                            <textarea
                                placeholder="Type Your Address"
                                class = "textarea textarea-primary input-bordered w-full max-w-xs text-lg border-primary" {
                                    ...register("address", {
                                        required: {
                                            value: true,
                                            message: "address is required"
                                        }
                                    })
                                }
                            ></textarea>
                            <label class="label">
                                {errors.address?.type === 'required' && <span class="text-red-400">{errors.address.message}</span>}
                            </label>
                        </div>
                        {/* Update Quantity */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-primary text-lg">Update Quantity</span>
                            </label>
                            <label class="input-group">
                                <span onClick={decrementQuantity} className='btn btn-primary text-xl'>-</span>
                                <input
                                type="text"
                                value={quantityField === 0 ? (minimumOrder && setQuantityField(parseInt(minimumOrder))) : quantityField}
                                    
                                class="input input-bordered" />
                                <span onClick={incrementQuantity} className='btn btn-primary'>+</span>
                            </label>
                        </div>
                        
                        <input
                            disabled={disable}
                            value="Purchase"
                            type="submit"
                            className='btn btn-primary input input-bordered w-full max-w-xs mt-8 font-bold' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;




