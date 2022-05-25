import React from 'react';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import OurFactory from '../OurFactory/OurFactory';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offer />
            <Parts />
            <Summary/>
            <OurFactory/>
            <Reviews/>
        </div>
    );
};

export default Home;