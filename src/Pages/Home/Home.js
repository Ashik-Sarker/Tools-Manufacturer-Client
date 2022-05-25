import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import PowerSeries from './PowerSeries';
import PowerThroughYourDay from './PowerThroughYourDay';
import PowerTools from './PowerTools';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <PowerThroughYourDay></PowerThroughYourDay>
            <PowerSeries></PowerSeries>
            <BusinessSummary></BusinessSummary>
            <PowerTools></PowerTools>
            <Review></Review>
        </div>
    );
};

export default Home;