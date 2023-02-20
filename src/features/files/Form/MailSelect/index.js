import React, {useState} from 'react';
import {Avatar, message, Select} from "antd";

import './MailSelect.css'
import {FileOutlined} from "@ant-design/icons";

export const MailSelect = ({onChange, maxItems = undefined}) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [options, setOptions] = useState([
		{
			label: 'Manager',
			options: [
				{
					label: 'Jack',
					value: 'jack@gmail.com',
				},
				{
					label: 'Lucy',
					value: 'lucy@plott.co.jp',
				},
			],
		},
	]);
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
	const dropdownStyle = { width: 200 }; // set dropdown width to 200px
	const dropdownRender = menu => (
		<div style={dropdownStyle} className="ant-select-dropdown-menu">
			{menu}
		</div>
	);
	const getOptionProps = () => ({
		className: 'my-custom-option-class',
		style: { width: '100%' }, // set width for each option to 100%
	});
	return (
		<Select mode={'tags'} bordered={false} style={{width: '100%',}}>
			{options ? (
				options.map(item => (
					<Select.OptGroup label="Suggest">
						{item.options.map(option => (
							<Select.Option key={option.value} value={option.value} {...getOptionProps()}>
								<div className="email-item">
									<div className="email-item-icon">
										<Avatar
											className="file-attachment-list-item--meta-avatar"
											children={'L'}
										/>
									</div>
									<div className="email-item-text">
										<span>{option.label}</span>
										<span>{option.value}</span>
									</div>
								</div>
							</Select.Option>
						))}
					</Select.OptGroup>
				))
			): null}
		</Select>
	);
};
