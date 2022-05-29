import React from 'react';
import './About.css';


const PortfolioAbout = () => {
    return (
        <div className="p-10 container mx-auto text-white animate__animated animate__backInUp animate__delay-1s">
            <div>
                <h1 className="text-5xl font-bold">About me</h1>
                <div className="divider w-48 bg-green-400 rounded-md  h-1"></div>
            </div>
            <div className="text-white my-6">
                <h3 className="text-3xl">
                    My name is Mahfuj. I am a Front-end Developer and lives in
                    Dhaka.
                </h3>
                <p className="my-4 text-xl">
                    I am a front-end web developer with a strong track record of
                    building and managing websites. I have an outstanding
                    understanding of HTML5, CSS3, JavaScript, React and other
                    technologies that can be used to build responsive designs
                    for desktop computers and mobile devices. I also have
                    extensive experience in Node Js, MongoDB and others.
                </p>
            </div>
            <a
                href="https://www.linkedin.com/in/mahfuj-ahmed/"
                className="btn btn-outline btn-success"
                target="_blank"
                rel="noreferrer"
            >
                Download CV
            </a>
            <div className="flex md:items-center space-x-4 flex-col md:flex-row my-4">
                <div className="flex items-center space-x-2">
                    <p>I am available on</p>{" "}
                    <div className="divider w-4 bg-green-400 rounded-md h-1"></div>
                </div>
                <div className="flex items-center space-x-3">
                    <a
                        rel="noreferrer"
                        className="social-button"
                        href="https://www.facebook.com/Mahfuj.ahmed0"
                        target="_blank"
                    >
                        Facebook
                    </a>
                    <a
                        rel="noreferrer"
                        className="social-button"
                        href="https://www.instagram.com/ahmed.mahfuj/"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioAbout;