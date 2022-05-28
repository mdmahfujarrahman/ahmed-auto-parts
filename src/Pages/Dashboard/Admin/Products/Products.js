import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ product,index }) => {
    const {_id, name, img, quantity, price} = product;
    const navigate = useNavigate()

    const updateProducts = id => {
        navigate(`/dashboard/update-products/${id}`);
        
    }
 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                
                <button
                    onClick={() => updateProducts(_id)}
                    class="btn btn-sm text-black btn-success text-white"
                >
                    Update
                </button>
                <button  class="btn btn-sm ml-4 btn-primary text-white">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Products;