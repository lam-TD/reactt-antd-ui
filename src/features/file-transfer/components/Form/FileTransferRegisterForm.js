import React, {useState} from 'react';
import {AutoComplete, Button, Card, Form, Input, Select, Space} from 'antd';
import Hr from "../Hr";

import styles from './FileTransferRegisterForm.module.css';
import {LockOutlined, PaperClipOutlined, SendOutlined} from "@ant-design/icons";
import DragDropAble from "./DragDropAble";
import {EmailInput} from "./Input/EmailInput";

const MailAutoComplete = () => {
	const [value, setValue] = useState('');
	const [options, setOptions] = useState([]);

	const mockVal = (str, repeat = 1) => ({
		value: str.repeat(repeat),
	});
	const onSearch = (searchText) => {
		setOptions(
			!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
		);
	};
	const onSelect = (data) => {
		console.log('onSelect', data);
	};
	const onChange = (data) => {
		setValue(data);
	};

	return (
		<AutoComplete
			bordered={false}
			value={value}
			options={options}
			// style={{}}
			onSelect={onSelect}
			onSearch={onSearch}
			onChange={onChange}
			placeholder="control mode"
		/>
	)
}


const FileTransferRegisterForm = (props: Props) => {
	const [form] = Form.useForm();
	const onGenderChange = (value) => {
		switch (value) {
			case 'male':
				form.setFieldsValue({
					note: 'Hi, man!',
				});
				break;
			case 'female':
				form.setFieldsValue({
					note: 'Hi, lady!',
				});
				break;
			case 'other':
				form.setFieldsValue({
					note: 'Hi there!',
				});
				break;
			default:
		}
	};
	const onFinish = (values) => {
		console.log(values);
	};
	const onReset = () => {
		form.resetFields();
	};
	const onFill = () => {
		form.setFieldsValue({
			note: 'Hello world!',
			gender: 'male',
		});
	};
	return (
		<div>
			<Card
				title="Default size card"
				extra={<a href="#">More</a>}
				style={{
					width: '100%',
				}}
				bodyStyle={{padding: 10}}
			>
				<Form
					form={form}
					name="control-hooks"
					onFinish={onFinish}
					style={{width: '100%',}}
					initialValues={{
						body: 'Mail body'
					}}
				>
					<EmailInput label={'To'}/>
					<EmailInput label={'Cc'}/>
					<EmailInput label={'Bcc'}/>

					<Form.Item name="subject" label="" style={{marginBottom: 2}}>
						<Input bordered={false} placeholder="Add a subject"/>
					</Form.Item>
					<Hr/>

					<Form.Item name="body" label=''>
						<DragDropAble></DragDropAble>
					</Form.Item>
					<Hr/>

					<Form.Item name="body" label=''>
						<Space>
							<div className={styles.toolbarButton}>
								<div className={styles.toolbarButtonLeft}>
									<Space wrap>
										<Button icon={<PaperClipOutlined/>}>Select send files</Button>
										<Button icon={<PaperClipOutlined/>}>Save draft</Button>
										<Button icon={<PaperClipOutlined/>}>Limit country</Button>
										<Button icon={<PaperClipOutlined/>}>File reply</Button>
										<Button icon={<LockOutlined/>}>Password setting</Button>
									</Space>
								</div>
								<div className={styles.toolbarButtonRight}>
									<Space wrap>
										<Button icon={<SendOutlined/>} type="primary">Send</Button>
									</Space>
								</div>
							</div>
						</Space>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default FileTransferRegisterForm;
