import React, {useEffect, useRef} from 'react';
import './LoginForm.css';
import {Form, Input, Button, Checkbox, Select} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';
import LanguageSelect from "../../language/LanguageSelect";

const {Option} = Select;
const LoginForm = ({onSubmit, defaultData = {}, disabled = false}) => {
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus({
			cursor: 'end',
		});
	}, []);
	const handleChangeLoginType = (value) => {
		console.log(value)
	}
	const handleChangeLanguage = (value) => {
		form.setFieldsValue({language: value})
	}
	return (
		<Form
			form={form}
			disabled={disabled}
			name="normal_login"
			className="login-form"
			style={{width: 600}}
			initialValues={{
				remember: true,
				login_type: ''
			}}
			onFinish={onSubmit}
		>
			<Form.Item
				name="username"
				style={{marginBottom: 15}}
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}
			>
				<Input
					ref={inputRef}
					prefix={<UserOutlined className="site-form-item-icon"/>}
					placeholder={t('username')}
				/>
			</Form.Item>

			<Form.Item
				style={{marginBottom: 15}}
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon"/>}
					type="password"
					placeholder={t('password')}
				/>
			</Form.Item>

			<Form.Item
				name="login_option"
				style={{marginBottom: 15}}
				label={t('login_type')}
				initialValue=''
				rules={[
					{
						message: 'Please input your Username!',
					},
				]}
			>
				<Select defaultValue='usa' placeholder="Please select a country">
					<Option value="">No link</Option>
					{defaultData.ldap && defaultData.ldap.map((item) => {
						return <Option key={item.ldap_id} value={item.ldap_id}>{item.ldap_name}</Option>
					})}
				</Select>
			</Form.Item>

			<Form.Item style={{marginBottom: 15}}>
				<Form.Item name="remember" style={{marginBottom: 15}} valuePropName="checked" noStyle>
					<Checkbox>{t('remember_me')}</Checkbox>
				</Form.Item>

				<a className="login-form-forgot" href="">
					{t('forgot_password')}
				</a>
			</Form.Item>

			<Form.Item style={{marginBottom: 15}}>
				<Button type="primary" htmlType="submit" className="login-form-button">
					{t('login')}
				</Button>
			</Form.Item>

			<Form.Item
				name="language"
				label="Language"
				children={<LanguageSelect onChange={handleChangeLanguage} initLanguage="ja"/>}
			>
			</Form.Item>
		</Form>
	);
};

export default LoginForm
