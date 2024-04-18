import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ deleteId, refetch }) => {
    const deleteProduct = () => {
        if (deleteId) {
            fetch(`https://ahmed-auto-parts-server.vercel.app/parts/${deleteId}`, {
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
            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Product</h3>
                    <p className="py-4">
                        Are you sure you want to delete this product ?
                    </p>
                    <div className="modal-action">
                        <label
                            onClick={deleteProduct}
                            for="delete-product"
                            className="btn btn-primary"
                        >
                            Yes
                        </label>
                        <label for="delete-product" className="btn btn-success">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;