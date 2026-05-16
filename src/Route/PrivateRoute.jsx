// import React from 'react';

import { Navigate, useLocation } from "react-router";
import useAuth from "../Hookes/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className="h-full items-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-xs"></span>
        </div>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;