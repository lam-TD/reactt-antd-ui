import React, {useState} from 'react';
import {Button, Form, Select, message} from "antd";
import Hr from "../../Hr";

const MailAutoComplete = ({maxItems = undefined, onChange = false}) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [options, setOptions] = useState([{
		value: 't-lam@plott.co.jp',
		label: 'TRAN DUC LAM',
	}]);
	const handleChange = (value, option) => {
		if (value.length > maxItems) {
			message.error('Khong cho chon nua')
			return false;
		}
		setSelectedItems(value)
		console.log(value);
		if (onChange) {
			onChange(value);
		}
	};


	return (
		<Select
			bordered={false}
			mode="tags"
			style={{width: '100%',}}
			onChange={handleChange}
			tokenSeparators={[',']}
			options={options}
			value={selectedItems}
		/>
	)
}

export const EmailInput = ({value = {}, onChange, ...props}) => {
	const handleChangeMail = (value) => {
		triggerChange({
			value: value
		})
	}
	const triggerChange = (changedValue) => {
		onChange?.({
			...value,
			...changedValue,
		});
	};
	return (
		<Form.Item style={{marginBottom: 0,}}>
			<Form.Item label={<Button style={{width: 60, fontWeight: 400, display: 'block'}}><b>{props.label}</b></Button>} name={props.name} style={{marginBottom: 2}}>
				<MailAutoComplete onChange={handleChangeMail}/>
			</Form.Item>
			<Form.Item noStyle>
				<Hr/>
			</Form.Item>
		</Form.Item>
	);
};
