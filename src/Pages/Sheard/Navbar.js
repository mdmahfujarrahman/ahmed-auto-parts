import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../asset/logo.png';
import auth from '../../firebase/firebase.init';
import Loading from './Loading';



const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();




    if(loading){
        return <Loading />
    }
    
    const logout = () => {
        signOut(auth);
    };

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
            {user && (
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            )}

            {user ? (
                    <li>
                        <button onClick={logout}>Sign out</button>
                    </li>
            ) : (
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
            )}
        </>
    );
        
    

    return (
        <div className="navbar bg-primary">
            <div className="container relative mx-auto">
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
                        <img
                            className="w-40 inline ml-16 md:ml-0"
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex text-secondary">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menuItems}
                    </ul>
                </div>
                { location.pathname === '/dashboard' &&
                    <label
                        htmlFor="parts-side-bar"
                        className="btn btn-ghost absolute right-0  drawer-button lg:hidden"
                    >
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
                }
            </div>
        </div>
    );
};

export default Navbar;