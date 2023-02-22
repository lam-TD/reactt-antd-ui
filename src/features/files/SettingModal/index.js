import React, {useState} from 'react';
import {Form, Input, Modal, Radio, Space, Switch} from "antd";
import {CountrySelect} from "../CountrySelect";

type Props = {
	open: boolean,
	handleOk: void,
	handleCancel: void,
};
const SettingModal = (props: Props) => {
	const [form] = Form.useForm();
	const isModalOpen = props.open;

	const [fileReply, setFileReply] = useState(false);
	const [passwordSettingValue, setPasswordSettingValue] = useState(1);
	const [itemPasswordSetting, setItemPasswordSetting] = useState();

	const triggerChangeValue = (changeValue) => {
		console.log('changeValue', changeValue);
		setItemPasswordSetting(changeValue)
	}

	const settingConfig = {
		mail_password_type: {
			"default_value": "1",
			"input_name": "mail_password_type",
			"input_type": "radio",
			"title": "MAIL_PASSWORD_TYPE",
			"data": {
				"1": {
					"mail_password_time": {
						"title": "MAIL_PASSWORD_TYPE_1",
						"default_value": "6",
						"input_name": "mail_password_time",
						"input_type": "text"
					}
				},
				"2": "MAIL_PASSWORD_TYPE_2",
				"3": "MAIL_PASSWORD_TYPE_3",
				"4": "MAIL_PASSWORD_TYPE_4",
				"5": {
					"file_transfer_password": {
						"title": "MAIL_PASSWORD_TYPE_5",
						"input_name": "file_transfer_password",
						"default_value": "",
						"input_type": "text"
					}
				},
				"6": "MAIL_PASSWORD_TYPE_6"
			}
		}
	}

	const PasswordSettingRadioGroup = ({triggerChangeValue}) => {
		const config = settingConfig.mail_password_type.data;
		const list = [];

		const ComplexRadioOption = ({item, optionKey, onChange, activeInput = false}) => {
			const value = Object.values(item)[0];
			const keyName = Object.keys(item)[0];
			const [inputValue, setInputValue] = useState(value['default_value']);

			const handleOnChange = (e) => {
				const text = e.target.value;
				setInputValue(e.target.value);
				// triggerChangeValue({'dddd': 1});
				onChange({
					[keyName]: text
				})

			}
			return (
				<Radio value={optionKey}>
					{value.title}
					<Input
						disabled={activeInput}
						style={{width: 100, marginLeft: 10,}}
						value={inputValue}
						onChange={handleOnChange}
					/>
				</Radio>
			)
		}

		for (let key in settingConfig.mail_password_type.data) {
			const item = config[key];
			if (typeof item == "string") {
				list.push(<Radio key={key} value={key}>{item}</Radio>);
			} else if (typeof item == "object") {
				const value = Object.values(item)[0];
				list.push(<ComplexRadioOption
					key={key} item={item}
					optionKey={key}
					activeInput={key !== passwordSettingValue}
					onChange={triggerChangeValue}
				/>);
			}
		}
		return (
			<Space direction="vertical">
				{list}
			</Space>
		)
	}

	const handleOnChange = (isChecked) => {
		setFileReply(isChecked)
	}

	const handlePasswordSettingChange = (e) => {
		const key = e.target.value;
		setPasswordSettingValue(key);
		console.log('key', key);
		const item = settingConfig.mail_password_type.data[key];

		if (typeof item == "object") {

		}
	}

	const handleCancel = () => {
		if (props.handleCancel) {
			props.handleCancel()
		}
	}
	const handleOk = () => {
		if (props.handleOk) {
			props.handleOk({...form.getFieldsValue(true), ...itemPasswordSetting})
		}
	}

	return (
		<Modal title="Settings" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
			<Form form={form} layout="vertical">
				<Form.Item name="file_reply" label="File reply">
					<Switch
						onChange={handleOnChange}
						checkedChildren="Active"
						unCheckedChildren="Not active"
						checked={fileReply}
					/>
				</Form.Item>

				<Form.Item name="limit_country" label="Limit country">
					<CountrySelect/>
				</Form.Item>

				<Form.Item name="password_setting" label="Password setting">
					<Radio.Group onChange={handlePasswordSettingChange} value={passwordSettingValue}>
						<PasswordSettingRadioGroup triggerChangeValue={triggerChangeValue}/>
					</Radio.Group>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default SettingModal;
