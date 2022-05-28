import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';
import DeleteOrder from '../Admin/AllOrders/DeleteOrder';
import OrdersRow from '../OrdersRow/OrdersRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orderDetails, setOrderDetails] = useState([])
    const navigate = useNavigate()
    const [deleteOrderId,  setDeleteOrderId] = useState('')
 
    useEffect(() => {
            if (user) {
                fetch(`http://localhost:5000/order?user=${user.email}`, {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                })
                .then((res) => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem("accessToken");
                            navigate("/");
                        }
                        return res.json();
                    })
                    .then((data) => {
                    setOrderDetails(data);
                });
            }
    }, [user]);
    
    if (loading){
        return <Loading />
    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Parts Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment Status</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetails.map((orderDetail, index) => (
                        <OrdersRow
                            index={index}
                            setDeleteOrderId={setDeleteOrderId}
                            orderDetail={orderDetail}
                        />
                    ))}
                    {deleteOrderId && (
                        <DeleteOrder deleteOrderId={deleteOrderId} />
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;