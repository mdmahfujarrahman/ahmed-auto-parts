import React from 'react';
import CountUp from "react-countup";
import company from '../../../asset/company.png';
import country from '../../../asset/country.png';
import feedback from '../../../asset/feedback.png';
import parts from '../../../asset/parts.png';
import piston from '../../../asset/piston.png';

const Summary = () => {
    return (
        <section className="bg-summary-bg bg-center w-full py-20">
            <div>
                <div className="text-white text-center">
                    <h2 className="text-5xl">Millions Of Company Trust Us</h2>
                    <p className="my-4 text-xl">
                        We are proud of the fact that millions of company trust
                        us to supply auto parts for their daily use.
                    </p>
                </div>
                <div className=" flex justify-center w-80 mx-auto my-6">
                    <div className="border-solid border-primary border-2"></div>
                    <img className="px-4" src={piston} alt="piston" />
                    <div className="border-solid border-primary border-2"></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center   md:justify-evenly">
                <div className="mt-6 md:mt-0">
                    <img className="w-48" src={country} alt="county" />
                    <div className="text-center text-white mt-8">
                        <h2 className="text-5xl">
                            {<CountUp end={32} duration={7} />}+
                        </h2>
                        <p>Country</p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <img className="w-48" src={company} alt="company" />
                    <div className="text-center text-white mt-8">
                        <h2 className="text-5xl">
                            {<CountUp end={101} duration={7} />}+
                        </h2>
                        <p>Company</p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <img className="w-48" src={parts} alt="parts" />
                    <div className="text-center text-white mt-8">
                        <h2 className="text-5xl">
                            {<CountUp end={900981} duration={7} />}+
                        </h2>
                        <p>Parts Supplied</p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <img className="w-48" src={feedback} alt="feedback" />
                    <div className="text-center text-white mt-8">
                        <h2 className="text-5xl">
                            {<CountUp end={187} duration={7} />}+
                        </h2>
                        <p>Positive Feedback</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;