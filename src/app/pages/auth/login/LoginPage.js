import React, {useEffect} from 'react';
import {Layout, Typography} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {LoginForm} from "../../../../antd-ui";
import styles from './LoginPage.module.css';

import {loadInfo, login, selectLogin, loadLoginInfo} from './LoginSlice';

const {Content} = Layout;
const {Title} = Typography;


const LoginPage = () => {
	const login = useSelector(selectLogin);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadLoginInfo('admin'));
	}, []);

	const onFinish = (values) => {
		console.log('Received values of form: ', values);

	}

	return (
		<Layout
			style={{
				// background: 'url(images/bg-1.jpg)'
			}}
			className={styles.layout}
		>
			<Content className={styles.content}>
				<Title type="success">{login.companyCode}</Title>
				<LoginForm onSubmit={onFinish} defaultData={login.info}/>
			</Content>
		</Layout>
	)
}
export default LoginPage;
