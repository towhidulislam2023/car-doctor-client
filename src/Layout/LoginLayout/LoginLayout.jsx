import React from 'react';
import Header from '../../sheared/Sheared/Header';
import Login from '../../Pages/Login/Login';
const LoginLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Login></Login>
        </div>
    );
};

export default LoginLayout;