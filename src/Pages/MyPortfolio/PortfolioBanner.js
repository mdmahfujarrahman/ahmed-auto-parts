import React from 'react';
import mahfuj from '../../asset/mahfuj.jpg';

const PortfolioBanner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-20 container mx-auto">
            <div className="hover:scale-110 ease-in-out">
                <img
                    className="rounded animate__animated animate__bounceIn animate__lightSpeedInLeft  animate__delay-1s"
                    src={mahfuj}
                    alt="mahfuj"
                />
            </div>
            <div className="text-white font-bold mr-0 md:ml-24 lg:mr-40 animate__animated animate__lightSpeedInRight animate__delay-1s">
                <h1 className="text-5xl my-8">Hey, I am</h1>
                <h2 className="text-5xl my-8">Md Mahfujar Rahman</h2>
                <div className="flex items-center space-x-4">
                    <div className="divider w-8 rounded bg-green-400 h-2"></div>
                    <p className="text-xl">
                        Jr. Front-end Developer. My Own World
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBanner;