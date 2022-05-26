import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../asset/google.png';
import piston from '../../../asset/piston.png';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';


const Login = () => {
    const navigate= useNavigate()
    const location = useLocation()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);
 

    let signInError;

    if (error || gError) {
        signInError = (
            <p className="text-red-500 text-center">
                <small>
                    {error?.message || gError?.message}
                </small>
            </p>
        );
    }

    if (loading || gLoading) {
        return <Loading />;
    }


    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        
    };

    
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                                            message: "Provide a valid email",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                                <label className="label">
                                    {errors.email?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
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
                                {signInError}
                                
                                <label class="label">
                                        <Link
                                            to="/signup"
                                            class="label-text-alt link link-hover"
                                        >
                                            Craete a New Account!
                                        </Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Log In"
                                    class="btn btn-primary text-white my-4"
                                ></input>
                            </div>
                        </form>
                        <div class="divider">
                            <img className="10" src={piston} alt="piston" />
                        </div>
                        <button
                            onClick={() => signInWithGoogle()}
                            class="btn btn-primary my-4"
                        >
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