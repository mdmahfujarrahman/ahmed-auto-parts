import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Sheard/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoadings] = useAdmin(user);

    if (loading || adminLoadings) {
        return <Loading />;
    }

    return (
        <div className="drawer drawer-mobile bg-gradient-to-r from-[#16222A] to-[#3A6073]">
            <input
                id="parts-side-bar"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content text-center">
                <h2 className="text-4xl text-white my-6">
                    {user.displayName} <br />
                    <span className="font-bold text-[#FFE98A]">
                        Welcome to Your Dashboard
                    </span>
                </h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="parts-side-bar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-[#00263C] text-white text-base-content">
                    {admin && (
                        <>
                            <li>
                                <Link to={"/dashboard/manage-user"}>
                                    Manage User
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/manage-orders"}>
                                    Manage Orders
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/manage-products"}>
                                    Manage Products
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to={"/dashboard"}>My Profile</Link>
                    </li>
                    {!admin && (
                        <>
                            <li>
                                <Link to={"/dashboard/my-order"}>
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/add-review"}>
                                    Add A Review
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;