import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Navber = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const{pathname}=useLocation()
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("AccessToken")
    };
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-neutral  z-50 lg:px-20">
                    {pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

                    </label>}
                    <div class="flex-1 px-2 mx-2 text-accent text-xl font-bold">Computer Parts <br /> Manufacturer</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-2">

                            <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                            <li><NavLink to='/myPortfolio' className='rounded-lg'>MyPortfolio</NavLink></li>
                            
                            {user&&<li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>}
                           
                            <li>{user ? <button className='btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary rounded-lg' onClick={logout}>sing out</button> : <NavLink to='/singin' className='rounded-lg'>SingIn</NavLink>}</li>
                            {
                                user && <li>
                                    <p className=' btn-primary uppercase  bg-gradient-to-r from-primary to-secondary rounded-lg'>
                                        {user.displayName}
                                    </p>
                                </li>
                            }

                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                    <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Navber;