import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Navber.css'

const Navber = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    const { pathname } = useLocation()
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("AccessToken")
    };
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="navbar border-gray-200 px-2 sm:px-8 py-2.5 w-full sticky top-0 transition-all nav-content shadow-lg set-border  z-50 lg:px-20">
                    {pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>}
                    <Link
                        to="/"
                        className="flex-1 px-2 font-bold text-2xl uppercase mx-2 text-white"
                    >
                        Vertex Technologies
                    </Link>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block ">
                        <ul class="menu-horizontal gap-x-2">

                            <li>
                                <CustomLink to='/' className="bg-transpare">Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/products'>
                                    Products
                                </CustomLink>
                            </li>
                            {/* <li><NavLink to='/myPortfolio' className='rounded-lg'>MyPortfolio</NavLink></li> */}
                            {/* <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li> */}

                            {user ? (
                                <>
                                    <li>
                                        <CustomLink to="/dashboard">
                                            Dashboard
                                        </CustomLink>
                                    </li>
                                    <li>
                                        <CustomLink
                                            onClick={() => {
                                                signOut(auth);
                                                localStorage.removeItem("authorizationToken");
                                            }}
                                            to="/singin"
                                        >
                                            Logout
                                        </CustomLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <CustomLink to="/singin">Login</CustomLink>
                                    </li>
                                    <li>
                                        <CustomLink to="/singup">Register</CustomLink>
                                    </li>
                                </>
                            )}


                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><NavLink to='/' className='rounded-lg text-lg font-bold '>Home</NavLink></li>
                    <li><NavLink to='/products' className='rounded-lg text-lg font-bold'>Products</NavLink></li>
                    {/* <li><NavLink to='/myPortfolio' className='rounded-lg'>MyPortfolio</NavLink></li> */}
                    {/* <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li> */}

                    {user && <li><NavLink to='/dashboard' className='rounded-lg text-lg font-bold'>Dashboard</NavLink></li>}
                    <li>{user ? <button className='btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary rounded-lg text-lg' onClick={logout}>sing out</button> : <NavLink to='/singin' className='rounded-lg'>SingIn</NavLink>}</li>


                </ul>

            </div>
        </div>
    );
};

export default Navber;