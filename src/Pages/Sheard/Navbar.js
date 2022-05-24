import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png';



const Navbar = () => {

    
    const menuItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">Products</NavLink>
            </li>
            <li>
                <NavLink to="/">My Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/">Log In</NavLink>
            </li>
        </>
    );
        
    

    return (
        <div class="navbar bg-primary">
            <div class="container mx-auto">
                <div class="navbar-start flex">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/">
                        <img class="w-40 inline ml-16 md:ml-0" src={logo} alt="" />
                    </Link>
                </div>
                <div class="navbar-end hidden lg:flex text-secondary">
                    <ul class="menu menu-horizontal p-0">{menuItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;