import React, {useState} from 'react';
import {Avatar, Badge, Button, Card, Col, Form, Grid, Input, List, Row, Space, Tooltip, Upload} from "antd";
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
import SettingModal from "./SettingModal";
import templateConfig from './template.json';

const {Item} = Form;

const ComposeBox = () => {
	const [form] = Form.useForm();
	const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
	const [attachments, setAttachment] = useState([]);

	const formProps = {
		initialValues: {
			subject: templateConfig.mail_subject.data,
			to: ['lam@gmail.com'],
			cc: [],
			bcc: [],
			body: {
				text: templateConfig.mail_body.data,
				files: []
			},
			files: [],
			setting: {
				limit_country: [],
				password_setting: []
			}
		},
		onFinish: (values) => {
			console.log(values)
		}
	}

	const handleSettingModalCancel = () => {
		setIsOpenSettingModal(false);
	}
	const handleSettingModalOk = (values) => {
		setIsOpenSettingModal(false);
		form.setFieldValue('setting', values)
		console.log('values', values)
	}

	const checkMailBody = (_, value) => {
		const {text, files} = value;
		//check text
		if (text.trim().length <= 0) {
			return Promise.reject(new Error('Please enter the Body!'));
		}

		// check file
		if (files.length >= 10) {
			return Promise.reject(new Error('Max file is 2!'));
		}

		return Promise.resolve();
	};

	const settingButtonItems = [
		{
			label: 'Save draft',
			icon: <SaveOutlined/>,
			type: 'text',
			onClick: () => setIsOpenSettingModal(true)
		},
		{
			label: 'File reply',
			icon: <RedoOutlined/>,
			type: 'text',
			onClick: () => setIsOpenSettingModal(true)
		},
		{
			label: 'Limit country',
			icon: <EnvironmentOutlined/>,
			type: 'text',
			onClick: () => {
				setIsOpenSettingModal(true)
			}
		},
		{
			label: 'Password setting',
			icon: <LockOutlined/>,
			type: 'text',
			onClick: () => setIsOpenSettingModal(true)
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

	const handleSelectAttachment = () => {

	}

	const uploadProps = {
		showUploadList: false,
		multiple: true,
		beforeUpload: (file) => {
			// console.log(file);
			const body = form.getFieldValue('body');
			const oldFiles = body.files;
			const newFiles = [...oldFiles, file]
			form.setFieldValue('body', {text: body.text, files: newFiles});
			setAttachment(newFiles)
			return false;
		},
	};

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
				<MailBody attachments={attachments} error={() => getFieldErrorMessage('body')}/>
			</Item>

			<Item noStyle name="setting">
				<div className="compose-item btn-setting-wrapper ps-10 pe-10">
					<div className="btn-setting-list">
						<Space>
							<Button
								icon={<SendOutlined/>}
								type="primary"
								htmlType="submit"
								style={{width: '100%'}}
							>
								Send
							</Button>

							<Button type="default" style={{width: '100%'}}>
								Discard
							</Button>

							<Upload {...uploadProps}>
								<Tooltip title="File attachment">
									<Button type="text" icon={<PaperClipOutlined/>}></Button>
								</Tooltip>
							</Upload>

							{settingButtonItems.map((button, key) => {
								return (
									<Tooltip key={key} title={button.label}>
										<Button
											onClick={button.onClick}
											type={button.type ?? 'default'}
											style={button?.style}
											icon={button?.icon}
										>
										</Button>
									</Tooltip>
								)
							})}
						</Space>
					</div>
				</div>
			</Item>

			<Item noStyle>
				<SettingModal
					open={isOpenSettingModal}
					handleOk={handleSettingModalOk}
					handleCancel={handleSettingModalCancel}
				/>
			</Item>
		</Form>
	);
};

export default ComposeBox
