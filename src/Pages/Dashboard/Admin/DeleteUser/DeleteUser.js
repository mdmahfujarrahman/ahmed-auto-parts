import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ deleteEmail, refetch }) => {
    const deleteUser = () => {
        if (deleteEmail) {
            fetch(`https://ahmed-auto-parts-server.vercel.app/user/${deleteEmail}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    if (res.status === 403) {
                        toast.error(`you can't delete admin`);
                    }
                    return res.json();
                })

                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("User Successfully Deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-user" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete User</h3>
                    <p className="py-4">
                        Are you sure you want to delete this User ?
                    </p>
                    <div className="modal-action">
                        <label
                            onClick={deleteUser}
                            for="delete-user"
                            className="btn btn-primary"
                        >
                            Yes
                        </label>
                        <label for="delete-user" className="btn btn-success">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;