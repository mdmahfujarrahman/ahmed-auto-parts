import { toast } from "react-toastify";

const Users = ({ user, index, refetch, setDeleteEmail }) => {
    const { displayName, email, role } = user;

    const makeAdmin = () => {
        fetch(`https://ahmed-auto-parts-server.onrender.com/user/admin/${email}`, {
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

    const getEmail = email => {
        setDeleteEmail(email)
    }
    
    
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>
                {role ? (
                    <button className="btn btn-xs btn-success">Admin</button>
                ) : (
                    <button onClick={makeAdmin} className="btn btn-sm">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <label
                    onClick={() => getEmail(email)}
                    for="delete-user"
                    className="btn btn-sm btn-primary text-white"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default Users;