import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import {Layout} from "antd";

import * as authentication from '../../../services/authentication';
import {getAuthInfo} from '../../../features/auth/redux/authActions';
import {useTranslation} from "react-i18next";
import {Header} from "./Header/Header";
import {selectIsLoggingIn} from '../../../features/auth/redux/authSlice';

const AuthLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggingIn = useSelector(selectIsLoggingIn);
	const {t} = useTranslation();

	useEffect(() => {
		if (!isLoggingIn || !authentication.getAccessToken()) {
			if (authentication.getAccessToken()) {
				dispatch(getAuthInfo())
			} else {
				navigate('/login')
			}
		}
	}, [isLoggingIn])

	return (
		(
			<Layout style={{height: '100%',}}>
				<Header/>
				<Layout.Content style={{padding: '0 50px'}}>
					<Outlet/>
				</Layout.Content>
				<Layout.Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
			</Layout>
		)
	)
};
export default AuthLayout;
