import React, { useContext } from 'react';
import Header from '../../sheared/Sheared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../sheared/Sheared/Footer';
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';

const MainLayout = () => {
    const {loading}=useContext(authProviderContex)
    console.log(loading,"from main");
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;