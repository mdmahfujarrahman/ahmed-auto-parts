import "animate.css";
import React from 'react';
import { Link } from "react-router-dom";
import car from '../../../asset/Slider Car.png';

const Banner = () => {

    
    return (
        <section className="bg-hero-bg bg-center">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center h-screen">
                    <div className="text-white text-center md:text-left animate__animated animate__fadeInTopLeft">
                        <h1 className="text-5xl my-6">
                            Auto Parts Manufacturer
                        </h1>
                        <p className="my-4">
                            Special offer for auto parts for electric cars and
                            hybrid vehicles. To select the spare part you need.
                        </p>
                        <Link to="/products" className="btn btn-primary my-4">
                            Buy Now
                        </Link>
                    </div>
                    <div className="w-11/12 animate__animated animate__fadeInRightBig">
                        <img className="mt-8 md:mt-0" src={car} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;