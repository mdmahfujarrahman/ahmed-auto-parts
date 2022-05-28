import React from 'react';

const Products = ({ product,index }) => {
    const {name, img, quantity, price} = product;
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
                <button class="btn btn-sm text-black btn-success text-white">
                    Update
                </button>
                <button class="btn btn-sm ml-4 btn-primary text-white">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Products;