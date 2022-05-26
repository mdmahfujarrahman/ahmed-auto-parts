import React from 'react';

const OrdersRow = ({ orderDetail, index }) => {
    const { partsName, quantity, price } = orderDetail;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <button class="btn btn-sm">Pay</button>
            </td>
            <td>Pending</td>
        </tr>
    );
};

export default OrdersRow;