import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  flex flex-col items-center mt-10 pb-12">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div class="drawer-side text-xl border">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu overflow-y-auto w-40 bg-green-50 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {
                        !admin &&
                        <>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>
                    }
                    {
                        admin &&
                        <>
                            <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>    
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;