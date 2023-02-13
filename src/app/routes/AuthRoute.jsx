import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const AuthRoute = () => {
	const isAuthenticated = true;
	return (
		isAuthenticated ? <Outlet/> : <Navigate to="/"/>
	)
};
export default AuthRoute;
