import React from 'react';
import { useQuery } from 'react-query';
import SingleParts from '../Home/SingleParts/SingleParts';
import Loading from '../Sheard/Loading';

const AllProducts = () => {
    const {
        data: parts,
        isLoading,
        refetch,
    } = useQuery("parts", () =>
        fetch("https://ahmed-auto-parts-server.vercel.app/parts").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="my-20">
            <h2 className="text-center text-5xl my-10">Our All Manufacturing Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
                {parts
                    .map((part) => <SingleParts key={part._id} part={part} />)}
            </div>
        </div>
    );
};

export default AllProducts;