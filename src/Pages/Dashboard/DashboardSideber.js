import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const DashboardSideber = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/*   Sidebar content here */}
                    {user && <>
                        <li><NavLink to="/dashboard/myorder">My order</NavLink></li>
                        <li><NavLink to="/dashboard/review">Add A Review</NavLink></li>
                        </>}
                        <li><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;