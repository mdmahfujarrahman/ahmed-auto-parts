import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddProducts = () => {
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();


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
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const photoURL = result.data.url;
                    const addProducts = {
                        img: photoURL,
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        price: data.price,
                    };
                    fetch(`https://ahmed-auto-parts.herokuapp.com/parts`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                        body: JSON.stringify(addProducts),
                    })
                        .then((res) => {
                            if (res.success === 'false') {
                                toast.error(
                                    `Sorry!! ${data.name} already in our server`
                                );
                            }
                            return res.json();
                        })
                        .then((added) => {
                            reset();
                            if (added.results) {
                                toast.success(
                                    `${data.name} successfully added`
                                );
                                navigate("/dashboard/manage-products");
                            }
                        });
                }
            });
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full mt-10">
                    <h2 className="text-center text-success font-bold text-2xl uppercase mb-10">
                        Add Products
                    </h2>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <label className="block text-left mb-2 font-bold text-gray-600">
                                    Products Name
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message:
                                                "Products name is required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Put in products name"
                                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="block text-left mb-2 font-bold text-gray-600">
                                    Products Description
                                </label>
                                <textarea
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message:
                                                "Products description is required",
                                        },
                                        minLength: {
                                            value: 165,
                                            message:
                                                "Minimum 165 characters required",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Put in products description"
                                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                />
                                <label className="label">
                                    {errors.description?.type ===
                                        "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </label>
                                <label className="label">
                                    {errors.description?.type ===
                                        "minLength" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="block text-left mb-2 font-bold text-gray-600">
                                    Products Quantity
                                </label>
                                <input
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message:
                                                "Products quantity is required",
                                        },
                                        min: {
                                            value: 100,
                                            message:
                                                "Minimum 100 pcs quantity is required",
                                        },
                                    })}
                                    type="number"
                                    placeholder="Put in products quantity"
                                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                />
                                <label className="label">
                                    {errors.quantity?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </label>
                                <label className="label">
                                    {errors.quantity?.type === "min" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="block text-left mb-2 font-bold text-gray-600">
                                    Products Price
                                </label>
                                <input
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message:
                                                "Products price is required",
                                        },
                                        min: {
                                            value: 10,
                                            message:
                                                "Minimum 10$ will be product price",
                                        },
                                    })}
                                    type="number"
                                    placeholder="Put in Products Price"
                                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                />
                                <label className="label">
                                    {errors.price?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.price.message}
                                        </span>
                                    )}
                                </label>
                                <label className="label">
                                    {errors.price?.type === "min" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.price.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="block text-left mb-2 font-bold text-gray-600">
                                    Products Image
                                </label>
                                <input
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message:
                                                "Products image is required",
                                        },
                                    })}
                                    type="file"
                                    className="border  shadow p-3 w-full rounded mb-"
                                />
                                <label className="label">
                                    {errors.image?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.image.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <input
                                type="submit"
                                className="block w-full btn btn-success text-white font-bold p-4 rounded-lg"
                                value="Add Products"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;