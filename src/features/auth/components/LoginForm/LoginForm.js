import React, {useEffect, useRef} from 'react';
import {Alert, Button, Checkbox, Form, Input, Select} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import LanguageSelect from "../../../../antd-ui/components/language/LanguageSelect";
import {ErrorList} from "../ErrorList/ErrorList";
export const LoginForm = ({onSubmit, defaultData = {}, disabled, errors = [], ...props}) => {
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus({
			cursor: 'end',
		});
	}, []);

	const handleChangeLanguage = () => {

	}

	return (
		<Form
			form={form}
			name="normal_login"
			className="login-form"
			style={{width: 600}}
			initialValues={{
				remember: true,
				login_type: ''
			}}
			onFinish={onSubmit}
		>

			{errors && <ErrorList errors={errors}/>}

			<Form.Item
				name="login_code"
				style={{marginBottom: 15}}
				rules={[
					{
						required: true,
						message: 'Please input your Login code!',
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
			>
				<Select placeholder="Please select a country">
					<Select.Option value="">No link</Select.Option>
					{defaultData.ldap && defaultData.ldap.map((item) => {
						return <Select.Option key={item.ldap_id} value={item.ldap_id}>{item.ldap_name}</Select.Option>
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
				<Button loading={disabled} type="primary" htmlType="submit" className="login-form-button">
					{t('login')}
				</Button>
			</Form.Item>

			<Form.Item
				name="language"
				label="Language"
				children={<LanguageSelect onChange={handleChangeLanguage} initLanguage="en"/>}
			>
			</Form.Item>
		</Form>
	);
};
