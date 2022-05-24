import React from 'react';
import car from '../../../asset/Slider Car.png';

const Banner = () => {

    
    return (
        <section className="bg-hero-bg bg-center">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center h-screen">
                    <div className="text-white text-center md:text-left">
                        <h1 className="text-5xl my-6">
                            Auto Parts Online Store
                        </h1>
                        <p className="my-4">
                            Special offer for auto parts for electric cars and
                            hybrid vehicles. To select the spare part you need,
                            use the filter presented above or the advanced
                            filter.
                        </p>
                        <button class="btn btn-secondary my-4">Button</button>
                    </div>
                    <div class="ml-0 md:ml-64 transition ease-in-out">
                        <img src={car} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;