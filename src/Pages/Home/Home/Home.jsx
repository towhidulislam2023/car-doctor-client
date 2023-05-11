import React from 'react';
import HomeBannar from '../HomeBannar/HomeBannar';
import About from '../About/About';
import Services from '../Services/Services';
import ExtraInfo from '../ExtraInfo/ExtraInfo';

const Home = () => {
    return (
        <div>
            <HomeBannar></HomeBannar>
            <About></About>
            <Services></Services>
            <ExtraInfo></ExtraInfo>
        </div>
    );
};

export default Home;