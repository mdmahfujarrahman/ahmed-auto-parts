import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({ orderDetail, index, setDeleteOrderId }) => {
    const { _id, partsName, quantity, price, paid } = orderDetail;

    const getId = (id) => {
        setDeleteOrderId(id);
    };
    console.log(paid);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <Link to={`/dashboard/payment/${_id}`} className="btn btn-sm">
                    Pay
                </Link>{" "}
                or{" "}
                <label
                    onClick={() => getId(_id)}
                    for="delete-order"
                    className="btn btn-sm btn-primary"
                >
                    Cancel
                </label>
            </td>
            <td>Pending</td>
        </tr>
    );
};

export default OrdersRow;