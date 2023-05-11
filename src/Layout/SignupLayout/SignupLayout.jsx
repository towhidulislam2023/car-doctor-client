import React from 'react';
import Header from '../../sheared/Sheared/Header';
import SignUp from '../../Pages/Singup/SignUp';

const SignupLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <SignUp></SignUp>
        </div>
    );
};

export default SignupLayout;