import React, {useState} from 'react';
import {AutoComplete, Button, Form} from "antd";
import Hr from "../../Hr";

type Props = {

};

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
			onSelect={onSelect}
			onSearch={onSearch}
			onChange={onChange}
			placeholder="control mode"
		/>
	)
}

export const EmailInput = (props) => {
	return (
		<Form.Item
			label={<Button style={{width: 60, fontWeight: 400}}><b>{props.label}</b></Button>}
			style={{marginBottom: 0,}}
		>
			<Form.Item name={props.name} style={{marginBottom: 2}}>
				<MailAutoComplete/>
			</Form.Item>
			<Form.Item noStyle>
				<Hr/>
			</Form.Item>
		</Form.Item>
	);
};
