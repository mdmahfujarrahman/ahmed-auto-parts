import React from 'react';

const OrdersRow = ({ orderDetail, index, setDeleteOrderId }) => {
    const { _id, partsName, quantity, price } = orderDetail;

    const getId = (id) => {
        setDeleteOrderId(id);
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-sm">Pay</button> or{" "}
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