import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Sheard/Loading';
import DeleteUser from '../DeleteUser/DeleteUser';
import Users from '../Users/Users';

const ManageUser = () => {
    const [deleteEmail, setDeleteEmail] = useState('')
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://ahmed-auto-parts.herokuapp.com/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading){
        return <Loading />
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead className="">
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#00263C]">
                        {users.map((user, index) => (
                            <Users
                                index={index}
                                key={user._id}
                                setDeleteEmail={setDeleteEmail}
                                refetch={refetch}
                                user={user}
                            />
                        ))}
                        {deleteEmail && (
                            <DeleteUser
                                refetch={refetch}
                                deleteEmail={deleteEmail}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;