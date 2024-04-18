import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../asset/google.png';
import piston from '../../../asset/piston.png';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Sheard/Loading';


const Login = () => {
    const navigate= useNavigate()
    const location = useLocation()
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [token] = useToken(user || gUser);
    
    const from = location.state?.from?.pathname || "/dashboard";
    let signInError;



    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);
 
    

    if (error || gError) {
        signInError = (
            <p className="text-red-500 text-center">
                <small>{error?.message || gError?.message}</small>
            </p>
        );
    }

    if(loading || gLoading){
        return <Loading/>
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        
    };

    
    return (
        <div className="hero min-h-screen bg-review-bg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center ml-0 md:ml-6 text-white lg:text-left">
                    <h1 className="text-5xl font-bold">Welcome!!</h1>
                    <p className="py-6 text-xl">
                        Welcome to Ahmed Auto Parts{" "}
                        <span className="text-primary">Login</span> page. If you
                        do not have an account for ordering and payment, you can
                        create one.
                        <br /> If so, please log in.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Must be 6 Characters or Longer",
                                        },
                                    })}
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.password?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                                <label className="label">
                                    {errors.password?.type === "minLength" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                                {signInError}

                                <label className="label">
                                    <Link
                                        to="/signup"
                                        className="label-text-alt link link-hover"
                                    >
                                        Craete a New Account!
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Log In"
                                    className="btn btn-primary text-white my-4"
                                ></input>
                            </div>
                        </form>
                        <div className="divider">
                            <img className="10" src={piston} alt="piston" />
                        </div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-primary my-4"
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