import "animate.css";
import React from 'react';
import car from '../../../asset/Slider Car.png';

const Banner = () => {

    
    return (
        <section className="bg-hero-bg bg-center">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center h-screen">
                    <div className="text-white text-center md:text-left animate__animated animate__fadeInTopLeft">
                        <h1 className="text-5xl my-6">
                            Auto Parts Online Store
                        </h1>
                        <p className="my-4">
                            Special offer for auto parts for electric cars and
                            hybrid vehicles. To select the spare part you need.
                        </p>
                        <button class="btn btn-primary my-4">Buy Now</button>
                    </div>
                    <div class="w-11/12 animate__animated animate__fadeInRightBig">
                        <img src={car} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;