import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import {Avatar, Layout} from "antd";
import {AntDesignOutlined} from "@ant-design/icons";
import styles from './LoginPage.module.css';

import {LoginForm} from "../../components/LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading, selectLoginError, selectIsLoggingIn} from '../../redux/authSlice'
import * as authActions from '../../redux/authActions';
import * as authentication from '../../../../services/authentication';

const {Content} = Layout;

type Props = {
	children: Component
};
export const LoginPage = () => {
	const dispatch = useDispatch();

	const isSubmitting = useSelector(selectIsLoading);
	const isLoggingIn = useSelector(selectIsLoggingIn);
	const error = useSelector(selectLoginError)
	const handleSubmit = (values) => {
		console.log(values);
		dispatch(authActions.actions(values))
	}
	return (
		isLoggingIn ? <Navigate to='/dashboard'/> :
			<Layout className={styles.layout}>
				<Content className={styles.content}>
					<div className={styles.avatar}>
						<Avatar
							size={{xs: 24, sm: 32, md: 64, lg: 64, xl: 80, xxl: 100}}
							icon={<AntDesignOutlined/>}
							shape="square"
							className={styles.avatar}
						/>
						{/*<Title>{text}</Title>*/}
					</div>

					<LoginForm disabled={isSubmitting} onSubmit={handleSubmit} errors={error}/>
				</Content>
			</Layout>
	);
};
