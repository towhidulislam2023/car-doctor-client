import React from 'react';
import Header from '../../sheared/Sheared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../sheared/Sheared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;