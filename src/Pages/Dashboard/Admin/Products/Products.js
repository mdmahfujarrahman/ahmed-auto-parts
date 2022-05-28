import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = ({ product,index, setDeleteId }) => {
    const {_id, name, img, quantity, price} = product;
    const navigate = useNavigate()

    const updateProducts = id => {
        navigate(`/dashboard/update-products/${id}`);
        
    }
    
    const getId = id => {
        setDeleteId(id)
    }
    
 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td className="hover:underline">
                <Link to={`/purchase/${_id}`}>{name}</Link>
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button
                    onClick={() => updateProducts(_id)}
                    className="btn btn-sm text-black btn-success text-white"
                >
                    Update
                </button>
                <label
                    for="delete-product"
                    onClick={() => getId(_id)}
                    className="btn btn-sm ml-4 btn-primary text-white"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default Products;