import React, { useContext } from 'react';
import { authProviderContex } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user,loading}=useContext(authProviderContex)
    const location=useLocation()
    console.log(loading);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
    ;
};

export default PrivateRoute;