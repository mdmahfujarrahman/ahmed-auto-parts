import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Sheard/Loading';
import Products from '../Products/Products';

const ManageProducts = () => {
    const navigate = useNavigate()
    const {
        data: parts,
        isLoading,
    } = useQuery("parts", () =>
        fetch("https://ahmed-auto-parts.herokuapp.com/parts").then((res) => res.json())
    );

    if (isLoading){
        return <Loading />
    }
    const addProducts= () => {
        navigate("/dashboard/add-products")
    }

    return (
        <div className="overflow-x-auto ">
            <button
                onClick={addProducts}
                className="btn btn-wide hidden md:block btn-info absolute top-14 right-12"
            >
                Add Products
            </button>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((product, index) => (
                        <Products
                            key={product._id}
                            product={product}
                            index={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;