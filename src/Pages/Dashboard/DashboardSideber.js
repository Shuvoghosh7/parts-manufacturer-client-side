import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Firebase/Firebase.init';
import { BsFillPersonFill } from 'react-icons/bs';
import { GrProductHunt } from 'react-icons/gr';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';

const DashboardSideber = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-[#0D4C92]  text-white">
                    {/*   Sidebar content here */}
                    <li></li>
                    {(!admin) && <>
                        <li className='text-xl font-bold'><Link to="/dashboard/myorder"><AiOutlineShoppingCart/> My order</Link></li>
                        <li className='text-xl font-bold'><Link to="/dashboard/review"><MdReviews/> Add A Review</Link></li>
                    </>}
                    <li className='text-xl font-bold'><NavLink to="/dashboard/myprofile"><BsFillPersonFill/>My Profile</NavLink></li>
                   
                    
                    {admin &&<>
                        <li className='text-xl font-bold'><NavLink to="/dashboard/manageOrders"><AiOutlineShoppingCart/> All Orders</NavLink></li>
                        <li className='text-xl font-bold' ><NavLink to="/dashboard/AddProduct"><GrProductHunt/> Add Product</NavLink></li>
                        <li className='text-xl font-bold'><NavLink to="/dashboard/makeAdmin"><RiAdminFill/> Make Admin</NavLink></li>
                        <li className='text-xl font-bold'><NavLink to="/dashboard/manageProducts"> <GrProductHunt/>Manage Products</NavLink></li>
                        <li className='text-xl font-bold' ><NavLink to="/dashboard/AddTeamMember"><GrProductHunt/> Add Member</NavLink></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;