import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import quality from '../../../asset/barcode-scanner.png';
import packageIcon from "../../../asset/package.png";
import Loading from '../../Sheard/Loading';

const Purchase = () => {
    const {id} = useParams()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const { data: partsDetails, isLoading } = useQuery("partsDetails", () =>
        fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
    );

    if(isLoading){
        return <Loading />;
    }

    const onSubmit = data => console.log(data)
    
    
    
    return (
        <section className="flex flex-col md:flex-row items-center justify-center container mx-auto my-28">
            <div>
                <img src={partsDetails.img} alt={partsDetails.name} />
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-64 md:w-2/4">
                    <h2 className="text-5xl">{partsDetails.name}</h2>
                    <p className="my-6">{partsDetails.description}</p>
                    <div className="flex flex-col md:flex-row justify-between w-56 md:w-96">
                        <div className="bg-[#0aae5f] rounded">
                            <p className="py-2 px-2 text-center text-white">
                                Price: <span>$ {partsDetails.price}</span>/Pcs
                            </p>
                        </div>
                        <div className="bg-[#0aae5f] rounded my-4 md:my-0">
                            <p className="py-2 px-2 text-center text-white">
                                {partsDetails.quantity} in Stock
                            </p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center w-56">
                        <img className="w-8" src={packageIcon} alt="package" />
                        <p className="ml-4">Free Delivery From $500</p>
                    </div>
                    <div className="flex items-center w-56 my-2">
                        <img className="w-8" src={quality} alt="quality" />
                        <p className="ml-4">Product Quality Check</p>
                    </div>
                </div>
                <div className="w-64 md:w-2/4 bg-[#F8F8F8] rounded-md py-10 ml-0 md:ml-4">
                    <h1 className="text-center text-3xl">Please Your Order</h1>
                    <form
                        className="flex flex-col items-center my-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                            })}
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full max-w-xs mb-4"
                        />
                        <label className="label">
                            {errors.name?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.name.message}
                                </span>
                            )}
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
                            placeholder="Enter Your Email Address"
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
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone Number is required",
                                },
                            })}
                            type="number"
                            placeholder="Enter Your Phone Number"
                            className="input input-bordered w-full max-w-xs mb-4"
                        />
                        <label className="label">
                            {errors.phone?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.phone.message}
                                </span>
                            )}
                        </label>
                        <input
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required",
                                },
                            })}
                            type="text"
                            placeholder="Enter Your Full Address"
                            className="input input-bordered w-full max-w-xs mb-4"
                        />
                        <label className="label">
                            {errors.address?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.address.message}
                                </span>
                            )}
                        </label>
                        <input
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is required",
                                },
                                min: {
                                    value: 100,
                                    message: "Minimum Order 100 pcs",
                                },
                            })}
                            type="number"
                            placeholder="Please Enter Order Quality"
                            className="input input-bordered w-full max-w-xs"
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
                        <p className="text-center">
                            <small>* Minimum Order 100 pcs</small>
                        </p>
                        <input
                            className="bg-primary cursor-pointer text-white input input-bordered w-full max-w-xs"
                            type="submit"
                            value="Place Your Order"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;