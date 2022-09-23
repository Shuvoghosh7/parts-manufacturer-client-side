import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Firebase/Firebase.init';

const DashboardSideber = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/*   Sidebar content here */}
                    <li></li>
                    {(!admin) && <>
                        <li><Link to="/dashboard/myorder">My order</Link></li>
                        <li><Link to="/dashboard/review">Add A Review</Link></li>
                    </>}
                    <li><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>
                   
                    
                    {admin &&<>
                        {/* <li><NavLink to="/dashboard/manageOrders">Manage All Orders</NavLink></li> */}
                        <li><NavLink to="/dashboard/AddProduct">Add Product</NavLink></li>
                        <li><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
                        <li><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;