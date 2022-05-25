import React from 'react';
import spinner from '../../asset/spiner.png';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <img className="w-28 animate-spin" src={spinner} alt="" />
        </div>
    );
};

export default Loading;