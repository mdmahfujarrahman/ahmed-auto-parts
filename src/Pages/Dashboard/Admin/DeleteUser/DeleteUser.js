import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ deleteEmail, refetch }) => {
    const deleteUser = () => {
        if (deleteEmail) {
            fetch(`http://localhost:5000/user/${deleteEmail}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.status === 403) {
                        toast.error(`you can't delete admin`);
                    }
                    return res.json();
                })

                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("User Successfully Deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-user" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete User</h3>
                    <p class="py-4">
                        Are you sure you want to delete this User ?
                    </p>
                    <div class="modal-action">
                        <label
                            onClick={deleteUser}
                            for="delete-user"
                            class="btn btn-primary"
                        >
                            Yes
                        </label>
                        <label for="delete-user" class="btn btn-success">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;