import { toast } from "react-toastify";

const Users = ({ user, index, refetch }) => {
    const { displayName, email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if(res.statusCode === 403) {
                    toast.error(`Sorry, can't make admin`,{
                        toastId: 'error1'
                    } )
                }
                return res.json();
            })
            .then((data) => {
                refetch()
                if (data.matchedCount > 0) {
                    toast.success("Successfully made an admin", {
                        toastId: "success1",
                    });
                }
            });
    };
    const deleteUser = () => {

        fetch(`http://localhost:5000/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res => {
            if (res.status === 403){
                toast.error(`you can't delete admin`)
            }
            return res.json();
        })
        .then(deleteData => {
            if (deleteData.deletedCount > 0){
                toast.success("User Successfully deleted");
                refetch();
            }
            
        })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>
                {role ? (
                    <button class="btn btn-xs btn-success">Admin</button>
                ) : (
                    <button onClick={makeAdmin} class="btn btn-sm">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button
                    onClick={deleteUser}
                    class="btn btn-sm btn-primary text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Users;