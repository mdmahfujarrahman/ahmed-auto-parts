import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';

const UpdateProfile = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    if (loading) {
        return <Loading />;
    }

    const imageStorageKey = "c357f10b5663a35f69dea2ea874ff55f";
    
    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if(result.success) {
                const photoURL = result.data.url;
                const updateProfile = {
                    photoURL: photoURL,
                    email: user.email,
                    displayName: user.displayName,
                    phone: data.phone,
                    education: data.education,
                    address: data.address,
                };
                fetch(`https://ahmed-auto-parts.herokuapp.com/user/${user.email}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify(updateProfile),
                })
                    .then((res) => res.json())
                    .then((updated) => {
                        reset()
                        if(updated.results){
                            toast.success('Your Profile Update Successfully')
                            navigate('/dashboard')
                        }
                    });

            }
        })



    }



    return (
        <section>
            <div className="card mx-auto w-full  max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "image is required",
                                },
                            })}
                            type="file"
                            className=" w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.image?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.image.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            value={user.displayName}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            value={user.email}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            {...register("phone")}
                            type="number"
                            placeholder="Enter Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            {...register("education")}
                            type="text"
                            placeholder="Enter Your Last School/ University Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            {...register("address")}
                            type="text"
                            placeholder="Enter Your City Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <input
                        className="btn mt-4 btn-outline btn-warning"
                        type="submit"
                        value="Update Profile"
                    />
                    <Link to="/dashboard/profile">
                        <button className="btn btn-outline btn-success">
                            Back To Profile
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default UpdateProfile;