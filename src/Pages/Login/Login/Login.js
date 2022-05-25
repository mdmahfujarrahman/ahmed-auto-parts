import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../asset/google.png';
import piston from '../../../asset/piston.png';

const Login = () => {
    
    return (
        <div class="hero min-h-screen bg-review-bg">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center ml-0 md:ml-6 text-white lg:text-left">
                    <h1 class="text-5xl font-bold">Welcome!!</h1>
                    <p class="py-6 text-xl">
                        Welcome to Ahmed Auto Parts{" "}
                        <span className="text-primary">Login</span> page. If you
                        do not have an account for ordering and payment, you can
                        create one.
                        <br /> If so, please log in.
                    </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                class="input input-bordered"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                class="input input-bordered"
                            />
                            <div className="flex justify-between">
                                <label class="label">
                                    <a
                                        href="#"
                                        class="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                                <label class="label">
                                    <Link
                                        to="/signup"
                                        class="label-text-alt link link-hover"
                                    >
                                        Craete a New Account!
                                    </Link>
                                </label>
                            </div>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-white my-4">
                                Login
                            </button>
                        </div>
                        <div class="divider">
                            <img className="10" src={piston} alt="piston" />
                        </div>
                        <button class="btn btn-primary my-4">
                            <div className="bg-white p-2 rounded">
                                <img
                                    className="w-4"
                                    src={google}
                                    alt="Google"
                                />
                            </div>
                            <span className="ml-2 text-white">
                                Sign in with Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;