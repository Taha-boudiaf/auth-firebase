import React from 'react';
import { Navigate,useLocation  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({children,...res}) => {
    const {currentUser} =  useAuth();
    const location = useLocation();
    if (!currentUser) {
        return <Navigate to="/signin" state={{path:location.pathname}}/>
    }
    
    return children
};

export default ProtectedRoute;
