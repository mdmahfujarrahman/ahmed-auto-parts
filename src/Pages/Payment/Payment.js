import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Loading from "../Sheard/Loading";

const stripePromise = loadStripe(
    "pk_test_51L2unwFoZvIiBHhvVulJg66AJUY7LcqLduhbw32oUFhPQh6MGOWPO5VgR73F7T7mmQrhgFVtXJAbwLwELmWgLB3V007AEMDOlD"
);

const Payment = () => {
    const { id } = useParams();

    const url = `https://ahmed-auto-parts.herokuapp.com/order/${id}`;
    const { data: order, isLoading } = useQuery(["order", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="flex justify-center my-48">
            <div>
                <div class="card w-96 max-w-md bg-base-100 shadow-xl my-12">
                    <div class="card-body">
                        <p className="text-success font-bold">
                            Hello, {order.userName}
                        </p>
                        <h2 class="card-title">
                            Please Pay for
                            <span className="text-orange-700">
                                {order.quantity} pcs
                            </span>{" "}
                        </h2>
                        <p>{order.partsName}</p>
                        <p>Please pay: ${order.price}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-96 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;
