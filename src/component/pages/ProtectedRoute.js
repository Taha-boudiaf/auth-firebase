import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({Children}) => {
    const {currentUser} = useAuth();
    if (!currentUser) {
        return <Navigate to="/"/>
    }
    return Children
};

export default ProtectedRoute;
