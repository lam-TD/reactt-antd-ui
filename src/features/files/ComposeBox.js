import React from 'react';
import {Avatar, Button, Card, Col, Form, Grid, Input, List, Row, Space, Tooltip} from "antd";
import './ComposeBox.css';
import {
	EnvironmentOutlined,
	EyeInvisibleOutlined,
	FileOutlined, FileSyncOutlined,
	LockOutlined,
	PaperClipOutlined, RedoOutlined,
	SaveOutlined,
	SendOutlined
} from "@ant-design/icons";
import {MailSelect} from "./Form/MailSelect";

const {Item} = Form;
type Props = {};

const ComposeBox = (props: Props) => {
	const [form] = Form.useForm();
	const formProps = {
		initialValues: {
			subject: "Hello subject",
			to: ['lam@gmail.com']
		},
		onFinish: (values) => {
			console.log(values)
		}
	}

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
						required: true,
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
						required: true,
						message: 'Please input your bcc!',
					},
				]}
			>
				<MyInput label="Bcc" error={() => getFieldErrorMessage('bcc')}/>
			</Item>

			<Item name="subject" noStyle className="compose-item"
						rules={[
							{
								required: true,
								message: 'Please input your subject!',
							},
						]}
			>
				<InputSubject label="Subject" error={() => getFieldErrorMessage('subject')}></InputSubject>
			</Item>

			<Item noStyle>
				<div className="compose-item ps-10 pe-10">
					<List
						itemLayout="horizontal"
						style={{paddingTop: 5, width: '100%'}}
						grid={{
							gutter: 8,
							xs: 1,
							sm: 2,
							md: 4,
							lg: 4,
							xl: 4,
							xxl: 6,
						}}
						dataSource={[
							{
								name: 'file1.doc',
								url: 'https://example.com/file1.doc',
								type: 'doc',
							},
							{
								name: 'file2sdasd.pdf',
								url: 'https://example.com/file2.pdf',
								type: 'pdf',
							},
							{
								name: 'file3.jpg',
								url: 'https://example.com/file3.jpg',
								type: 'jpg',
							},
							{
								name: 'file4.jpg',
								url: 'https://example.com/file3.jpg',
								type: 'jpg',
							},
						]}
						renderItem={(item) => (
							<List.Item
								key={item.name}
								className="file-attachment-list-item"
							>
								<List.Item.Meta
									avatar={
										<Avatar
											className="file-attachment-list-item--meta-avatar"
											icon={<FileOutlined/>}
											// style={{height: '100%'}}
										/>
									}
									title={item.name}
									description={`35KB`}
									className="file-attachment-list-item--meta"
								/>
							</List.Item>
						)}
					/>
				</div>
			</Item>

			<Item noStyle>
				<div className="compose-item">
					<div className="hr"></div>
				</div>
			</Item>

			<Item noStyle name="body">
				<div className="compose-item flex-grow-1">
					<div className="hr">
						<Input.TextArea
							bordered={false}
							maxLength={520}
							showCount
							placeholder="Enter body"
							style={{width: '100%', padding: '0 0 0 0'}}
						/>
					</div>
				</div>
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
