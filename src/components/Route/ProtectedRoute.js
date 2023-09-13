import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.users);
    let location = useLocation();

    if(user.isAuthenticated === false) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    // if(children.isAdmin === true && user.user.role !== "admin") {
    //     return <Navigate to="/login" state={{ from: location}} replace />
    // }
 return children

};

export default ProtectedRoute;