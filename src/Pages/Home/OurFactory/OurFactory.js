import React from 'react';
import factory from '../../../asset/factory.jpg';

const OurFactory = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img
                        src={factory}
                        alt="factory"
                        className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
                    />
                    <div className="text-center lg:text-left ml-0 lg:ml-10">
                        <h1 className="text-5xl font-bold">Our Factory</h1>
                        <p className="py-6 text-xl">
                            Ahmed Auto Parts offers a unique combination of
                            know-how in plastics moulding technologies for
                            clients in the automotive industry worldwide. Our
                            research and development facilities, design offices
                            and our practiced sales team provide us with
                            expertise that allows us to offer a full range of
                            plastics based automotive solutions........
                        </p>
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFactory;