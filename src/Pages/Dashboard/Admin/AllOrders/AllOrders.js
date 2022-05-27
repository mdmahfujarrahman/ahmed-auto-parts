import React from 'react';

const AllOrders = ({ order, index, refetch }) => {
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
    if(user){
        refetch()
    }
    const cancelOrder = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };


    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{partsName}</td>
            <td>{userName}</td>
            <td>{userAddress}</td>
            <td>{userPhone}</td>
            <td>{user}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>Blue</td>
            <td>
                <label
                    htmlFor="delete-modal"
                    class="btn btn-sm btn-primary text-white"
                >
                    Cancel
                </label>
            </td>
            <>
                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Confirm Cancel</h3>
                        <p class="py-4">
                            Are you sure you want to cancel Order?
                        </p>
                        <div class="modal-action">
                            <label
                                onClick={cancelOrder}
                                for="delete-modal"
                                class="btn"
                            >
                                Yse
                            </label>
                            <label for="delete-modal" class="btn">
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