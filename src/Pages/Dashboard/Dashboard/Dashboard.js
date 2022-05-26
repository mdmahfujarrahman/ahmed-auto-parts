import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile">
            <input id="parts-side-bar" type="checkbox" class="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className="text-4xl my-6">
                    {user.displayName}{" "}
                    <span className="font-bold text-[#00263C]">
                        Welcome to Your Dashboard
                    </span>
                </h2>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="parts-side-bar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-[#00263C] text-white text-base-content">
                    <li>
                        <Link to={"/dashboard"}>My Orders</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/reviews"}>My Reviews</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/Profile"}>My Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;