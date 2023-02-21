import React, {useState} from 'react';
import {Avatar, Button, Card, Col, Form, Grid, Input, List, Row, Space, Tooltip} from "antd";
import './ComposeBox.css';
import {
	EnvironmentOutlined,
	LockOutlined,
	PaperClipOutlined, RedoOutlined,
	SaveOutlined,
	SendOutlined
} from "@ant-design/icons";
import {MailSelect} from "./Form/MailSelect";
import MailBody from "./Form/MailBody";

const {Item} = Form;

const ComposeBoxValidator = (fields) => {
	const body = (_, value) => {

	}
}

const ComposeBox = () => {
	const [form] = Form.useForm();

	const formProps = {
		initialValues: {
			subject: "Hello subject",
			to: ['lam@gmail.com'],
			cc: [],
			bcc: [],
			body: {
				text: '',
				files: []
			},
			files: [],
		},
		onFinish: (values) => {
			console.log(values)
		}
	}

	const checkMailBody = (_, value) => {
		console.log('checkMailBody', value);
		const {text, files} = value;
		//check text
		if (text.trim().length <= 0) {
			return Promise.reject(new Error('Please enter the Body!'));
		}

		// check file
		if (files.length >= 3) {
			return Promise.reject(new Error('Max file is 2!'));
		}

		return Promise.resolve();
	};

	const settingButtonItems = [
		{
			label: 'File attachment',
			icon: <PaperClipOutlined/>,
			style: {width: '100%'},
			onClick: () => console.log('Hello...')
		},
		{
			label: 'Save draft',
			icon: <SaveOutlined/>,
			style: {width: '100%'},
			onClick: () => console.log('Hello...')
		},
		{
			label: 'File reply',
			icon: <RedoOutlined/>,
			style: {width: '100%'},
			onClick: () => console.log('Hello...')
		},
		{
			label: 'Limit country',
			icon: <EnvironmentOutlined/>,
			style: {width: '100%'},
			onClick: () => console.log('Hello...')
		},
		{
			label: 'Password setting',
			icon: <LockOutlined/>,
			style: {width: '100%'},
			onClick: () => console.log('Hello...')
		},
	];

	const getFieldErrorMessage = (field) => form.getFieldError(field);

	const MyInput = ({value, onChange, ...props}) => {
		const error = props?.['aria-invalid']
		return (
			<div className="compose-item ps-10" style={{flexDirection: 'column', paddingTop: 0}}>
				<div className="field">
					<Button className="compose-item-label">{props?.label}</Button>
					<div className={'hr' + (error ? ' error' : '')}>
						<MailSelect style={{width: '100%'}} onChange={onChange} value={value}></MailSelect>
					</div>
				</div>
				{error && <div className="error-message">{props?.error()[0]}</div>}
			</div>
		)
	}

	const InputSubject = ({value, onChange, ...props}) => {
		const error = props?.['aria-invalid'];

		return <div className="compose-item">
			<div className="" style={{width: '100%'}}>
				<div className={'hr' + (error ? ' error' : '')}>
					<Input value={value} onChange={onChange} placeholder="Add a subject" bordered={false}
								 rootClassName="ps-0 pt-0 pb-10"/>
				</div>
				{error && <div className="error-message ps-10">{props?.error()[0]}</div>}
			</div>
		</div>
	}

	return (
		<Form form={form} {...formProps} className="compose-wrapper">
			<Item
				noStyle
				label="to"
				name="to"
				rules={[
					{
						required: true,
						message: 'Please input your to!',
					},
				]}
			>
				<MyInput label={'To'} error={() => getFieldErrorMessage('to')}/>
			</Item>

			<Item
				noStyle
				name="cc"
				rules={[
					{
						required: false,
						message: 'Please input your ccc!',
					},
				]}
			>
				<MyInput label="Cc" error={() => getFieldErrorMessage('cc')}/>
			</Item>

			<Item
				noStyle
				name="bcc"
				rules={[
					{
						required: false,
						message: 'Please input your bcc!',
					},
				]}
			>
				<MyInput label="Bcc" error={() => getFieldErrorMessage('bcc')}/>
			</Item>

			<Item
				name="subject"
				noStyle
				className="compose-item"
				rules={[
					{
						required: false,
						message: 'Please input your subject!',
					},
				]}
			>
				<InputSubject label="Subject" error={() => getFieldErrorMessage('subject')}></InputSubject>
			</Item>

			<Item
				noStyle
				name="body"
				rules={[
					{
						validator: checkMailBody,
					},
				]}>
				<MailBody error={() => getFieldErrorMessage('body')}/>
			</Item>

			<Item noStyle>
				<div className="compose-item btn-setting-wrapper ps-10 pe-10">
					<div className="btn-setting-list">
						<Row gutter={[8, 8]}>
							<Col xs={24} sm={8} md={8} lg={8} xl={6} xxl={4}>
								<Button
									icon={<SendOutlined/>}
									type="primary"
									htmlType="submit"
									style={{width: '100%'}}
								>Send</Button>
							</Col>
							{settingButtonItems.map((button, key) => {
								return (
									<Col key={key} xs={24} sm={8} md={8} lg={8} xl={6} xxl={4}>
										<Button
											onClick={button.onClick}
											type={button.type ?? 'default'}
											style={button?.style}
											icon={button?.icon}
										>
											{button.label}
										</Button>
									</Col>
								)
							})}
						</Row>
					</div>
				</div>
			</Item>
		</Form>
	);
};

export default ComposeBox
