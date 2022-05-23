import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);

    const logOut = () => {
        signOut(auth);
    };
    const menuItem =
    <>
        <li><Link className='text-primary font-bold' to='/tools'>Tools</Link></li>
        <li><Link className='text-primary font-bold' to='/businessSummary'>Business Summary</Link></li>
        <li><Link className='text-primary font-bold' to='/reviews'>Reviews</Link></li>
        
        
        {
            user
            ? <>
                <li><Link onClick={logOut} className='text-primary font-bold' to='/login'>Logout</Link></li>
                <li className='text-primary font-bold border border-primary rounded-full flex items-center p-2'>{user.displayName}</li>
            </>
            : <>
                <li><Link className='text-primary font-bold' to='/login'>Login</Link></li>
                <li><Link className='text-primary font-bold' to='/registration'>Registration</Link></li>
            </>
        }
    </>
    return (
        <div class="navbar bg-base-100 sticky top-0 z-50 px-12 shadow">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}
                </ul>
                </div>
                <Link to='/' class="btn btn-ghost md:h-16 md:w-28 border-primary rounded-full normal-case text-2xl text-primary font-bold">BTM</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;