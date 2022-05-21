import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem =
    <>
        <li><Link className='text-green-700 font-bold' to='/tools'>Tools</Link></li>
        <li><Link className='text-green-700 font-bold' to='/businessSummary'>Business Summary</Link></li>
        <li><Link className='text-green-700 font-bold' to='/reviews'>Reviews</Link></li>
        <li><Link className='text-green-700 font-bold' to='/login'>Login</Link></li>
        <li><Link className='text-green-700 font-bold' to='/registration'>Registration</Link></li>
        <li><Link className='text-green-700 font-bold' to='/logout'>Logout</Link></li>
    </>
    return (
        <div class="navbar bg-base-100 sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}
                </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl text-green-700 font-bold">BTM</Link>
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