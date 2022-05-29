import React from 'react';
import bootstrap from '../../asset/Bootstrappng.png';
import css from '../../asset/CSS3.png';
import express from "../../asset/express.png";
import html from '../../asset/HTML5.png';
import javascript from "../../asset/js.png";
import mongodb from "../../asset/mongodb.png";
import nodejs from "../../asset/Node.js.png";
import react from "../../asset/raect.png";
import reactRouter from "../../asset/react-router.jpg";
import tailwind from "../../asset/tailwindcss.png";

const Skills = () => {
    return (
        <div className="p-10 container mx-auto">
            <h1 className="text-5xl text-white">Technologies that I know</h1>
            <div className="flex justify-start flex-col lg:flex-row space-x-0  lg:space-x-6 space-y-4 lg:space-y-0 my-10">
                <div className="flex space-x-4">
                    <img className="w-14" src={html} alt="html" />
                    <img className="w-14" src={css} alt="css" />
                    <img className="w-14" src={bootstrap} alt="bootstarp" />
                </div>
                <img className="w-48 md:w-32" src={tailwind} alt="tailwind" />
                <div className="flex space-x-4">
                    <img className="w-14" src={javascript} alt="js" />
                    <img className="w-14" src={react} alt="react" />
                    <img className="w-14" src={reactRouter} alt="reactrouter" />
                    <img className="w-14" src={nodejs} alt="nodejs" />
                </div>
                <img className="w-48 md:w-32" src={express} alt="express" />
                <img className="w-48 md:w-32" src={mongodb} alt="mongodb" />
            </div>
        </div>
    );
};

export default Skills;