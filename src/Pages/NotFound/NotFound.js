import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../asset/not-found.png';

const NotFound = () => {
    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-6xl my-4">OOPS!!</h2>
                <h3 className="text-4xl my-4">Error 404</h3>
                <h6 className="text-6xl my-4">Page Not Found</h6>
            </div>
            <div>
                <img className="mx-auto" src={notfound} alt="Not Found" />
            </div>
            <div className="text-center my-4">
                <Link to="/" className="btn btn-primary text-white">
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;