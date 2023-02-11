import React, {useEffect, useState} from 'react';
import {Avatar, Layout, Skeleton, Typography} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {LoginForm} from "../../../../antd-ui";
import styles from './LoginPage.module.css';

import {loadInfo, login, selectLogin, getLoginInfo} from './LoginSlice';
import clientApi from "../../../../services/clientApi";
import {AntDesignOutlined} from "@ant-design/icons";

const {Content} = Layout;
const {Title} = Typography;


const LoginPage = () => {
	const login = useSelector(selectLogin);
	const dispatch = useDispatch();
	const [imageUrl, setImageUrl] = useState('images/login-logo.jpeg');
	const [text, setText] = useState('Hi');
	const [isLoading, setIsLoading] = useState(true);
	const [formInfo, setFormInfo] = useState({});

	useEffect(() => {
		clientApi
			.get(`api/login/info/admin`)
			.then(res => res.data.data)
			.then(data => {
				const {text, ldap} = data;
				setText(text);
				setFormInfo({
					ldap: ldap
				})
			})
			.catch(error => console.log(error))
			.then(data => setIsLoading(false));
	}, []);

	const handleSubmit = (values) => {
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
				{isLoading ? <>
					<Skeleton.Image active={true} shape={'circle'} style={{ marginBottom: 5}}/>
					<Skeleton.Input active={true} style={{ marginBottom: 5}}/>
				</> : (
					<>
						<Avatar
							size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
							// icon={<AntDesignOutlined />}
							shape="square"
							src={imageUrl}
						/>
						<Title>{text}</Title>
					</>
				)}
				<LoginForm onSubmit={handleSubmit} defaultData={formInfo} disabled={isLoading}/>
			</Content>
		</Layout>
	)
}
export default LoginPage;
