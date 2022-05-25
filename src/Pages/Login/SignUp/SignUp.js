import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import google from "../../../asset/google.png";
import piston from "../../../asset/piston.png";
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';



const SignUp = () => {
     const [signInWithGoogle, gUser, gLoading, gError] =
         useSignInWithGoogle(auth);
     const [createUserWithEmailAndPassword, user, loading, error] =
         useCreateUserWithEmailAndPassword(auth);
     const {
         register,
         formState: { errors },
         handleSubmit,
     } = useForm();
     const [updateProfile, updating, uError] =
         useCreateUserWithEmailAndPassword(auth, {
             sendEmailVerification: true,
         });
     const navigate = useNavigate();


     let signInError;

     if (error || gError || uError) {
         signInError = (
             <p className="text-red-500 text-center">
                 <small>
                     {error?.message || gError?.message || uError?.message}
                 </small>
             </p>
         );
     }

     if (loading || gLoading || updating) {
         return <Loading />;
     }

     if (user || gUser) {
         navigate("/");
     }

     const onSubmit = async (data) => {
         await createUserWithEmailAndPassword(data.email, data.password);
         await updateProfile({ displayName: data.name });
     };

    return (
        <div class="hero min-h-screen bg-signup-bg bg-center">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center ml-0 md:ml-6 text-white lg:text-left">
                    <h1 class="text-5xl font-bold">Welcome!!</h1>
                    <p class="py-6 text-xl">
                        Welcome to Ahmed Auto Parts{" "}
                        <span className="text-primary">SignUp</span> page. If
                        you do not have an account for ordering and payment, you
                        can create one.
                        <br /> If so, please log in.
                    </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
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
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
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
                                        {errors.password?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.password.message}
                                            </span>
                                        )}
                                    </label>
                                    <label className="label">
                                        {errors.password?.type ===
                                            "minLength" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.password.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                {signInError}
                                <div className="flex justify-between">
                                    <label class="label">
                                        <button
                                            to="/login"
                                            class="label-text-alt link link-hover"
                                        >
                                            Forgot password?
                                        </button>
                                    </label>
                                    <label class="label">
                                        <span className="label-text-alt">
                                            Already have a account?
                                        </span>
                                        <Link
                                            to="/login"
                                            class="label-text-alt link link-hover"
                                        >
                                            Log in
                                        </Link>
                                    </label>
                                </div>
                            </div>
                            <div class="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    class="btn btn-primary text-white my-4"
                                >
                                    
                                </input>
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

export default SignUp;