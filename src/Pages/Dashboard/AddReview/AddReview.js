import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (review) => {
        const reviewDetails = {
            name: user.displayName,
            email: user.email,
            reviewtext: review.reviewTexted,
            rating: review.rating,
        };

        
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviewDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                reset();
                if (data.success) {
                    toast.success("😍 Your review has been successfully added");
                } else {
                    toast.error("☹️ Sorry!! You already give your review..");
                }
            });

        
    };
    
    return (
        <section className="card mt-48 mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            disabled
                            value={user.displayName}
                            className="input input-bordered w-full max-w-x"
                            {...register("name")}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">White Your Review</span>
                        </label>
                        <textarea
                            className="textarea textarea-success"
                            {...register("reviewTexted", { required: true })}
                        />
                        {errors.reviewTexted?.type === "required" &&
                            "Reviews is required"}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Put Your Rating</span>
                        </label>
                        <input
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: "rating is required",
                                },
                                max: {
                                    value: 5,
                                    message: "Maximum you can give 5",
                                },
                                mim: {
                                    value: 1,
                                    message: "Minimum you can give 1",
                                },
                            })}
                            type="number"
                            placeholder="Give your rating out 5"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.rating?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.rating.message}
                                </span>
                            )}
                        </label>
                        <label className="label">
                            {errors.rating?.type === "max" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.rating.message}
                                </span>
                            )}
                        </label>
                        <label className="label">
                            {errors.rating?.type === "min" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.rating.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Post Your Review"
                            className="btn btn-primary text-white my-4"
                        ></input>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReview;