import { toast } from "react-toastify";

const DeleteOrder = ({ deleteOrderId, refetch }) => {
    const deleteProduct = () => {
        if (deleteOrderId) {
            fetch(`https://ahmed-auto-parts.herokuapp.com/order/${deleteOrderId}`, {
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
                        toast.success("Order Successfully Deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-order" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete Order</h3>
                    <p class="py-4">
                        Are you sure you want to delete this Order ?
                    </p>
                    <div class="modal-action">
                        <label
                            onClick={deleteProduct}
                            for="delete-order"
                            class="btn btn-primary"
                        >
                            Yes
                        </label>
                        <label for="delete-order" class="btn btn-success">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrder;