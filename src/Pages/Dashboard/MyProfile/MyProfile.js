import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userDetails, setUserDetails] = useState([])
    const navigate = useNavigate();

    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user?email=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    setUserDetails(data);
                });
        }
    }, [user]);
    
    if (loading) {
        return <Loading />;
    }
    return (
        <section>
            <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded-full">
                            {user.photoURL ? (
                                <img
                                    src={user?.photoURL}
                                    alt={user?.displayName}
                                />
                            ) : (
                                <img
                                    src={userDetails[0]?.photoURL}
                                    alt={userDetails[0]?.displayName}
                                />
                            )}
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-center items-center">
                        <p className="text-left w-2/5">Name</p>
                        <div className="flex items-center w-3/4">
                            <div className="divider divider-horizontal">:</div>
                            <p className="text-left">{user?.displayName}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-left w-2/5">Email</p>
                        <div className="flex items-center w-3/4">
                            <div className="divider divider-horizontal">:</div>
                            <p className="text-left">{userDetails[0]?.email}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-left w-2/5">Phone Number</p>
                        <div className="flex items-center w-3/4">
                            <div className="divider divider-horizontal">:</div>
                            <p className="text-left">{userDetails[0]?.phone}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-left w-2/5">Education</p>
                        <div className="flex items-center w-3/4">
                            <div className="divider divider-horizontal">:</div>
                            <p className="text-left">
                                {userDetails[0]?.education}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-left  w-2/5">Address</p>
                        <div className="flex items-center w-3/4">
                            <div className="divider divider-horizontal">:</div>
                            <p className="text-left">
                                {userDetails[0]?.address}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link
                            to="/dashboard/update-profile"
                            className="btn btn-outline btn-success"
                        >
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default MyProfile;