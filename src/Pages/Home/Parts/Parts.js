import React from 'react';
import { useQuery } from 'react-query';
import piston from '../../../asset/piston.png';
import Loading from '../../Sheard/Loading';
import SingleParts from '../SingleParts/SingleParts';

const Parts = () => {
    
    const {
        data: parts,
        isLoading,
        refetch,
    } = useQuery("parts", () =>
        fetch("https://ahmed-auto-parts.herokuapp.com/parts").then((res) => res.json())
    );
    if (isLoading){
        return <Loading/>
    }
    return (
        <section className="my-20">
            <div className="text-center my-12">
                <h3 className="text-4xl uppercase">
                    Featured Products
                </h3>
                <div className="divider w-80 mx-auto my-6">
                    <img src={piston} alt={piston} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
                {parts.map((part) => (
                    <SingleParts key={part._id} part={part} />
                )).slice(0, 6)}
                
            </div>
        </section>
    );
};

export default Parts;