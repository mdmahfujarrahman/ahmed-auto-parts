import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Sheard/Loading';
import AllOrders from '../AllOrders/AllOrders';
import DeleteOrder from '../AllOrders/DeleteOrder';

const ManageOrders = () => {
    const [deleteOrderId, setDeleteOrderId] =useState('')
    const {
        data: orders,
        isLoading,
        refetch
    } = useQuery("orders", () =>
        fetch("https://ahmed-auto-parts-server.onrender.com/orders", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    )

    if(isLoading){
        return <Loading />
    } 

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Product Name</th>
                        <th>Customer Name</th>
                        <th>Customer Address</th>
                        <th>Customer Phone</th>
                        <th>Customer Email</th>
                        <th>Order Quantity</th>
                        <th>Order Price</th>
                        <th>Payment status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <AllOrders
                            key={order._id}
                            index={index}
                            setDeleteOrderId={setDeleteOrderId}
                            order={order}
                            refetch={refetch}
                        />
                    ))}
                    {deleteOrderId && (
                        <DeleteOrder
                            refetch={refetch}
                            deleteOrderId={deleteOrderId}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;