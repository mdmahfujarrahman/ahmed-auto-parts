import React from 'react';
import convocation from "../../asset/convocation.jpg";
import doctor from '../../asset/dr.jpg';
import nestmini from '../../asset/googlenest.jpg';
import mkvhd from "../../asset/mkvhd.jpg";

const Project = () => {
    return (
        <div className="container mx-auto p-10 text-white">
            <h2 className="text-5xl text-white">My Recent Work</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-8">
                <div className="border border-solid rounded-lg border-2 space-x-0 lg:space-x-3 space-y-3 lg:space-y-0 flex flex-col lg:flex-row p-4">
                    <div>
                        <h4 className="text-3xl">Google Next Mini</h4>
                        <p className="text-xl my-2 text-green-400">
                            Product Reviews
                        </p>
                        <p className="text-xl my-2 text-green-400">
                            Javascript, Tailwind CSS, React, React Router
                        </p>
                        <p className="text-xl my-4">
                            In this website i reviewed single products,in there
                            have home page, blog page, review page and user
                            dashboard.
                        </p>

                        <a
                            href="https://googlenestmini.netlify.app/"
                            className="btn btn-outline btn-success mt-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Link
                        </a>
                    </div>
                    <img
                        className="w-96 hover:scale-105 rounded animate__animated animate__zoomIn animate__delay-1s"
                        src={nestmini}
                        alt="doctor"
                    />
                </div>
                <div className="border border-solid rounded-lg border-2 flex space-x-0 lg:space-x-3 space-y-3 lg:space-y-0 flex-col  lg:flex-row p-4">
                    <div>
                        <h4 className="text-3xl">Dr. Jason Armstrong</h4>
                        <p className="text-xl my-2 text-green-400">
                            Service Provider
                        </p>
                        <p className="text-xl my-2 text-green-400">
                            Javascript, Tailwind CSS, React, React Router,
                            Firebase
                        </p>
                        <p className="text-xl my-4">
                            In this project i try to cover single service
                            provider service management. User can log in make an
                            appointment.
                        </p>

                        <a
                            href="https://dr-jason-armstrong.firebaseapp.com/"
                            className="btn btn-outline btn-success mt-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Link
                        </a>
                    </div>
                    <img
                        className="w-96 hover:scale-105 rounded animate__animated animate__zoomIn animate__delay-1s"
                        src={doctor}
                        alt=""
                    />
                </div>
                <div className="border border-solid rounded-lg border-2 flex space-x-0 lg:space-x-3  space-y-3 lg:space-y-0 flex-col  lg:flex-row p-4">
                    <div>
                        <h4 className="text-3xl">MKBHD's Gears</h4>
                        <p className="text-xl my-2 text-green-400">
                            Influencer Products Showcase
                        </p>
                        <p className="text-xl my-2 text-green-400">
                            HTML5, CSS3
                        </p>
                        <p className="text-xl my-4">
                            In this project, I have provided an influencer with
                            his daily gadgets on a landing page. Fully
                            Responsive(mobile, tablet, computer)
                        </p>

                        <a
                            href="https://mkbhds-gears.netlify.app/"
                            className="btn btn-outline btn-success mt-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Link
                        </a>
                    </div>
                    <img
                        className="w-96 hover:scale-105 rounded animate__animated animate__zoomIn animate__delay-1s"
                        src={mkvhd}
                        alt="mkvhd"
                    />
                </div>
                <div className="border border-solid rounded-lg border-2 flex space-x-0 lg:space-x-3 space-y-3 lg:space-y-0 flex-col  lg:flex-row p-4">
                    <div>
                        <h4 className="text-3xl">Brundage Convention Center</h4>
                        <p className="text-xl my-2 text-green-400">
                            Convention Center
                        </p>
                        <p className="text-xl my-2 text-green-400">
                            HTML5, CSS3, Boostrap
                        </p>
                        <p className="text-xl my-4">
                            In this project i try to cover a Convention Center
                            all service , package price, FAQ etc.In this project
                            i use first time CSS faramework.
                        </p>

                        <a
                            href="https://brundage-convention-center.netlify.app/"
                            className="btn btn-outline btn-success mt-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Link
                        </a>
                    </div>
                    <img
                        className="w-96 hover:scale-105 rounded animate__animated animate__zoomIn animate__delay-1s"
                        src={convocation}
                        alt="convocation"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;