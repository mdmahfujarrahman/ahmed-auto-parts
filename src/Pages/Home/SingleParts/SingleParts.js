import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ part }) => {
    const {_id ,name, img, description, price, quantity} =  part ;
    const navigate = useNavigate()

    const purchaseHandle = id => {
        navigate(`purchase/${id}`);
    }
    


    return (
        <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
            <img
                className="w-full animate__animated animate__zoomIn hover:scale-110 transition ease-in-out"
                src={img}
                alt={name}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex justify-between px-6 pt-4 pb-2">
                <div className="bg-[#0aae5f] w-32 rounded">
                    <p className="py-2 text-center text-white">
                        Price: <span>$ {price}</span>/Pcs
                    </p>
                </div>
                <div className="bg-[#0aae5f] w-32 rounded">
                    <p className="py-2 text-center text-white">
                        {quantity} in Stock
                    </p>
                </div>
            </div>
            <div className="text-center my-6">
                <p>
                    <small>* Minimum Order of 100 Pcs</small>
                </p>
                <button
                    onClick={() => purchaseHandle(_id)}
                    className="btn btn-primary w-[342px] lg:w-[400px] text-white"
                >
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default SingleParts;