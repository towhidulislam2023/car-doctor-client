import React, { useContext } from 'react';
import { authProviderContex } from '../Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user,loading}=useContext(authProviderContex)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
    ;
};

export default PrivateRoute;