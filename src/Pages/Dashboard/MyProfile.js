import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const {
        data,
        isLoading,
        refetch
    } = useQuery('myInfo', () => fetch(`https://pacific-depths-36150.herokuapp.com/user/${user.email}`).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const onSubmit = data => {
        console.log(data);
        const myInfo = {
            profession: data.profession,
            education: data.education,
            linkedIn: data.linkedInProfileLink,
            address: data.address
        }
        console.log(myInfo);
        fetch(`https://pacific-depths-36150.herokuapp.com/myProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(myInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
        })
        reset();
    }
    return (
        <div className='w-3/4 mx-auto mb-20 mt-16 md:mt-0 h-screen flex items-center justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' mx-12 md:mb-0 mb-12 text-center'>
                    <img className='w-32 mb-6 rounded-full mx-auto' src={user.photoURL} alt="" />
                    <p class="text-xl font-bold">{user.displayName}</p>
                    <p class="text-xl font-bold">{user.email}</p>
                    <p class="text-xl font-bold border mt-4 mb-2 p-1 border-0">{data?.education && <>Education: {data.education}</>}</p>
                    <p class="text-xl font-bold border my-2 p-1 border-0">{data?.profession && <>Profession: {data.profession}</>}</p>
                    <p class="text-xl font-bold border my-2 p-1 border-0">{data?.linkedIn && <>Linked In : <a href={data.linkedIn}>{data.linkedIn}</a></>}</p>
                    <p class="text-xl font-bold border my-2 p-1 border-0">{data?.address && <>Address: {data.address}</>}</p>
                </div>
                <div className=' mx-12 flex flex-col justify-center'>
                    <p className='text-white p-4 text-center text-xl mb-4 font-bold bg-primary rounded-lg w-full max-w-xs'>Update Your Profile</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Education field */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder='Education'
                                class="input input-bordered input-primary w-full max-w-xs text-lg border-primary mb-4"
                                {...register("education")}
                            />
                        </div>
                        {/* Linked In Profile field */}
                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder='Linked In Profile Link'
                                class="input input-bordered input-primary w-full max-w-xs text-lg border-primary mb-4"
                                {...register("linkedInProfileLink")}
                            />
                        </div>
                        {/* Profession Field */}
                        <div class="form-control w-full max-w-xs mb-4">
                            <input
                                type="text"
                                placeholder='Profession'
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {...register("profession")}
                            />
                        </div>
                        {/* Address Field */}
                        <div class="form-control w-full max-w-xs">
                            <textarea
                                placeholder="Type Your Address"
                                class="textarea textarea-primary input-bordered w-full max-w-xs text-lg border-primary mb-4"
                                {...register("address")}
                            ></textarea>
                        </div>

                        <input
                            value="Update"
                            type="submit"
                            className='btn btn-primary input input-bordered w-full max-w-xs font-bold' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;