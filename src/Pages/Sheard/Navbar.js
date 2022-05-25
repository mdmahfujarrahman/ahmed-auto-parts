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
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio">My Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/login">Log In</NavLink>
            </li>
        </>
    );
        
    

    return (
        <div className="navbar bg-primary">
            <div className="container mx-auto">
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-40 inline ml-16 md:ml-0" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex text-secondary">
                    <ul className="menu menu-horizontal p-0">{menuItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;