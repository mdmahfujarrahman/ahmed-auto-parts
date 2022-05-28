import React from 'react';
import code from "../../asset/code.png";
import performance from "../../asset/performance.png";
import PrototypalInheritance from '../../asset/PrototypalInheritance.jpg';
import stateImg from "../../asset/state.png";
import stateMangment from "../../asset/stateMangment.jpg";
import unitTesting from '../../asset/unit-testing.png';

const Blogs = () => {
    return (
        <div className="container my-10 md:my-0 px-5 py-24 mx-auto">
            <h1 className="text-4xl my-20 text-center">Our Latest Blogs</h1>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={performance}
                            alt="parformace"
                        />
                        <div className="p-6">
                            <h1 className="title-font font-bold text-lg text-gray-600 mb-3">
                                How will you improve the performance of a React
                                Application?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                When building a React app, there are a number of
                                ways to improve the performance. It is not only
                                about optimizing the JavaScript code but also
                                optimizing the way your data is structured.
                                <br />
                                <br />
                                There are several techniques that can be used to
                                optimize your React app. Some of them are:
                                <br />
                                <br />
                                -Function/Stateless Components and
                                React.PureComponent
                                <br />
                                <br />
                                -Using Immutable Data Structures
                                <br />
                                <br />
                                -Multiple Chunk Files
                                <br />
                                <br />
                                -Dependency optimization
                                <br />
                                <br />
                                -Avoid Inline Function Definition in the Render
                                Function
                                <br />
                                <br />
                                -Throttling and Debouncing Event Action in
                                JavaScript
                            </p>
                            <div className="flex items-center flex-wrap "></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={stateMangment}
                            alt="stateMangment"
                        />
                        <div className="p-6">
                            <h1 className="title-font font-bold text-lg text-gray-600 mb-3">
                                What are the different ways to manage a state in
                                a React application?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                There are four main types of state you need to
                                properly manage in your React apps:
                                <br />
                                <br />
                                <code> Local state -</code> When you're building
                                an application, you'll need to store data that
                                is relevant to the current page or component.
                                <br />
                                <br />
                                <code>Global state</code> -If you're building an
                                app that has multiple pages or components, you
                                may need to store information across different
                                sections of your app so that they can interact
                                with each other.
                                <br />
                                <br />
                                <code>Server state - </code>When building an app
                                with remote access, server-side code will be
                                used as an interface between the client and
                                server-side code.
                                <br />
                                <br />
                                <code> URL state- </code>This type of state
                                refers to what happens when someone clicks on a
                                URL link while they're browsing online
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={PrototypalInheritance}
                            alt="PrototypalInheritance"
                        />
                        <div className="p-6">
                            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
                                How does prototypical inheritance work?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                In javascript, the prototypal inheritance is a
                                feature in which an object can inherit
                                properties and methods from another object. It
                                is a dynamic system that uses [[Prototype]] to
                                get and set the prototype of an object.
                                Traditionally, it has been being done using
                                Object.getPrototypeOf and Object.setPrototypeOf,
                                but with modern language this has been replaced
                                by __proto__.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={stateImg}
                            alt="state"
                        />
                        <div className="p-6">
                            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
                                Why you do not set the <code>state</code>{" "}
                                directly in React.
                            </h1>
                            <p className="leading-relaxed mb-3">
                                When we update the state directly, calling
                                setState() afterward will just replace the
                                update. If we update it indirectly through a
                                full React component, it does not change
                                this.state immediately. Instead, it creates a
                                pending state transition, and accessing it after
                                calling this method will only return the present
                                value. The big advantage with indirect updates
                                is that you have control of your own states
                                across all components.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={code}
                            alt="code"
                        />
                        <div className="p-6">
                            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
                                You have an array of products. Each product has
                                a name, price, description, etc. How will you
                                implement a search to find products by name?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                This way we can find the name of the products
                                <code>
                                    <code>
                                        `const findName = products.find(((e) ={" "}
                                        {`>`} e.name === "apple watch"))`
                                    </code>
                                </code>
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            src={unitTesting}
                            alt="unitTesting"
                        />
                        <div className="p-6">
                            <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
                                What is a unit test? Why should write unit
                                tests?
                            </h1>
                            <p className="leading-relaxed mb-3">
                                Unit Testing is a type of software testing where
                                individual units or components of a software are
                                tested to check if they meet the specified
                                requirements and are working as expected.
                                <br />
                                <br />
                                <br />
                                <code>Unit testing </code>is a software
                                development process in which the smallest
                                testable parts of code, called units, are
                                individually and independently scrutinized for
                                proper operation. This scrutiny includes logical
                                verification and validation as well as
                                performance metrics. Unit testing can be done
                                manually or by applying an automated testing
                                tool to execute test scripts, cases or test
                                suites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;