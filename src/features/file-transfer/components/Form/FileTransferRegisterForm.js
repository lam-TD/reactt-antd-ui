import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, Card, Dropdown, Form, Input, message, Select, Space, Switch, Tag, Upload} from 'antd';
import Hr from "../Hr";

import styles from './FileTransferRegisterForm.module.css';
import {
	CaretDownOutlined, EyeInvisibleOutlined,
	FileSyncOutlined,
	LockOutlined,
	PaperClipOutlined,
	SaveOutlined,
	SendOutlined
} from "@ant-design/icons";
import DragDropAble from "./DragDropAble";
import {EmailInput} from "./Input/EmailInput";
import SelectCountry from "../MailSetting/SelectCountry/SelectCountry";
import {DropdownFileReply} from "../MailSetting/DropdownFileReply/DropdownFileReply";


const FileTransferRegisterForm = () => {
	const [form] = Form.useForm();
	const [fileList, setFileList] = useState([]);
	const [files, setFiles] = useState();
	const [isShowCountriesLimit, setIsShowCountriesLimit] = useState(false);

	const config = {
		'file_reply': [
			{
				label: 'Allow',
				key: 0,
			},
			{
				label: 'Not allow',
				key: 1,
			}
		],
		'password_setting': [
			{
				label: 'DAPP',
				key: 0,
			},
			{
				label: 'Send separately by mail after 10 minutes',
				key: 1,
			},
			{
				label: 'URL only',
				key: 2,
			},
			{
				label: 'Use any fixed password',
				key: 3,
			},
			{
				label: 'Sent by email to the sender',
				key: 4,
			}
		],
		'limit_countries': [
			{
				key: 1,
				label: 'Japan'
			},
			{
				key: 2,
				label: 'England'
			},
			{
				key: 3,
				label: 'Viet Nam'
			}
		]
	}


	const propss = {
		name: 'file',
		// action: 'http://localhost/api/test-api',
		multiple: true,
		beforeUpload: (file) => {
			setFileList([...fileList, file]);
			return false;
		},
		onChange(info, e) {
			const {status} = info.file;
			// setFileList([...fileList, info.file]);
			console.log(fileList)
			form.setFieldsValue({
				files: info.fileList
			});

			for (const file in info.fileList) {
				// console.log(info.fileList[file].originFileObj);
			}

			if (status !== 'uploading') {
				// console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			// console.log('Dropped files', e.dataTransfer.files);
		},
		showUploadList: false
	};

	useEffect(() => {
		console.log('fileList', fileList)
	}, [fileList])

	const handleRemoveFile = (file) => {
		setFileList(fileList.filter(fileItem => fileItem.name !== file.name));
	}

	const showHideCountriesLimit = (item) => {
		setIsShowCountriesLimit(item.key == 1);
	}

	const onFinish = (values) => {
		const formData = new FormData();
		formData.append('to', values.to);

		fileList.forEach((file) => formData.append('files[]', file))

		fetch('http://localhost/api/test-api', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	};

	return (
		<div>
			<Card
				title="Default size card"
				extra={<a href="#">More</a>}
				style={{width: '100%',}}
				bodyStyle={{padding: 10}}
			>
				<Form
					form={form}
					name="control-hooks"
					onFinish={onFinish}
					style={{width: '100%',}}
					initialValues={{body: 'Mail body', subject: 'Mail subject'}}
				>
					<EmailInput name={'to'} label={'To'} maxItems={2}/>
					<EmailInput name={'cc'} label={'Cc'}/>
					<EmailInput name={'bcc'} label={'Bcc'}/>

					<Form.Item name="subject" label="" style={{marginBottom: 2, fontWeight: 'bold'}}>
						<Input bordered={false} placeholder="Add a subject"/>
					</Form.Item>
					<Hr/>

					<Form.Item name="body" label=''>
						<DragDropAble onChange={files => setFileList([...fileList, ...files])}></DragDropAble>
					</Form.Item>
					<Hr/>

					{fileList.length > 0 && (
						<>
							<Form.Item style={{marginBottom: 2}}>
								<Space size={[0, 8]} wrap>
									{fileList.map((file, key) => {
										return (
											<Tag
												key={key}
												closable
												color="default"
												onClose={() => handleRemoveFile(file)}>
												{file.name}
											</Tag>
										)
									})}
								</Space>
							</Form.Item>
							<Hr/>
						</>
					)}

					<Form.Item noStyle name="files" label='' style={{marginTop: 10}}>
						<div style={{width: '100%'}}>
							<div className={styles.toolbarButton}>
								<div className={styles.toolbarButtonLeft}>
									<Space wrap>
										<Upload {...propss}>
											<Button icon={<PaperClipOutlined/>}>Select send files</Button>
										</Upload>

										<Button icon={<SaveOutlined/>}>Save draft</Button>
										<DropdownFileReply
											label={'Limit country'}
											items={[{key: 0, label: 'Not Active'}, {key: 1, label: 'Active'}]}
											defaultSelectedKeys={[1]}
											onChange={(item) => showHideCountriesLimit(item)}
											icon={<EyeInvisibleOutlined/>}>
											Limit country: <b> Not Active</b>
										</DropdownFileReply>

										<DropdownFileReply icon={<FileSyncOutlined/>} label={'File reply'} items={config.file_reply}/>
										<DropdownFileReply
											icon={<LockOutlined/>}
											label={'Password setting'}
											items={config.password_setting}
										/>

									</Space>
								</div>
								<div className={styles.toolbarButtonRight}>
									<Button htmlType="submit" icon={<SendOutlined/>} type="primary">Send</Button>
								</div>
							</div>
						</div>
					</Form.Item>

					{isShowCountriesLimit && (
						<Form.Item name="country" label='Countries selected' style={{marginBottom: 2, marginTop: 10}}>
							<SelectCountry/>
						</Form.Item>
					)}


				</Form>
			</Card>
		</div>
	);
};

export default FileTransferRegisterForm;
