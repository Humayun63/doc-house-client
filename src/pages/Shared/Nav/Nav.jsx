import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/header/logo.png'
import { AuthContext } from '../../../providers/AuthProvider';

const Nav = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar bg-transparent block md:flex">
            <div className="flex-1">
                <Link to='/'>
                    <div className='flex items-center mb-6 gap-2'>
                        <img src={logo} alt="Logo" className='w-10' />
                        <h1 className='text-3xl font-bold'>
                            <span className='text-[#F7A582]'>Doc </span>
                            <span className='text-white'>House</span>
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><NavLink className={({ isActive }) => isActive ? 'text-[#F7A582] font-semibold border-2' : 'hover:font-medium'} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-[#F7A582] font-semibold border-2' : 'hover:font-medium'} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-[#F7A582] font-semibold border-2' : 'hover:font-medium'} to="/appointment">Appointment</NavLink></li>
                    {
                        user ?
                            <>
                                <button className='btn'>Log out</button>
                            </> :
                            <li><NavLink className={({ isActive }) => isActive ? 'text-[#F7A582] font-semibold border-2' : 'hover:font-medium'} to="/login">Login</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;