import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        const newProduct = {
            name: data.name,
            minimumOrder: data.minimumOrder,
            availableQuantity: data.availableQuantity,
            price: data.price,
            description: data.description,
            img: data.img
        }
        
        fetch(`http://localhost:5000/addTool`, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully add Product')
            })
        
        reset();
    }
    return (
        <div>
            <h1 className='bg-primary mb-6 py-2 rounded-lg text-center font-bold text-white w-96'>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*  */}
                <div class="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder='Product Name'
                        class="input input-bordered input-primary w-96 text-lg border-primary mb-4"
                        {...register("name")}
                    />
                </div>
                {/*  */}
                <div class="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder = 'Minimum Order'
                        class="input input-bordered input-primary w-96 text-lg border-primary mb-4"
                        {...register("minimumOrder")}
                    />
                </div>
                {/*  */}
                <div class="form-control w-full max-w-xs mb-4">
                    <input
                        type="number"
                        placeholder = 'Available Quantity'
                        class="input input-bordered w-96 text-lg border-primary"
                        {...register("availableQuantity")}
                    />
                </div>
                {/*  */}
                <div class="form-control w-full max-w-xs mb-4">
                    <input
                        type="number"
                        placeholder = 'Price'
                        class="input input-bordered w-96 text-lg border-primary"
                        {...register("price")}
                    />
                </div>
                {/*  */}
                <div class="form-control w-full max-w-xs mb-4">
                    <input
                        type="text"
                        placeholder = 'Upload Images Url'
                        class = "input input-bordered w-96 text-lg border-primary"
                        {...register("img")}
                    />
                </div>
                {/*  */}
                <div class="form-control w-full max-w-xs">
                    <textarea
                        placeholder="Description"
                        class="textarea textarea-primary input-bordered w-96 text-lg border-primary mb-4"
                        {...register("description")}
                    ></textarea>
                </div>

                <input
                    value="Update"
                    type="submit"
                    className='btn btn-primary input input-bordered w-96 font-bold' />
            </form>
        </div>
    );
};

export default AddProducts;