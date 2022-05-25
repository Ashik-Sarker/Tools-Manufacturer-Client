import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import PowerTools from './PowerTools';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <PowerTools></PowerTools>
            <Review></Review>
        </div>
    );
};

export default Home;