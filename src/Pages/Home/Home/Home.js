import React from 'react';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Parts from '../Parts/Parts';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <Parts />
            <Summary/>
        </div>
    );
};

export default Home;