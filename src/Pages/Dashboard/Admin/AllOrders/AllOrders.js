import React from 'react';

const AllOrders = ({ order, index, refetch, setDeleteOrderId }) => {
    const {
        _id,
        user,
        partsName,
        userName,
        userPhone,
        quantity,
        price,
        userAddress,
    } = order;
    if (user) {
        refetch();
    }
    const cancelOrder = () => {
        fetch(`https://ahmed-auto-parts.herokuapp.com/order/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {});
    };

    const orderId = (id) => {
        setDeleteOrderId(id);
    };

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{userName}</td>
            <td>{userAddress}</td>
            <td>{userPhone}</td>
            <td>{user}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>Pending</td>
            <td>
                <label
                    htmlFor="delete-order"
                    onClick={() => orderId(_id)}
                    className="btn btn-sm btn-primary text-white"
                >
                    Cancel
                </label>
            </td>
            <>
                <input
                    type="checkbox"
                    id="delete-modal"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Confirm Cancel</h3>
                        <p className="py-4">
                            Are you sure you want to cancel Order?
                        </p>
                        <div className="modal-action">
                            <label
                                onClick={cancelOrder}
                                for="delete-modal"
                                className="btn"
                            >
                                Yse
                            </label>
                            <label for="delete-modal" className="btn">
                                NO
                            </label>
                        </div>
                    </div>
                </div>
            </>
        </tr>
    );
};

export default AllOrders;