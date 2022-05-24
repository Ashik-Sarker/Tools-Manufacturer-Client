import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import LoadingSpinner from '../Common/LoadingSpinner';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user || gUser);

    if (token) {
        navigate(from, { replace: true });
    }

    if (gLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-400'>{error.message}</p>
    }

    let gErrorMessage;
    if (gError) {
        gErrorMessage = <p className='text-red-400'>{gError.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
    }

    return (
        <div className='h-screen flex justify-center items-center my-24 md:my-0'>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className='text-center text-xl mb-4 text-primary font-bold'>Login</h1>
                    {/* Form Start */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-lg text-primary">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type Here Your Email"
                                class="input input-bordered w-full max-w-xs text-lg text-primary border-primary"
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
                            {/* Error Field */}
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
                            {/* Error Field */}
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Submit button */}
                        {errorMessage}
                        <input type="submit"  className='btn btn-primary input input-bordered w-full max-w-xs mt-8 font-bold'/>
                    </form>
                    {/* Divider */}
                    <p className='text-green-900'>New to BTM? <small className='text-green-500'><Link to={'/registration'}>Create a new account</Link></small></p>
                    <div class="divider">OR</div>

                    {/* Social Button */}
                    {gErrorMessage}
                    <div onClick={() => signInWithGoogle()} className='flex flex-col w-full max-w-xs border-opacity-50 mx-auto'>
                        <button class="btn btn-outline btn-primary font-bold">GOOGLE SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;