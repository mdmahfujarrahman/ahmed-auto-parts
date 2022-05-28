import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ deleteId, refetch }) => {
    const deleteProduct = () => {
        if (deleteId) {
            fetch(`http://localhost:5000/parts/${deleteId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Product Successfully deleted");
                        refetch()
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-product" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete Product</h3>
                    <p class="py-4">
                        Are you sure you want to delete this product ?
                    </p>
                    <div class="modal-action">
                        <label
                            onClick={deleteProduct}
                            for="delete-product"
                            class="btn btn-primary"
                        >
                            Yes
                        </label>
                        <label for="delete-product" class="btn btn-success">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;