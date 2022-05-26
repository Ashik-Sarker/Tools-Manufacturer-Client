import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    
    const onSubmit = data => {

        const addReview = {
            customerName: user.displayName,
            profession: data.profession,
            productName: data.productName,
            ratings: data.ratings,
            opinions: data.opinions,
            img: user.photoURL
        }

        fetch('https://pacific-depths-36150.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Successfully added Review")
                }
        })
        reset();
    }
    return (
        <div>
            <h1 className='bg-primary text-white py-2 rounded-lg text-3xl font-bold text-center mb-8'>Add A Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name field */}
                        <div class="form-control w-full max-w-xs md:w-96">
                            <input
                                disabled
                                type="text"
                                class = "input input-bordered input-primary w-full max-w-xs text-lg border-primary mb-4"
                                value={user.displayName}
                            />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Profession"
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("profession", {
                                    required: {
                                        value: true,
                                        message: "Profession is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.profession?.type === 'required' && <span class="label-text-alt text-red-600">{errors.profession.message}</span>}
                            </label>
                        </div>
                        {/* Product Name */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Product Name"
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("productName", {
                                    required: {
                                        value: true,
                                        message: "ProductName is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.productName?.type === 'required' && <span class="label-text-alt text-red-600">{errors.productName.message}</span>}
                            </label>
                        </div>
                        {/* Ratings */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Giv Us Ratings"
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("ratings", {
                                    required: {
                                        value: true,
                                        message: "Ratings is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.ratings?.type === 'required' && <span class="label-text-alt text-red-600">{errors.ratings.message}</span>}
                            </label>
                        </div>
                        {/* Address Field */}
                        <div class="form-control w-full max-w-xs">
                            <textarea
                                placeholder="Opinions"
                                class = "textarea textarea-primary input-bordered w-full max-w-xs text-lg border-primary" {
                                    ...register("opinions", {
                                        required: {
                                            value: true,
                                            message: "address is required"
                                        }
                                    })
                                }
                            ></textarea>
                            <label class="label">
                                {errors.opinions?.type === 'required' && <span class="text-red-400">{errors.opinions.message}</span>}
                            </label>
                        </div>
                        <input
                            value="Submit"
                            type="submit"
                            className='btn btn-primary input input-bordered w-full max-w-xs font-bold' />
                    </form>
        </div>
    );
};

export default AddReview;