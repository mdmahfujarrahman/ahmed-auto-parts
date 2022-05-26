import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import quality from '../../../asset/barcode-scanner.png';
import packageIcon from "../../../asset/package.png";
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';

const Purchase = () => {
    const {id} = useParams()
    const [user, loading] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();


    const {
        data: partsDetails,
        isLoading,
        refetch,
    } = useQuery("partsDetails", () =>
        fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
    );

    if (isLoading || loading) {
        return <Loading />;
    }

    const onSubmit = data => {

        const orderDetails = {
            user: user.email,
            partsName: partsDetails.name,
            userName: user.displayName,
            userAddress: data.address,
            userPhone: data.phone,
            quantity: data.quantity,
            price: data.quantity * partsDetails.price,
        };
        
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(orderDetails),
        })
        .then(res => res.json())
        .then(orderData => {
            reset()
           if(orderData.results.insertedId){
                const letestQuantity = parseInt(partsDetails.quantity - data.quantity);
                if (!isNaN(letestQuantity)) {
                    const updatePartsDetails = {
                        _id: partsDetails._id,
                        name: partsDetails.name,
                        img: partsDetails.img,
                        description: partsDetails.description,
                        quantity: letestQuantity,
                        price: partsDetails.price,
                    };
                    fetch(`http://localhost:5000/parts/${partsDetails._id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updatePartsDetails),
                    })
                        .then((res) => res.json())
                        .then((updateData) => {
                            refetch()
                        });

                }

               
           }
            
            

        })

       

    }
    
    
    
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
                            {...register("name")}
                            value={user.displayName}
                            type="text"
                            disabled
                            className="input input-bordered w-full max-w-xs mb-4"
                        />
                        <input
                            {...register("email")}
                            type="email"
                            value={user.email}
                            disabled
                            className="input input-bordered w-full max-w-xs mb-4"
                        />
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
                                max: {
                                    value: `${partsDetails.quantity}`,
                                    message: `Maximum Order less the Our Stock Pcs`,
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
                        <label className="label">
                            {errors.quantity?.type === "max" && (
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