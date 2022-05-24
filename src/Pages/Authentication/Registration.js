import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/LoadingSpinner';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Registration = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    
    // custom hook useToken
    const [token] = useToken(user || gUser);

    if (gLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (token) {
        console.log('navigate');
        navigate('/dashboard');
    }

    let gErrorMessage;
    if (gError) {
        gErrorMessage = <p className='text-red-400'>{gError.message}</p>
    }

    let errorMessage;
    if (error || uError) {
        errorMessage = <p className='text-red-400'>{error.message}{uError.message}</p>
    }

    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name})
        reset();
        // navigate('/');
        // console.log(data);
        // console.log('updated done');
    }

    return (
        <div className='h-screen flex justify-center items-center my-24 md:my-0'>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className='text-center text-xl mb-4 text-primary font-bold'>Please Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-lg text-primary">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here Your Name"
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Email Field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-lg text-primary">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type Here Your Email"
                                class="input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="text-red-400">{errors.email.message}</span>}
                                
                                {errors.email?.type === 'pattern' && <p className='text-red-400'>{errors.email.message}</p>}
                            </label>
                        </div>
                        {/* Password field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-lg text-primary">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Type Here Your Password"
                                class = "input input-bordered w-full max-w-xs text-lg border-primary"
                                {
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                        }
                                    })
                                }
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Submit button */}
                        {errorMessage}
                        <input type="submit"  className='btn btn-primary input input-bordered w-full max-w-xs mt-8 font-bold'/>
                    </form>

                    {/* Divider */}
                    <p className='text-green-900'>Already have an account? <small className='text-green-500'><Link to={'/login'}>Login</Link></small></p>
                    <div class="divider">OR</div>

                    {/* Social Button */}
                    {gErrorMessage}
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary font-bold">GOOGLE SIGN IN</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;